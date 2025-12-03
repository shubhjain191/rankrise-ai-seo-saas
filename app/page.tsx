"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SignInButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import {
  Search,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
        <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <img
            className="w-auto h-full"
            src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
            alt=""
          />
        </div>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 lg:gap-x-16 sm:gap-y-20 xl:grid-cols-5">
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                  AI SEO Reports in Seconds
                </h1>

                <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                  <div className="flex justify-center shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png"
                      alt=""
                    />
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png"
                      alt=""
                    />
                    <img
                      className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                      src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png"
                      alt=""
                    />
                  </div>

                  <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">
                    Join with <span className="font-bold">4600+ Marketers</span>{" "}
                    and start ranking higher right now
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                <Unauthenticated>
                  <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                    <Button
                      size="lg"
                      className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
                    >
                      Generate Report
                    </Button>
                  </SignInButton>
                </Unauthenticated>

                <Authenticated>
                  <Link href="/dashboard">
                    <Button
                      size="lg"
                      className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
                    >
                      Generate Report
                    </Button>
                  </Link>
                </Authenticated>

                <Link
                  href="/pricing"
                  className="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justif-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="xl:col-span-3">
              <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                <div className="relative rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <div className="rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="aspect-16/10 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
                      <img
                        src="/dashboard-preview.png"
                        alt="Dashboard Preview"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Builders */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Powered by Industry Leaders
            </h2>
            <p className="text-muted-foreground">
              Built with enterprise-grade technology and security you can trust
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Globe className="w-6 h-6" />
                Bright Data
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Zap className="w-6 h-6" />
                Vercel
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <MessageSquare className="w-6 h-6" />
                OpenAI
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Shield className="w-6 h-6" />
                Clerk
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700 dark:text-green-300 font-medium">
                Enterprise-grade security & 99.9% uptime guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}