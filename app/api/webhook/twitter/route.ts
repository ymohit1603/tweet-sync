import { NextResponse } from "next/server";
import { db } from "@/server/db"; // adjust this import to your actual DB client
import { Queue } from "bullmq";
import IORedis from "ioredis";

// Create Redis connection using ioredis
const redisConnection = new IORedis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT || 6379),
  password: process.env.REDIS_PASSWORD,
});

// Initialize BullMQ queue with Redis connection
const syncQueue = new Queue("sync-queue", {
  connection: redisConnection,
});

// Next.js POST endpoint for Twitter webhooks
export async function POST(request: Request) {
  try {
    // Read the raw text for signature verification
    const body = await request.text();
    const signature = request.headers.get("x-twitter-webhooks-signature");

    // Verify webhook signature
    if (!signature || !verifySignature(signature, body)) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    // Parse the JSON payload
    const payload = JSON.parse(body);

    // Extract tweet data (adjust structure based on Twitter's webhook payload)
    const {
      user_id: twitterId,
      id_str: tweetId,
      text: content,
    } = payload.tweet_create_events[0];

    // Find user by Twitter ID
    const user = await db.user.findUnique({
      where: { twitterId: twitterId },
      include: { settings: true },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Check if auto-sync is enabled for the user
    if (!user.settings?.autoSync) {
      return new NextResponse("Auto-sync disabled", { status: 200 });
    }

    // Create sync history record in your database
    const syncHistory = await db.syncHistory.create({
      data: {
        userId: user.id,
        tweetId,
        content,
        status: "PENDING",
      },
    });

    // Add the tweet to the BullMQ sync queue for background processing
    await syncQueue.add(
      "sync-tweet",
      {
        syncHistoryId: syncHistory.id,
        userId: user.id,
        tweetId,
        content,
        useAiModification: user.settings?.useAiModification,
      },
      {
        attempts: user.settings?.maxRetries ?? 3,
        backoff: {
          type: "exponential",
          delay: 1000,
        },
      }
    );

    return new NextResponse("Webhook processed", { status: 200 });
  } catch (error) {
    console.error("Twitter Webhook Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// Placeholder for Twitter webhook signature verification.
// Replace with actual HMAC-SHA256 logic using your TWITTER_CONSUMER_SECRET as the key.
// See: https://developer.twitter.com/en/docs/twitter-api/enterprise/account-activity-api/guides/securing-webhooks
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function verifySignature(signature: string, body: string): boolean {
  // Example implementation:
  // import crypto from 'crypto';
  // const hash = crypto.createHmac('sha256', process.env.TWITTER_CONSUMER_SECRET!)
  //                   .update(body)
  //                   .digest('base64');
  // return signature === `sha256=${hash}`;

  // For now, always return true for demo purposes.
  return true;
}
