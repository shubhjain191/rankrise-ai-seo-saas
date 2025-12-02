"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gray-50 rounded-3xl">
          <div className="absolute top-0 right-0 -mb-16 -mr-16 opacity-50 lg:top-auto lg:bottom-0 lg:left-0 lg:right-auto lg:mb-0 lg:mr-0 lg:-ml-16 lg:-mt-16">
            <svg
              className="w-full h-full text-gray-100"
              viewBox="0 0 200 200"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="100" />
            </svg>
          </div>

          <div className="relative px-6 py-12 sm:px-12 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 text-center lg:text-left">
              <span className="text-4xl">👋</span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to start ranking higher?
                <br />
                <span className="text-gray-900">
                  Start your free trial today.
                </span>
              </h2>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
              <Link href="/dashboard">
                <Button className="px-8 py-6 text-lg font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl">
                  Start 7 Days Free Trial
                </Button>
              </Link>
              <p className="text-sm text-gray-500">No credit card required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
