"use client";

import { PricingTable } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PricingTable />
      </div>
      <Footer />
    </div>
  );
}

export default PricingPage;