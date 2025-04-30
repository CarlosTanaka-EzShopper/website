import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  logoSrc?: string;
  logoAlt?: string;
}

const HeroSection = ({
  title = "AI-Powered Solutions for Shopify Stores",
  subtitle = "Boost your e-commerce performance with our suite of AI tools designed specifically for Shopify store owners.",
  primaryCTA = "Get Started",
  secondaryCTA = "Learn More",
  logoSrc = "/ezshopperlogo.png",
  logoAlt = "EzShopper Logo",
}: HeroSectionProps) => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Abstract tech pattern background with particle flow animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=50')] bg-no-repeat bg-cover opacity-30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-16 w-auto mx-auto mb-6"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            {title.includes("Shopify") ? (
              <>
                {title.split("Shopify")[0]}
                <span className="text-[#ed2a7b]">Shopify</span>
                {title.split("Shopify")[1]}
              </>
            ) : (
              title
            )}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-[#ed2a7b] hover:bg-[#ed2a7b]/90">
              {primaryCTA}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              {secondaryCTA}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
