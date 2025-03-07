import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/server/db";

export async function GET(request: Request) {
  try {
    const { userId } = await auth();
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    if (!userId || !code) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Exchange the code for access token
    // This is a placeholder - you'll need to implement the actual LinkedIn OAuth flow
    const linkedinToken = "placeholder_token";
    const linkedinId = "placeholder_id";

    // Update user's LinkedIn credentials in database
    await db.user.update({
      where: { id: userId },
      data: {
        linkedinId,
        linkedinToken,
      },
    });

    return NextResponse.redirect(new URL("/dashboard", request.url));
  } catch (error) {
    console.error("LinkedIn OAuth Error:", error);
    return NextResponse.redirect(new URL("/dashboard?error=linkedin_auth_failed", request.url));
  }
} 