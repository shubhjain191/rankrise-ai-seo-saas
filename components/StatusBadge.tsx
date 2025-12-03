import React from "react";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Loader2,
  CircleDashed,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: string;
  showIcon?: boolean;
  className?: string;
}

export default function StatusBadge({
  status,
  showIcon = true,
  className,
}: StatusBadgeProps) {
  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
      case "success":
        return {
          label: "Completed",
          icon: CheckCircle2,
          variant: "default" as const, // We'll override colors
          className:
            "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/25 border-emerald-500/20",
        };
      case "analyzing":
      case "running":
      case "processing":
        return {
          label: "Analyzing",
          icon: Loader2,
          variant: "secondary" as const,
          className:
            "bg-blue-500/15 text-blue-700 dark:text-blue-400 hover:bg-blue-500/25 border-blue-500/20",
          animate: true,
        };
      case "pending":
      case "queued":
        return {
          label: "Pending",
          icon: CircleDashed,
          variant: "outline" as const,
          className:
            "bg-slate-500/15 text-slate-700 dark:text-slate-400 hover:bg-slate-500/25 border-slate-500/20",
        };
      case "failed":
      case "error":
        return {
          label: "Failed",
          icon: AlertCircle,
          variant: "destructive" as const,
          className:
            "bg-red-500/15 text-red-700 dark:text-red-400 hover:bg-red-500/25 border-red-500/20",
        };
      default:
        return {
          label: status,
          icon: Clock,
          variant: "secondary" as const,
          className: "text-muted-foreground",
        };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium px-2.5 py-0.5 transition-colors border",
        config.className,
        className
      )}
    >
      {showIcon && (
        <Icon
          className={cn("w-3.5 h-3.5 mr-1.5", config.animate && "animate-spin")}
        />
      )}
      {config.label}
    </Badge>
  );
}