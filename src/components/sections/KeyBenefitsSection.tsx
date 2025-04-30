import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Tag, Package } from "lucide-react";

interface BenefitItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const BenefitItem = ({
  title,
  description,
  icon,
  delay = 0,
}: BenefitItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="mb-4 p-3 rounded-full bg-primary/10">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const KeyBenefitsSection = () => {
  const benefits = [
    {
      title: "Boost Conversions 24/7",
      description:
        "Engage shoppers around the clock with personalized AI assistance, turning browsers into buyers even while you sleep.",
      icon: <MessageSquare size={24} className="text-[#ed2a7b]" />,
    },
    {
      title: "Optimize Profits Effortlessly",
      description:
        "AI-driven pricing that adapts to market changes in real-time, improving your margins without manual work.",
      icon: <Tag size={24} className="text-[#f7b135]" />,
    },
    {
      title: "Streamline Your Inventory",
      description:
        "Accurate demand forecasts prevent stockouts and overstock, saving you money and keeping customers happy.",
      icon: <Package size={24} className="text-[#6228d5]" />,
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Key Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            See how EzShopper transforms your Shopify store with powerful AI
            solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyBenefitsSection;
