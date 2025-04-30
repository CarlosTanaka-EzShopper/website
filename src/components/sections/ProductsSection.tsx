import React from "react";
import ProductCard from "../ProductCard";

interface Product {
  title: string;
  description: string;
  features: string[];
  color: string;
  ctaText: string;
  isComingSoon?: boolean;
}

interface ProductsSectionProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
}

const ProductsSection = ({
  title = "Our AI Solutions",
  subtitle = "Cutting-edge tools that help you grow your Shopify store and maximize profits.",
  products = [
    {
      title: "AI Shopping Assistant",
      description:
        "Personalized shopping experiences that convert. Our AI assistant guides customers through your store, increasing engagement and sales.",
      features: [
        "24/7 Customer Support",
        "Product Recommendations",
        "Natural Language Interactions",
      ],
      color: "#ed2a7b",
      ctaText: "Learn More",
      isComingSoon: false,
    },
    {
      title: "AI Pricing",
      description:
        "Dynamic pricing strategies that maximize your profit margins. Our AI analyzes market trends and competitor pricing in real-time.",
      features: [
        "Competitive Analysis",
        "Demand-based Pricing",
        "Profit Margin Optimization",
      ],
      color: "#f7b135",
      ctaText: "Coming Soon",
      isComingSoon: true,
    },
    {
      title: "AI Inventory",
      description:
        "Smart inventory management that prevents stockouts and overstock situations. Predict demand and optimize your supply chain.",
      features: [
        "Demand Forecasting",
        "Automatic Reordering",
        "Seasonal Trend Analysis",
      ],
      color: "#6228d5",
      ctaText: "Coming Soon",
      isComingSoon: true,
    },
  ],
}: ProductsSectionProps) => {
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
              onCtaClick={() => {
                if (!product.isComingSoon) {
                  window.location.href = `/${product.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`;
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
