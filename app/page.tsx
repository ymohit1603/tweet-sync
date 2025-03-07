"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton,SignedOut,SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import XIcon from '@mui/icons-material/X';
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import FeaturesSection from "@/components/features";
export default function TweetSyncLanding() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <XIcon className="h-5 w-5 text-blue-600" />
          <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Tweet-Sync
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors scroll-smooth">
              Features
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors scroll-smooth">
              Pricing
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors scroll-smooth">
              Demo
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
              Dashboard
            </Link>
          </motion.div>
        </nav>

        <SignedOut>
        <div className="flex items-center space-x-4">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="px-6 py-2 text-white bg-gray-900 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
              <SignInButton />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <SignUpButton />
            </div>
          </motion.div>
        </div>
        </SignedOut>
        <SignedIn>
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div onClick={()=>{}} className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <SignOutButton />
            </div>
          </motion.div>
        </SignedIn>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 pt-16 pb-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent"
        >
          Sync Your Tweets to LinkedIn –<br /> Instantly & Effortlessly
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        >
          No scheduling. No extra work. Just tweet, and we handle the rest.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full px-8 py-6 w-full sm:w-auto"
              href="/dashboard"
            >
              Get Started for Free
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-full px-8 py-6 w-full sm:w-auto"
            >
              <Play className="w-4 h-4 mr-2" /> Watch Demo
            </Button>
          </motion.div>
        </div>

        {/* Animated Sync Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center mb-2">
                <XIcon className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-white font-medium">Tweet Preview</span>
              </div>
              <div className="bg-gray-700 rounded-lg p-3 text-white text-sm text-left">
                Just published a new blog post about social media synergy! Check it out on our website.
                #SocialMedia #Marketing
              </div>
            </motion.div>

            <motion.div
              animate={{
                x: [0, 10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="h-8 w-8 text-purple-500" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-800 rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center mb-2">
                <Linkedin className="h-5 w-5 text-blue-300 mr-2" />
                <span className="text-white font-medium">LinkedIn Post</span>
              </div>
              <div className="bg-blue-700 rounded-lg p-3 text-white text-sm text-left">
                Just published a new blog post about social media synergy! Check it out on our website.
                #SocialMedia #Marketing
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <FeaturesSection/>
      <Pricing/>
      <Footer/>
    </div>
  );
}
