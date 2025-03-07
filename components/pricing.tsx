"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { usePaddle } from "@/hooks/usePaddle";

export default function PricingSection() {
  const paddle = usePaddle();

  const handleCheckout = (productId: string) => {
      if (paddle) {
        console.log("paddle handleCheckout")
      paddle.Checkout.open({ product: productId });
    }
  };

  return (
    <div id="pricing" className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Pricing Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent"
      >
        Simple, Transparent Pricing
      </motion.h2>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {/* Basic Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-lg p-6 border border-gray-300 flex flex-col bg-white"
        >
          <div className="mb-6">
            <p className="font-medium mb-1 text-gray-800">Basic</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-800">$10</span>
              <span className="text-gray-500 ml-1">/mo</span>
            </div>
          </div>
          <div className="space-y-3 mb-8 flex-grow">
            <FeatureItem text="Unlimited single-threaded tweets" />
            <FeatureItem text="Post as it is" />
          </div>
          <Button variant="outline" className="w-full" onClick={() => handleCheckout("pri_01jnqpa3hc7f0ae7gns126jd52")}>
            Get Started
          </Button>
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-lg p-6 bg-gradient-to-r from-blue-100 to-purple-200 text-gray-700 flex flex-col shadow-lg"
        >
          <div className="mb-6">
            <p className="font-medium mb-1">Pro</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">$30</span>
              <span className="text-gray-800 ml-1">/mo</span>
            </div>
          </div>
          <div className="space-y-3 mb-8 flex-grow">
            <FeatureItem text="Unlimited tweets" />
            <FeatureItem text="AI-powered modifications" />
            <FeatureItem text="Multiple threaded posts" />
          </div>
          <Button className="w-full bg-white text-black hover:bg-gray-200" onClick={() => handleCheckout("pri_01jnqpa3hc7f0ae7gns126jd52")}>
            Get Started
          </Button>
        </motion.div>

        {/* Yearly Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-lg p-6 border border-gray-300 flex flex-col bg-white"
        >
          <div className="mb-6">
            <p className="font-medium mb-1 text-gray-800">Yearly</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-800">$400</span>
              <span className="text-gray-800 ml-1">/yr</span>
            </div>
          </div>
          <div className="space-y-3 mb-8 flex-grow">
            <FeatureItem text="Custom integrations" />
            <FeatureItem text="Basic and Pro features" />
            <FeatureItem text="Dedicated support" />
          </div>
          <Button variant="outline" className="w-full" onClick={() => handleCheckout("pri_01jnqpbftt3wp5317gpbjmsjs5")}>
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
