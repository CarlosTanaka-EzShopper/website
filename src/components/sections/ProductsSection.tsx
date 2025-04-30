import React from "react";
import ProductCard from "../ProductCard";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface Product {
  title: string;
  description: string;
  features: string[];
  color: string;
  ctaText: string;
  isComingSoon?: boolean;
  iconName?: string;
}

interface ProductsSectionProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
}

const ProductsSection = ({
  title = "Discover the EzShopper Suite",
  subtitle = "Three AI-powered solutions that work individually or together to elevate your e-commerce business. Use them standalone, or combine all three for best results – the choice is yours.",
  products = [
    {
      title: "AI Shopping Assistant",
      description:
        "An intelligent shopping concierge for your website. The AI Shopping Assistant engages your visitors with chat and personalized product recommendations, providing instant answers and tailored suggestions. Result: happier customers and higher conversion rates.",
      features: [
        "24/7 Customer Support",
        "Product Recommendations",
        "Natural Language Interactions",
      ],
      color: "#ed2a7b",
      ctaText: "Learn More",
      isComingSoon: false,
      iconName: "shopping-assistant",
    },
    {
      title: "AI Pricing",
      description:
        "A dynamic pricing engine that keeps your prices optimal. AI Pricing analyzes market trends, competitor prices, and your own sales data to automatically adjust prices for maximized profits and competitiveness. Result: improved margins and sales growth without constant manual repricing.",
      features: [
        "Competitive Analysis",
        "Demand-based Pricing",
        "Profit Margin Optimization",
      ],
      color: "#f7b135",
      ctaText: "Coming Soon",
      isComingSoon: true,
      iconName: "pricing",
    },
    {
      title: "AI Inventory",
      description:
        "A smart inventory forecasting system for your store. AI Inventory monitors sales patterns and seasonal trends to predict stock needs, sending restock alerts and optimizing inventory levels. Result: fewer stockouts and overstocks, and smoother operations.",
      features: [
        "Demand Forecasting",
        "Automatic Reordering",
        "Seasonal Trend Analysis",
      ],
      color: "#6228d5",
      ctaText: "Learn More",
      isComingSoon: false,
      iconName: "inventory",
    },
  ],
}: ProductsSectionProps) => {
  const navigate = useNavigate();
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              features={product.features}
              accentColor={product.color}
              ctaText={product.ctaText}
              isComingSoon={product.isComingSoon}
              iconName={product.iconName}
              onCtaClick={() => {
                // Allow navigation to AI Inventory page even if marked as coming soon
                if (!product.isComingSoon || product.title === "AI Inventory") {
                  navigate(
                    `/${product.title.toLowerCase().replace(/\s+/g, "-")}`,
                  );
                }
              }}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-4">
            Not sure which solution fits your needs?
          </p>
          <Button
            onClick={() => navigate("/contact")}
            className="px-6 py-2 text-white bg-primary hover:bg-primary/90"
          >
            Talk to our team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
