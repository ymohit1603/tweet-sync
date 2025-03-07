import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/server/db";

export async function GET(request: Request) {
  try {
    const { userId } =await auth();
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    if (!userId || !code) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Exchange the code for access token
    // This is a placeholder - you'll need to implement the actual Twitter OAuth flow
    const twitterToken = "placeholder_token";
    const twitterId = "placeholder_id";

    // Update user's Twitter credentials in database
    await db.user.update({
      where: { id: userId },
      data: {
        twitterId,
        twitterToken,
      },
    });

    return NextResponse.redirect(new URL("/dashboard", request.url));
  } catch (error) {
    console.error("Twitter OAuth Error:", error);
    return NextResponse.redirect(new URL("/dashboard?error=twitter_auth_failed", request.url));
  }
} 