import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    // Twitter Bearer Token (ensure it's set in your environment variables)
    const bearerToken = process.env.TWITTER_BEARER_TOKEN as string;

    if (!bearerToken) {
      return NextResponse.json({ error: "Missing Twitter API credentials" }, { status: 500 });
    }

    // Fetch user ID from Twitter API
    const response = await fetch(`https://api.twitter.com/2/users/by/username/${username}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Twitter API Error: ${response.statusText}`);
    }

    const data = await response.json();
    const twitterId = data.data?.id;

    if (!twitterId) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ twitterId });
  } catch (error) {
    console.error("Error fetching Twitter ID:", error);
    return NextResponse.json({ error: "Failed to fetch Twitter ID" }, { status: 500 });
  }
}
