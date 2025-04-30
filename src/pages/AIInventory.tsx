import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/sections/FooterSection";

const AIInventory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center">AI Inventory Page</h1>
          <p className="text-center mt-4">This page is coming soon.</p>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default AIInventory;
