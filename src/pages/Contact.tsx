import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/sections/FooterSection";
import ContactForm from "../components/ContactForm";
import { Card, CardContent } from "../components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Have questions about our AI solutions? We're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <ContactForm formType="contact" />
                </CardContent>
              </Card>

              <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h2 className="text-2xl font-bold mb-4">Our Office</h2>
                  <p className="mb-2">123 AI Innovation Drive</p>
                  <p className="mb-2">San Francisco, CA 94105</p>
                  <p className="mb-4">United States</p>

                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    {/* Placeholder for map embed */}
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <p className="text-muted-foreground">
                        Map Embed Placeholder
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Support</h2>
                  <p className="mb-2">
                    <strong>Email:</strong> support@ezshopper.com
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p>
                    <strong>Hours:</strong> Monday-Friday, 9am-5pm PT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Contact;
