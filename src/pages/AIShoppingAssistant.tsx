import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/sections/FooterSection";
import PricingTable from "../components/PricingTable";
import { Button } from "../components/ui/button";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const AIShoppingAssistant = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  AI Shopping Assistant: Your 24/7 Virtual Salesperson.
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-600"
                >
                  Engage every visitor with personalized shopping guidance –
                  boost conversions and customer satisfaction with intelligent
                  automation.
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-[#ed2a7b] hover:bg-[#ed2a7b]/90 text-white px-8"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#ed2a7b] text-[#ed2a7b] hover:bg-[#ed2a7b]/10"
                  >
                    View Demo
                  </Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full md:w-1/2"
              >
                <div className="relative bg-white rounded-xl shadow-xl p-4 border border-gray-200 max-w-md mx-auto">
                  <div className="flex items-center justify-between mb-4 border-b pb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#ed2a7b] flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <span className="ml-2 font-medium">
                        AI Shopping Assistant
                      </span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Online
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          Hi there! I'm your personal shopping assistant. How
                          can I help you today?
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start justify-end gap-2">
                      <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          I'm looking for running shoes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          Great! Based on your browsing history, I'd recommend
                          our new Ultra Boost collection. Would you prefer road
                          running or trail running shoes?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-2 border-t flex">
                    <input
                      type="text"
                      placeholder="Type your question here..."
                      className="flex-1 border-0 bg-transparent text-sm focus:outline-none"
                      disabled
                    />
                    <Button
                      size="sm"
                      className="bg-[#ed2a7b] hover:bg-[#ed2a7b]/90 text-white"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Overview & Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Product Overview
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                EzShopper's AI Shopping Assistant is like a virtual concierge
                for your e-commerce site. Powered by advanced machine learning,
                it greets customers, answers their questions, and offers spot-on
                product recommendations based on their browsing behavior and
                preferences.
              </p>
              <p className="text-lg text-gray-600">
                No more one-size-fits-all shopping – the Assistant personalizes
                each customer's journey, making them more likely to buy and
                return again.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
              {[
                {
                  title: "Boost Conversion Rates",
                  description:
                    "Turns passive browsers into active buyers by gently guiding them to products they'll love.",
                },
                {
                  title: "Reduce Support Load",
                  description:
                    "Handles common queries (shipping, returns, product details) instantly, so you and your team answer fewer repetitive questions.",
                },
                {
                  title: "Personalized Recommendations",
                  description:
                    "Recommends products based on viewing history and buying patterns, increasing average order value through effective upsells and cross-sells.",
                },
                {
                  title: "24/7 Sales Assistant",
                  description:
                    "Never sleeps – captures sales from late-night shoppers and peak seasons without needing a round-the-clock staff.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#ed2a7b]/10 flex items-center justify-center">
                      <Check className="h-5 w-5 text-[#ed2a7b]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Choose Your Plan
              </h2>
              <p className="text-lg text-gray-600">
                Select the perfect plan for your business needs. All plans
                include a 14-day free trial.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <PricingTable
                plans={[
                  {
                    name: "Start",
                    price: "$19",
                    description: "Perfect for small stores",
                    visitors: "Up to 1,000 visitors/month",
                    products: "Up to 100 products",
                    features: ["Dashboard", "AI Metrics", "Email Support"],
                    buttonText: "Start Free Trial",
                  },
                  {
                    name: "Growth",
                    price: "$26",
                    description: "For growing businesses",
                    visitors: "Up to 3,000 visitors/month",
                    products: "Up to 250 products",
                    features: ["Dashboard", "AI Metrics", "Email Support"],
                    buttonText: "Start Free Trial",
                  },
                  {
                    name: "Pro",
                    price: "$71",
                    description: "For established stores",
                    visitors: "Up to 10,000 visitors/month",
                    products: "Up to 1,100 products",
                    features: [
                      "AI Language Select",
                      "Dashboard",
                      "AI Metrics",
                      "Email Support",
                    ],
                    highlighted: true,
                    buttonText: "Start Free Trial",
                  },
                  {
                    name: "Master",
                    price: "$152",
                    description: "For large enterprises",
                    visitors: "Up to 26,000 visitors/month",
                    products: "Up to 2,200 products",
                    features: [
                      "Training AI Assistant",
                      "AI Language Select",
                      "Dashboard",
                      "AI Metrics",
                      "Email Support",
                    ],
                    buttonText: "Start Free Trial",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
};

export default AIShoppingAssistant;
