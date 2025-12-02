"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative py-4 md:py-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link
              href="/"
              title=""
              className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <span className="text-xl font-bold text-gray-900">RankRise</span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button type="button" className="text-gray-900">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
            <div className="flex items-center space-x-12">
              <Link
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Features{" "}
              </Link>

              <Link
                href="/pricing"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Pricing{" "}
              </Link>
            </div>

            <div className="w-px h-5 bg-gray-300"></div>

            <Unauthenticated>
              <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                <Button
                  variant="ghost"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Login
                </Button>
              </SignInButton>

              <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                <Button className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white">
                  Create free account
                </Button>
              </SignInButton>
            </Unauthenticated>

            <Authenticated>
              <div className="flex items-center gap-4">
                <Link href="/dashboard">
                  <Button className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white">
                    Dashboard
                  </Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            </Authenticated>
          </div>
        </div>
      </div>
    </header>
  );
}
