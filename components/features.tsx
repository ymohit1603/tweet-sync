import { TrendingUp, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section id="features" className="p-16 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-800"
        >
          Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-gray-600 mb-12"
        >
          Discover the power of TweetSync and how it can boost your social media presence.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Instant Posting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <Clock className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Instant Posting
            </h3>
            <p className="text-gray-600">
              Instant LinkedIn posts for every new tweet, saving you time and ensuring consistency.
            </p>
          </motion.div>

          {/* Seamless Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <Zap className="h-10 w-10 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Seamless Integration
            </h3>
            <p className="text-gray-600">
              Connect your social media accounts with a few clicks and enjoy a unified platform for all your needs.
            </p>
          </motion.div>

          {/* Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <TrendingUp className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Leverage AI for No-Effort LinkedIn Growth
            </h3>
            <p className="text-gray-600">
              Use AI to transform your tweets into viral LinkedIn posts effortlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
