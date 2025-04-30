import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  accentColor: string;
  ctaText: string;
  icon?: React.ReactNode;
  isComingSoon?: boolean;
  onCtaClick?: () => void;
}

const ProductCard = ({
  title = "AI Product",
  description = "Powerful AI solution for your e-commerce store",
  features = ["Feature one", "Feature two", "Feature three"],
  accentColor = "#ed2a7b",
  ctaText = "Learn More",
  icon,
  isComingSoon = false,
  onCtaClick = () => {},
}: ProductCardProps) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="w-full bg-white"
    >
      <Card className="h-full overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Accent color bar at the top */}
        <div className="h-2 w-full" style={{ backgroundColor: accentColor }} />

        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <div
              className="p-2 rounded-full"
              style={{ backgroundColor: `${accentColor}20` }}
            >
              {icon || (
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: accentColor }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=50&q=80"
                    alt="AI Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {isComingSoon && (
              <span
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  backgroundColor: `${accentColor}20`,
                  color: accentColor,
                }}
              >
                Coming Soon
              </span>
            )}
          </div>

          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-6">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check
                  size={18}
                  className="mr-2 mt-0.5 flex-shrink-0"
                  style={{ color: accentColor }}
                />
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter>
          <Button
            onClick={onCtaClick}
            className="w-full flex items-center justify-center group"
            style={{
              backgroundColor: isComingSoon ? "#E5E7EB" : accentColor,
              color: isComingSoon ? "#6B7280" : "white",
              cursor: isComingSoon ? "not-allowed" : "pointer",
            }}
            disabled={isComingSoon}
          >
            {ctaText}
            <ArrowRight
              size={16}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
