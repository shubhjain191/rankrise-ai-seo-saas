"use client";

import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-12">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img className="w-auto h-8 mr-2" src="/convex.svg" alt="RankRise Logo" />
            <span className="text-2xl font-bold font-pj text-white">
              RankRise
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 text-base font-medium text-gray-300">
            <Link
              href="#"
              className="transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-sm"
            >
              About
            </Link>
            <Link
              href="#"
              className="transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-sm"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-sm"
            >
              Pricing
            </Link>
            <Link
              href="/dashboard"
              className="transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-sm"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Divider Pattern */}
          <div className="w-full max-w-xs mx-auto">
            <svg
              className="w-full h-auto text-gray-700"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12L12 0M24 12L36 0M48 12L60 0M72 12L84 0M96 12L108 0M120 12L132 0M144 12L156 0M168 12L180 0M192 12L204 0M216 12L228 0M240 12L252 0M264 12L276 0M288 12L300 0"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-8">
            <Link
              href="#"
              className="text-white transition-all duration-200 hover:text-gray-300 hover:-translate-y-1"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-white transition-all duration-200 hover:text-gray-300 hover:-translate-y-1"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-white transition-all duration-200 hover:text-gray-300 hover:-translate-y-1"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-white transition-all duration-200 hover:text-gray-300 hover:-translate-y-1"
            >
              <Github className="w-6 h-6" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center text-gray-400">
            © Copyright {new Date().getFullYear()}, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
