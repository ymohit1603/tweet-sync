import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { Queue } from "bullmq";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// const syncQueue = new Queue("sync-queue", {
//   // connection: redis,
// });

export async function POST(request: Request) {
  try {
    const signature = await request.headers.get("x-twitter-webhooks-signature");
    
    // Verify webhook signature
    if (!signature || !verifySignature(signature, await request.text())) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    const payload = await request.json();
    
    // Extract tweet data
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

    // Check user settings
    if (!user.settings?.autoSync) {
      return new NextResponse("Auto-sync disabled", { status: 200 });
    }

    // Create sync history record
    const syncHistory = await db.syncHistory.create({
      data: {
        userId: user.id,
        tweetId,
        content,
        status: "PENDING",
      },
    });

    // Add to sync queue
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

// Verify Twitter webhook signature
function verifySignature(signature: string, body: string): boolean {
  // Implement signature verification logic
  // This is a placeholder - you'll need to implement the actual verification
  return true;
} 