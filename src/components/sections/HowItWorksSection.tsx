import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, BarChart, Zap } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface HowItWorksSectionProps {
  title?: string;
  subtitle?: string;
  steps?: Step[];
}

const HowItWorksSection = ({
  title = "How It Works",
  subtitle = "Our AI-powered platform seamlessly integrates with your Shopify store in three simple steps.",
  steps = [
    {
      icon: <ShoppingCart size={32} />,
      title: "Connect Your Store",
      description:
        "Integrate our platform with your Shopify store in just a few clicks. No coding required.",
      color: "#ed2a7b",
    },
    {
      icon: <BarChart size={32} />,
      title: "Customize Your AI",
      description:
        "Configure your AI assistant to match your brand voice and optimize for your specific business goals.",
      color: "#f7b135",
    },
    {
      icon: <Zap size={32} />,
      title: "Watch Sales Grow",
      description:
        "Sit back as our AI engages customers, optimizes pricing, and manages inventory to boost your revenue.",
      color: "#6228d5",
    },
  ],
}: HowItWorksSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted transform -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <div className="text-white" style={{ color: step.color }}>
                      {step.icon}
                    </div>
                  </div>
                  <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-white border-4"
                    style={{ borderColor: step.color }}
                  >
                    <span className="font-bold" style={{ color: step.color }}>
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground flex-grow">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <ArrowRight size={24} className="text-muted-foreground" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
