"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  Loader2,
  FileText,
  Plus,
  TrendingUp,
  Trash2,
  ArrowRight,
} from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import { formatDate } from "@/lib/status-utils";
import { useState } from "react";
import { Id } from "@/convex/_generated/dataModel";

export default function ReportsTable() {
  const jobs = useQuery(api.scrapingJobs.getUserJobs);
  const deleteJob = useMutation(api.scrapingJobs.deleteJob);
  const router = useRouter();
  const [deletingJobId, setDeletingJobId] = useState<string | null>(null);

  const handleRowClick = (snapshotId: string | undefined) => {
    if (snapshotId) {
      router.push(`/dashboard/report/${snapshotId}`);
    }
  };

  const handleDelete = async (e: React.MouseEvent, jobId: string) => {
    e.stopPropagation(); // Prevent row click

    if (
      !confirm(
        "Are you sure you want to delete this report? This action cannot be undone."
      )
    ) {
      return;
    }

    setDeletingJobId(jobId);
    try {
      await deleteJob({ jobId: jobId as Id<"scrapingJobs"> });
    } catch (error) {
      console.error("Failed to delete job:", error);
      alert("Failed to delete report. Please try again.");
    } finally {
      setDeletingJobId(null);
    }
  };

  if (!jobs) {
    return (
      <Card className="flex flex-col items-center justify-center p-12 text-center border-dashed">
        <div className="p-4 bg-primary/5 rounded-full mb-4 animate-pulse">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Loading Reports</h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
          Fetching your latest analysis reports. This should only take a moment...
        </p>
      </Card>
    );
  }

  if (jobs.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center p-16 text-center border-dashed hover:border-primary/50 transition-colors duration-300">
        <div className="p-5 bg-primary/5 rounded-full mb-6 ring-1 ring-primary/10">
          <FileText className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No Reports Yet</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          Get started by creating your first SEO analysis report. Enter a
          business name, product, or website above to begin.
        </p>
        <Button 
          variant="outline" 
          className="gap-2 rounded-full px-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Plus className="w-4 h-4" />
          Create New Report
        </Button>
      </Card>
    );
  }

  return (
    <div className="w-full space-y-4">
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 hover:bg-muted/30 border-b border-border/60">
              <TableHead className="w-[40%] pl-6 py-4 font-medium text-xs uppercase tracking-wider text-muted-foreground">
                Report Details
              </TableHead>
              <TableHead className="font-medium text-xs uppercase tracking-wider text-muted-foreground">
                Status
              </TableHead>
              <TableHead className="font-medium text-xs uppercase tracking-wider text-muted-foreground">
                Created
              </TableHead>
              <TableHead className="font-medium text-xs uppercase tracking-wider text-muted-foreground">
                Completed
              </TableHead>
              <TableHead className="w-[50px] pr-6"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job) => (
              <TableRow
                key={job._id}
                className="group cursor-pointer hover:bg-muted/40 transition-all duration-200 border-b border-border/40 last:border-b-0"
                onClick={() => handleRowClick(job.snapshotId)}
              >
                <TableCell className="pl-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors text-primary">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        {job.originalPrompt}
                      </div>
                      {job.snapshotId && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-mono text-muted-foreground/70 bg-muted/50 px-1.5 py-0.5 rounded border border-border/50">
                            {job.snapshotId.slice(0, 8)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4">
                  <StatusBadge status={job.status} showIcon={true} />
                </TableCell>
                <TableCell className="py-4 text-sm text-muted-foreground font-medium">
                  {formatDate(job.createdAt)}
                </TableCell>
                <TableCell className="py-4 text-sm text-muted-foreground font-medium">
                  {job.completedAt ? (
                    formatDate(job.completedAt)
                  ) : (
                    <span className="text-muted-foreground/40 text-xs">—</span>
                  )}
                </TableCell>
                <TableCell className="pr-6 py-4">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors"
                      onClick={(e) => handleDelete(e, job._id)}
                      disabled={deletingJobId === job._id}
                    >
                      {deletingJobId === job._id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Summary Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-muted/20 border-t border-border/60">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-4 h-4" />
              <span>
                Total Reports:{" "}
                <span className="font-semibold text-foreground">
                  {jobs.length}
                </span>
              </span>
            </div>
            {jobs.filter((job) => job.status === "completed").length > 0 && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span>
                  Completed:{" "}
                  <span className="font-semibold text-foreground">
                    {jobs.filter((job) => job.status === "completed").length}
                  </span>
                </span>
              </div>
            )}
          </div>
          <div className="text-[10px] font-medium text-muted-foreground/50 uppercase tracking-widest">
            RankRise AI Analysis
          </div>
        </div>
      </div>
    </div>
  );
}