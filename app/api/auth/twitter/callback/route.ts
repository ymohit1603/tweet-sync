import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/server/db";

export async function GET(request: Request) {
  try {
    // Retrieve the authenticated user's ID from Clerk
    const { userId } = await auth();
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    // If no user or code exists, redirect back to dashboard
    if (!userId || !code) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Set up your Twitter OAuth credentials from environment variables
    const clientId = process.env.TWITTER_CLIENT_ID as string;
    const clientSecret = process.env.TWITTER_CLIENT_SECRET as string;
    const redirectUri = process.env.TWITTER_REDIRECT_URI as string;
    const codeVerifier = process.env.TWITTER_CODE_VERIFIER as string; // Only if you're using PKCE

    // Exchange the authorization code for an access token from Twitter
    const tokenResponse = await fetch("https://api.twitter.com/2/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // Basic auth header is created by base64 encoding clientId:clientSecret
        "Authorization": "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      },
      body: new URLSearchParams({
        code,
        grant_type: "authorization_code",
        client_id: clientId,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier, // Remove if not using PKCE
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error("Failed to fetch token from Twitter");
    }

    const tokenData = await tokenResponse.json();

    // Extract Twitter access token and user ID from the response
    const twitterToken = tokenData.access_token;
    const twitterId = tokenData.user_id; // Verify the key names with Twitter's docs

    // Update the user's record in your database with Twitter credentials
    await db.user.update({
      where: { id: userId },
      data: {
        twitterId,
        twitterToken,
      },
    });

    // Redirect the user back to their dashboard after successful authentication
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } catch (error) {
    console.error("Twitter OAuth Error:", error);
    // Redirect with an error flag in the query string
    return NextResponse.redirect(new URL("/dashboard?error=twitter_auth_failed", request.url));
  }
}
