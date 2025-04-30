import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/sections/FooterSection";
import { Button } from "../components/ui/button";
import { BarChart3, Package, TrendingUp, AlertCircle } from "lucide-react";

const AIInventory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  AI Inventory: Never Miss a Sale Due to Stockouts.
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                  Accurate demand forecasting and smart restock alerts to keep
                  your inventory optimized and your customers satisfied.
                </h2>
                <Button className="px-6 py-6 text-lg bg-[#6228d5] hover:bg-[#6228d5]/90 text-white">
                  Get Started – AI Inventory Free Trial
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-xl p-6 max-w-md">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold">
                        Inventory Dashboard
                      </h3>
                      <AlertCircle className="h-5 w-5 text-[#6228d5]" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          Product Forecast
                        </p>
                        <div className="h-32 bg-gray-100 rounded-md flex items-end p-2">
                          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <div
                              key={i}
                              className="flex-1 mx-1"
                              style={{
                                height: `${Math.random() * 70 + 20}%`,
                                backgroundColor:
                                  i === 5 ? "#ff6b6b" : "#6228d5",
                              }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>Mon</span>
                          <span>Wed</span>
                          <span>Fri</span>
                          <span>Sun</span>
                        </div>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-center">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                        <div>
                          <p className="text-sm font-medium text-red-700">
                            Restock Alert
                          </p>
                          <p className="text-xs text-red-600">
                            Product X will stock out in 3 days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose AI Inventory
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our AI-powered inventory management solution delivers measurable
                results for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="bg-[#6228d5] w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Accurate Demand Forecasts
                </h3>
                <p className="text-gray-600">
                  Predict future inventory needs with AI that learns from your
                  sales patterns.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="bg-[#6228d5] w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Automated Restock Alerts
                </h3>
                <p className="text-gray-600">
                  Never miss a restock opportunity with timely notifications
                  before you run out.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="bg-[#6228d5] w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Optimized Cash Flow
                </h3>
                <p className="text-gray-600">
                  Reduce tied-up capital in excess inventory while preventing
                  costly stockouts.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="bg-[#6228d5] w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Multi-Channel Inventory Sync
                </h3>
                <p className="text-gray-600">
                  Seamlessly manage inventory across all your sales channels in
                  one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Powerful Features That Drive Results
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-[#6228d5] rounded-full p-1 mr-4 mt-1">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        Machine learning forecasting engine
                      </h3>
                      <p className="text-gray-600">
                        Our advanced algorithms analyze historical data,
                        seasonal trends, and market conditions to predict future
                        demand with remarkable accuracy.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#6228d5] rounded-full p-1 mr-4 mt-1">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        Customizable alert thresholds
                      </h3>
                      <p className="text-gray-600">
                        Set your own restock triggers based on lead times,
                        minimum order quantities, and safety stock levels for
                        each product.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#6228d5] rounded-full p-1 mr-4 mt-1">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        Supplier integration for one-click reorder
                      </h3>
                      <p className="text-gray-600">
                        Connect directly with your suppliers to streamline the
                        reordering process and eliminate manual purchase orders.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#6228d5] rounded-full p-1 mr-4 mt-1">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        SKU performance recommendations
                      </h3>
                      <p className="text-gray-600">
                        Identify your best and worst performing products with
                        actionable insights to optimize your product mix.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">
                      Product Performance
                    </h3>
                    <TrendingUp className="h-5 w-5 text-[#6228d5]" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Product A</span>
                        <span className="text-sm text-green-600">+24%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Product B</span>
                        <span className="text-sm text-yellow-600">+8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Product C</span>
                        <span className="text-sm text-red-600">-12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-md p-3 mt-4">
                      <p className="text-sm font-medium text-purple-800">
                        Recommendation
                      </p>
                      <p className="text-xs text-purple-700">
                        Consider increasing stock of Product A by 20% for next
                        quarter based on trend analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default AIInventory;
