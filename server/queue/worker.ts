import { Worker } from "bullmq";
import { Redis } from "@upstash/redis";
import { OpenAI } from "openai";
import { db } from "@/server/db";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface SyncJobData {
  syncHistoryId: string;
  userId: string;
  tweetId: string;
  content: string;
  useAiModification: boolean;
}

const worker = new Worker(
  "sync-queue",
  async (job) => {
    const { syncHistoryId, userId, content, useAiModification } = job.data as SyncJobData;

    try {
      // Fetch the user record to retrieve the LinkedIn token
      const user = await db.user.findUnique({
        where: { id: userId },
      });

      if (!user?.linkedinToken) {
        // new Error("LinkedIn token not found");
      }

      let postContent = content;

      // If AI modifications are enabled, transform the content using OpenAI
      if (useAiModification) {
        const completion = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "You are a professional content writer. Transform the given tweet into a LinkedIn-appropriate post while maintaining the core message. Make it more formal and professional, but keep it concise.",
            },
            {
              role: "user",
              content: content,
            },
          ],
        });

        postContent = completion.choices[0].message.content || content;

        // Update the sync history with the modified content
        await db.syncHistory.update({
          where: { id: syncHistoryId },
          data: { modifiedContent: postContent },
        });
      }

      // Post to LinkedIn (placeholder implementation)
      const linkedinPostId = await postToLinkedIn(postContent, user.linkedinToken);

      // Update sync history as successful
      await db.syncHistory.update({
        where: { id: syncHistoryId },
        data: {
          status: "SUCCESS",
          linkedinPostId,
        },
      });
    } catch (error) {
      console.error("Sync Error:", error);

      // Update sync history as failed
      await db.syncHistory.update({
        where: { id: syncHistoryId },
        data: {
          status: "FAILED",
          error: error instanceof Error ? error.message : "Unknown error",
        },
      });

      // Re-throw the error to trigger a job retry
      
    }
  },
  // {
  //   // connection: redis,
  // }
);

// Placeholder function for posting to LinkedIn
async function postToLinkedIn(content: string, token: string): Promise<string> {
  // Implement the LinkedIn API call logic here.
  return "placeholder_post_id";
}

// Listen for worker events
worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed successfully`);
});

worker.on("failed", (job, error) => {
  console.error(`Job ${job?.id} failed:`, error);
});

// Graceful shutdown on SIGTERM
process.on("SIGTERM", async () => {
  await worker.close();
});