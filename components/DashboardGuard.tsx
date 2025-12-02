"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface DashboardGuardProps {
  isPaidMember: boolean;
  userName?: string | null;
  planType?: string;
  children: React.ReactNode;
}

export default function DashboardGuard({ isPaidMember, userName, planType, children }: DashboardGuardProps) {
  const router = useRouter();

  useEffect(() => {
    if (!isPaidMember) {
      toast.error("Access Denied", {
        description: "You must be a paid member to access the dashboard. Please upgrade your plan.",
        duration: 5000,
      });
      router.push("/pricing");
    } else {
      const hasSeenGreeting = sessionStorage.getItem("hasSeenDashboardGreeting");
      if (!hasSeenGreeting) {
        toast.success(`Welcome back, ${userName || "User"}!`, {
          description: `You are logged in as a ${planType || "Pro"} member.`,
          duration: 4000,
        });
        sessionStorage.setItem("hasSeenDashboardGreeting", "true");
      }
    }
  }, [isPaidMember, router, userName, planType]);

  if (!isPaidMember) {
    return null; 
  }

  return <>{children}</>;
}
