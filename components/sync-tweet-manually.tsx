"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface Tweet {
  id: string;
  text: string;
  created_at: string;
}

const Tweet-Sync = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/twitter/recent-tweets");
      setTweets(response.data);
    } catch (error) {
      console.error("Error fetching tweets", error);
    } finally {
      setLoading(false);
    }
  };

  const syncToLinkedIn = async (tweet: Tweet) => {
    try {
      setLoading(true);
      await axios.post("/api/linkedin/post", { text: tweet.text });
      alert("Tweet synced to LinkedIn!");
    } catch (error) {
      console.error("Error syncing to LinkedIn", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Tweet Sync</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id} className="border p-2 mb-2 rounded">
            <p>{tweet.text}</p>
            <Button onClick={() => syncToLinkedIn(tweet)} className="mt-2">
              Sync to LinkedIn
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tweet-Sync;
