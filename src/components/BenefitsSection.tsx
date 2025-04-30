import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpRight,
  BarChart3,
  LineChart,
  TrendingUp,
  Users,
} from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  color: string;
}

const BenefitCard = ({
  icon,
  title,
  value,
  description,
  color = "#ed2a7b",
}: BenefitCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card
        className="h-full overflow-hidden border-t-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
        style={{ borderTopColor: color }}
      >
        <CardContent className="p-6">
          <div className="mb-4 text-2xl" style={{ color }}>
            {icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <div className="text-3xl font-bold mb-2" style={{ color }}>
            {value}
          </div>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const benefits = [
    {
      icon: <TrendingUp size={32} />,
      title: "Conversion Rate",
      value: "+27%",
      description:
        "Average increase in conversion rate for stores using our AI Shopping Assistant",
      color: "#ed2a7b",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Revenue Growth",
      value: "+18%",
      description:
        "Average monthly revenue growth for stores implementing our AI pricing strategy",
      color: "#f7b135",
    },
    {
      icon: <LineChart size={32} />,
      title: "Inventory Efficiency",
      value: "+35%",
      description:
        "Improvement in inventory turnover with our AI-powered inventory management",
      color: "#6228d5",
    },
    {
      icon: <Users size={32} />,
      title: "Customer Retention",
      value: "+42%",
      description:
        "Increase in repeat customer rate after implementing our full AI suite",
      color: "#ed2a7b",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Results for E-commerce Stores
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered solutions deliver measurable ROI for Shopify store
            owners. See the impact our technology can have on your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              value={benefit.value}
              description={benefit.description}
              color={benefit.color}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            See How We Can Help Your Store <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
