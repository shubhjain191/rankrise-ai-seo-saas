"use client";

import startScraping from "@/actions/startScrapping";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BarChart3, Sparkles, Loader2, Search, Zap } from "lucide-react";
import ReportsTable from "@/components/ReportsTable";
import { CountrySelector } from "@/components/ui/CountrySelector";
import { Authenticated, AuthLoading } from "convex/react";

function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [country, setCountry] = useState("US");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt || isLoading) return;

    setIsLoading(true);
    try {
      const response = await startScraping(prompt, undefined, country);
      if (response.ok) {
        console.log(response.data);
        const snapshotId = response.data.snapshot_id;
        router.push(`/dashboard/report/${snapshotId}`);
      } else {
        console.error(response.error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-pj">
                SEO Analysis
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-pj">
                Enter a domain or business name to generate a comprehensive, AI-powered report.
            </p>
        </div>

        <div className="space-y-22">
          {/* Create Report Section */}
          <div className="relative rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
            <div className="rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/10 overflow-hidden">
                <CardContent className="p-8 sm:p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                    
                    {/* Input Group */}
                    <div className="flex-1 w-full relative group">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors">
                        <Search className="w-5 h-5" />
                        </div>
                        <Input
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="example.com or Business Name"
                        className="pl-12 h-14 text-lg bg-gray-50 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 rounded-xl transition-all placeholder:text-gray-400 font-pj"
                        disabled={isLoading}
                        />
                    </div>

                    {/* Country Selector */}
                    <div className="w-full md:w-auto">
                        <CountrySelector
                            value={country}
                            onValueChange={setCountry}
                            disabled={isLoading}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        size="lg"
                        className="h-14 px-8 bg-gray-900 text-white hover:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all font-bold text-lg w-full md:w-auto font-pj"
                        disabled={isLoading || !prompt.trim()}
                        >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            "Generate Report"
                        )}
                        </Button>
                    </div>

                    {/* Feature Strip */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <Sparkles className="w-4 h-4 text-gray-400" />
                        <span className="font-pj">AI-Powered Analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <Zap className="w-4 h-4 text-gray-400" />
                        <span className="font-pj">Real-time Data</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <BarChart3 className="w-4 h-4 text-gray-400" />
                        <span className="font-pj">Comprehensive Insights</span>
                    </div>
                    </div>
                </form>
                </CardContent>
            </div>
          </div>

          {/* Reports Section */}
          <div className="space-y-6">
             <div className="flex items-center justify-between px-1">
                <h2 className="text-2xl font-bold text-gray-900 font-pj">Recent Reports</h2>
             </div>
             
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <Authenticated>
                    <ReportsTable />
                  </Authenticated>
                  <AuthLoading>
                    <div className="flex items-center justify-center p-12">
                      <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
                    </div>
                  </AuthLoading>
                </CardContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;