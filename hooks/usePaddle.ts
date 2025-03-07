import { useEffect, useState } from "react";

declare global {
  interface Window {
    Paddle: {
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
      script.src = "https://cdn.paddle.com/paddle/paddle.js";
      script.async = true;
      script.onload = () => {
        if (window.Paddle) {
          window.Paddle.Setup({ vendor: 219846 });
          setPaddle(window.Paddle);
        }
      };
      document.body.appendChild(script);
    } else {
      window.Paddle.Setup({ vendor: 219846 });
      setPaddle(window.Paddle);
    }
  }, []);

  return paddle;
}
