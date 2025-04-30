import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/sections/FooterSection";
import { CheckCircle2 } from "lucide-react";

const AIPricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center">AI Pricing</h1>
          <p className="text-center mt-4 text-lg max-w-3xl mx-auto">
            Dynamic pricing optimization that maximizes your profits while
            staying competitive
          </p>
        </div>

        {/* Features / How It Works Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How AI Pricing Works
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f7b135]">
                <h3 className="text-xl font-semibold mb-3">
                  Competitive Intelligence
                </h3>
                <p className="text-gray-700">
                  AI Pricing continuously monitors competitor prices (for
                  identical or similar products) if data is available. It'll
                  alert you or auto-adjust if your price is out of the desired
                  range.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f7b135]">
                <h3 className="text-xl font-semibold mb-3">
                  Rules & Customization
                </h3>
                <p className="text-gray-700">
                  You set the boundaries – like minimum margin, maximum
                  discount, preferred price range – so the AI never strays
                  outside what you're comfortable with. It's automation with you
                  in control.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f7b135]">
                <h3 className="text-xl font-semibold mb-3">
                  Real-Time Adjustments
                </h3>
                <p className="text-gray-700">
                  Prices can be updated multiple times a day as needed. The
                  system can integrate with Shopify and other platforms to push
                  price changes instantly via API.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f7b135]">
                <h3 className="text-xl font-semibold mb-3">
                  Analytics & Reports
                </h3>
                <p className="text-gray-700">
                  See how price changes affect sales. The dashboard highlights
                  revenue uplift from AI-driven pricing versus your old static
                  pricing, so you know it's working.
                </p>
              </div>
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
        </div>

        {/* Pricing Plans Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pricing Plans
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter Plan */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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
                <button className="w-full mt-6 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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
                <button className="w-full mt-6 py-2 px-4 bg-[#f7b135] hover:bg-[#e6a22a] text-white rounded-md transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-[#f7b135]">
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
                <button className="w-full mt-6 py-2 px-4 bg-[#f7b135] hover:bg-[#e6a22a] text-white rounded-md transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Master Plan */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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
                <button className="w-full mt-6 py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Join the many successful retailers who've boosted their profits
              with EzShopper's AI Pricing
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Try it free and see the difference automated pricing can make.
            </p>

            <button className="py-3 px-8 bg-[#f7b135] hover:bg-[#e6a22a] text-white rounded-md transition-colors text-lg font-medium shadow-md">
              Start My Free Trial of AI Pricing
            </button>

            <div className="mt-12">
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                <img
                  src="https://api.dicebear.com/7.x/initials/svg?seed=AC&backgroundColor=f7b135"
                  alt="Client logo"
                  className="h-12"
                />
                <img
                  src="https://api.dicebear.com/7.x/initials/svg?seed=SB&backgroundColor=f7b135"
                  alt="Client logo"
                  className="h-12"
                />
                <img
                  src="https://api.dicebear.com/7.x/initials/svg?seed=TR&backgroundColor=f7b135"
                  alt="Client logo"
                  className="h-12"
                />
                <img
                  src="https://api.dicebear.com/7.x/initials/svg?seed=MP&backgroundColor=f7b135"
                  alt="Client logo"
                  className="h-12"
                />
              </div>

              <div className="mt-10 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md border-l-4 border-[#f7b135]">
                <p className="italic text-gray-700">
                  "Since using AI Pricing, our revenue is up 10% with better
                  margins – it's been a game changer."
                </p>
                <p className="font-semibold mt-3">
                  – Sarah Johnson, Retail Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default AIPricing;
