import { useEffect, useState } from "react";

declare global {
  interface Window {
    Paddle?: {
      Environment: {
        set: (env: "sandbox" | "production") => void;
      };
      Initialize: (config: { token: string }) => void;
      Setup: (config: { vendor: number }) => void;
      Checkout: {
        open: (options: { product: string }) => void;
      };
    };
  }
}

export function usePaddle() {
  const [paddle, setPaddle] = useState<typeof window.Paddle | null>(null);

  useEffect(() => {
    if (!window.Paddle) {
      const script = document.createElement("script");
      script.src = "https://cdn.paddle.com/paddle/v2/paddle.js"; // Use Paddle v2
      script.async = true;
      script.onload = () => {
        if (window.Paddle) {
          window.Paddle.Environment.set("sandbox"); // Set sandbox mode
          window.Paddle.Initialize({ token: "test_3059e07de77000a5336d1cf2237" }); // Initialize Paddle with client-side token
          window.Paddle.Setup({ vendor: 28373 }); // Setup Paddle with Vendor ID
          setPaddle(window.Paddle);
        }
      };
      document.body.appendChild(script);
    } else {
      window.Paddle.Environment.set("sandbox");
      window.Paddle.Initialize({ token: "test_3059e07de77000a5336d1cf2237" });
      window.Paddle.Setup({ vendor: 28373 });
      setPaddle(window.Paddle);
    }
  }, []);

  return paddle;
}
