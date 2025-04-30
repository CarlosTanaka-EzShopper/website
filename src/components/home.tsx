import React from "react";
import Navbar from "./Navbar";
import BenefitsSection from "./BenefitsSection";
import ContactForm from "./ContactForm";
import { Card, CardContent } from "./ui/card";
import HeroSection from "./sections/HeroSection";
import ProductsSection from "./sections/ProductsSection";
import FooterSection from "./sections/FooterSection";
import KeyBenefitsSection from "./sections/KeyBenefitsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <HeroSection primaryCTA="Get Started" secondaryCTA="Learn More" />

      {/* Key Benefits Section */}
      <KeyBenefitsSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BenefitsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Started Today
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to transform your Shopify store with AI? Contact us for a
                personalized demo.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Home;
