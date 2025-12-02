"use client";

import { PricingTable } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-20">
        {/* Pricing content would go here if not using the component */}
      </div>
      <CTASection />
      <Footer />
    </div>
  );
}

export default PricingPage;