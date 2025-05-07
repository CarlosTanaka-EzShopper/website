import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/sections/FooterSection";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const AIPricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-white to-amber-50 py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
              <svg
                viewBox="0 0 1208 1024"
                className="w-[75rem] h-[64rem] rotate-[30deg]"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="pricing-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f7b135" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#pricing-gradient)"
                  d="M602.9 673.4c-150.6 0-295-58.5-402.7-162.3-134.6-130-184.8-319-131.1-495.8 5.4-17.7 23.8-27.8 41.5-22.4 17.8 5.4 27.8 23.8 22.4 41.5-47.3 156.1-2.4 324.2 117.1 439.7 96.6 93.5 224.8 145.1 359.7 145.1s263.1-51.6 359.7-145.1c119.5-115.5 164.4-283.6 117.1-439.7-5.4-17.7 4.7-36.1 22.4-41.5 17.7-5.4 36.1 4.7 41.5 22.4 53.7 176.8 3.5 365.8-131.1 495.8-107.6 103.8-252 162.3-402.7 162.3h.2z"
                />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  AI Pricing: Maximize Profits with Smart Price Optimization
                </motion.h1>
                <motion.h2
                  className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Stay competitive automatically – let AI set the right price
                  for every product, every day, based on real-time market
                  insights.
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button
                    size="lg"
                    className="bg-[#f7b135] hover:bg-[#e6a22a] text-white font-medium px-8 py-6 text-lg"
                  >
                    Try AI Pricing – Free for 14 Days
                  </Button>
                </motion.div>
              </div>

              <motion.div
                className="flex-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative bg-white rounded-xl shadow-2xl p-6 border border-amber-100">
                  <div className="absolute -top-3 -right-3 bg-[#f7b135] text-white text-sm font-bold px-3 py-1 rounded-full">
                    Live
                  </div>
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-lg font-semibold">
                        Premium Headphones
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 line-through">
                          $199.99
                        </span>
                        <span className="text-lg font-bold text-[#f7b135]">
                          $189.99
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-green-600 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 7a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L12 10.586V7z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Updated 2 hours ago based on competitor pricing
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Market Analysis
                      </div>
                      <div className="h-16 bg-gray-50 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0">
                          <svg
                            className="w-full h-full"
                            viewBox="0 0 400 60"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M0,30 C60,10 150,40 200,20 C250,0 300,20 400,30 L400,60 L0,60 Z"
                              fill="rgba(247, 177, 53, 0.2)"
                            />
                            <path
                              d="M0,30 C60,10 150,40 200,20 C250,0 300,20 400,30"
                              fill="none"
                              stroke="#f7b135"
                              strokeWidth="2"
                            />
                          </svg>
                          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#f7b135] text-white text-xs px-2 py-1 rounded">
                            Optimal
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">
                          Competitor Avg
                        </div>
                        <div className="font-semibold">$195.49</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">
                          Profit Margin
                        </div>
                        <div className="font-semibold text-green-600">
                          +12.4%
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">
                          Sales Velocity
                        </div>
                        <div className="font-semibold">High</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features / How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How AI Pricing Works
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f7b135]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">
                  Competitive Intelligence
                </h3>
                <p className="text-gray-700">
                  AI Pricing continuously monitors competitor prices (for
                  identical or similar products) if data is available. It'll
                  alert you or auto-adjust if your price is out of the desired
                  range.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f7b135]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">
                  Rules & Customization
                </h3>
                <p className="text-gray-700">
                  You set the boundaries – like minimum margin, maximum
                  discount, preferred price range – so the AI never strays
                  outside what you're comfortable with. It's automation with you
                  in control.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f7b135]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">
                  Real-Time Adjustments
                </h3>
                <p className="text-gray-700">
                  Prices can be updated multiple times a day as needed. The
                  system can integrate with Shopify and other platforms to push
                  price changes instantly via API.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f7b135]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">
                  Analytics & Reports
                </h3>
                <p className="text-gray-700">
                  See how price changes affect sales. The dashboard highlights
                  revenue uplift from AI-driven pricing versus your old static
                  pricing, so you know it's working.
                </p>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Pricing dashboard example"
                className="rounded-lg shadow-lg mx-auto max-w-full md:max-w-2xl"
              />
              <p className="text-sm text-gray-500 mt-2">
                Example of the AI Pricing dashboard interface
              </p>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Stop Leaving Money on the Table
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Racing to the Bottom
                </h3>
                <p className="text-gray-600">
                  Manual price matching often leads to a downward spiral,
                  eroding your margins and devaluing your products in customers'
                  eyes.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Time-Consuming Analysis
                </h3>
                <p className="text-gray-600">
                  Hours spent researching competitor prices and market trends
                  could be better invested in growing your business.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Missed Opportunities
                </h3>
                <p className="text-gray-600">
                  Without dynamic pricing, you miss chances to increase margins
                  during high demand or boost sales during slow periods.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pricing Plans
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Starter Plan */}
              <motion.div
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-50 p-6 border-b">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$49</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    For small stores getting started
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {[
                      "Up to 100 products",
                      "Weekly price updates",
                      "Basic competitor monitoring",
                      "Email support",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#f7b135] mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800">
                    Get Started
                  </Button>
                </div>
              </motion.div>

              {/* Growth Plan */}
              <motion.div
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-50 p-6 border-b">
                  <h3 className="text-xl font-bold">Growth</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    For growing businesses
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {[
                      "Up to 500 products",
                      "Daily price updates",
                      "Advanced competitor tracking",
                      "Priority email support",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#f7b135] mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-[#f7b135] hover:bg-[#e6a22a] text-white">
                    Get Started
                  </Button>
                </div>
              </motion.div>

              {/* Pro Plan */}
              <motion.div
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-[#f7b135] bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#f7b135] bg-opacity-10 p-6 border-b border-[#f7b135]">
                  <div className="bg-[#f7b135] text-white text-xs font-bold uppercase py-1 px-2 rounded-full inline-block mb-2">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold">Pro</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$199</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    For established businesses
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {[
                      "Up to 2,000 products",
                      "Real-time price updates",
                      "Full competitor analysis",
                      "Phone & email support",
                      "Custom pricing rules",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#f7b135] mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-[#f7b135] hover:bg-[#e6a22a] text-white">
                    Get Started
                  </Button>
                </div>
              </motion.div>

              {/* Master Plan */}
              <motion.div
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-50 p-6 border-b">
                  <h3 className="text-xl font-bold">Master</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$399</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    For large enterprises
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {[
                      "Unlimited products",
                      "Real-time price updates",
                      "Advanced analytics",
                      "Dedicated account manager",
                      "Custom API integration",
                      "White-label reports",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#f7b135] mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800">
                    Contact Sales
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-br from-[#f7b135] to-amber-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Join the many successful retailers who've boosted their profits
              with EzShopper's AI Pricing
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Try it free and see the difference automated pricing can make.
            </p>

            <Button
              size="lg"
              className="bg-white text-[#f7b135] hover:bg-gray-100 font-medium px-8 py-6 text-lg"
            >
              Start My Free Trial of AI Pricing
            </Button>

            <div className="mt-12">
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                <img
                  src="https://api.dicebear.com/7.x/initials/svg?seed=AC&backgroundColor=ffffff"
                  alt="Client logo"
                  className="h-12 bg-white/20 rounded-lg p-1"
                />
                <img
                  src="https://api.dicebear.com/7.x/initials/svg?seed=SB&backgroundColor=ffffff"
                  alt="Client logo"
                  className="h-12 bg-white/20 rounded-lg p-1"
                />
                <img
                  src="https://api.dicebear.com/7.x/initials/svg?seed=TR&backgroundColor=ffffff"
                  alt="Client logo"
                  className="h-12 bg-white/20 rounded-lg p-1"
                />
                <img
                  src="https://api.dicebear.com/7.x/initials/svg?seed=MP&backgroundColor=ffffff"
                  alt="Client logo"
                  className="h-12 bg-white/20 rounded-lg p-1"
                />
              </div>

              <div className="mt-10 max-w-xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20">
                <p className="italic text-white">
                  "Since using AI Pricing, our revenue is up 10% with better
                  margins – it's been a game changer."
                </p>
                <p className="font-semibold mt-3 text-white">
                  – Sarah Johnson, Retail Excellence
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default AIPricing;
