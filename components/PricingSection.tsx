"use client";

import { useState } from "react";
import { Zap, Globe, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img
          className="w-auto h-full opacity-50"
          src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
          alt=""
        />
      </div>
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          {/* Left Side: Content */}
          <div className="lg:col-span-3 lg:pr-8">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
              Unlock all features
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              RankRise gives you the data and insights you need to create truly
              professional SEO reports and ranking improvements.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 text-gray-900">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Accurate Data
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Powered by Bright Data for the most reliable SERP results.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 text-gray-900">
                    <Globe className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Global Coverage
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Track rankings in any country and language supported by
                    Google.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 text-gray-900">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    AI Insights
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Get actionable advice and content strategies from our AI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Pricing Card with Toggle (40%) */}
          <div className="lg:col-span-2 lg:pl-8">
            <Tabs defaultValue="starter" className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="flex justify-center mb-8 lg:justify-start">
                <TabsList className="grid w-full max-w-xs grid-cols-2">
                  <TabsTrigger value="starter">Starter</TabsTrigger>
                  <TabsTrigger value="pro">Pro</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="starter">
                <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                  <div className="absolute top-0 right-0 -mt-3 -mr-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white shadow-sm">
                      Free trial
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Starter Plan
                      </h3>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        Full SEO Reports
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline justify-end">
                        <span className="text-4xl font-bold text-gray-900">
                          ${isAnnual ? "7" : "10"}
                        </span>
                        <span className="text-gray-500 ml-1">/month</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-4">
                    <Switch
                      id="annual-billing-starter"
                      checked={isAnnual}
                      onCheckedChange={setIsAnnual}
                    />
                    <Label htmlFor="annual-billing-starter" className="text-sm text-gray-500">
                      Billed annually
                    </Label>
                  </div>

                  <hr className="mt-8 border-gray-100" />

                  <div className="mt-8">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      What’s included
                    </p>
                    <div className="mt-6 grid grid-cols-1 gap-y-4">
                      {[
                        "Complete SERP breakdown",
                        "Keyword ranking insights",
                        "Competitor analysis",
                        "Export reports as PDF or CSV",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="shrink-0 text-gray-900">
                            <CheckCircle className="w-5 h-5 fill-gray-900 text-white" />
                          </div>
                          <span className="ml-3 text-sm font-medium text-gray-900">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <Link href="/pricing">
                      <Button className="w-full py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700 h-auto">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pro">
                <div className="relative bg-white rounded-3xl shadow-xl border border-gray-200 p-8 ring-1 ring-gray-200">
                  <div className="absolute top-0 right-0 -mt-3 -mr-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white shadow-sm">
                      Free trial
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Pro Plan</h3>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        Chat With Your Report
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline justify-end">
                        <span className="text-4xl font-bold text-gray-900">
                          ${isAnnual ? "18" : "20"}
                        </span>
                        <span className="text-gray-500 ml-1">/month</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-4">
                    <Switch
                      id="annual-billing-pro"
                      checked={isAnnual}
                      onCheckedChange={setIsAnnual}
                    />
                    <Label htmlFor="annual-billing-pro" className="text-sm text-gray-500">
                      Billed annually
                    </Label>
                  </div>

                  <hr className="mt-8 border-gray-100" />

                  <div className="mt-8">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      What’s included
                    </p>
                    <div className="mt-6 grid grid-cols-1 gap-y-4">
                      {[
                        "All Starter features",
                        "AI chat interface",
                        "Ask specific questions about your data",
                        "Get instant, actionable recommendations",
                        "Priority support",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="shrink-0 text-gray-900">
                            <CheckCircle className="w-5 h-5 fill-gray-900 text-white" />
                          </div>
                          <span className="ml-3 text-sm font-medium text-gray-900">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <Link href="/pricing">
                      <Button className="w-full py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700 h-auto">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
