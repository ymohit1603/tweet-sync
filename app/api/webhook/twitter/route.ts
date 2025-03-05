import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Get the tweet data

    if (body && body.text) {
      await axios.post("https://api.linkedin.com/v2/ugcPosts", {
        text: body.text, // Sync tweet to LinkedIn
      });

      console.log("Tweet synced to LinkedIn:", body.text);
    }

    return NextResponse.json({ message: "Tweet received and synced to LinkedIn" }, { status: 200 });
  } catch (error) {
    console.error("Error syncing tweet:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}