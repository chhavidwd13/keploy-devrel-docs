import React from "react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { TableOfContents } from "@/components/TableOfContents";
import TutorialContent from "@/content/tutorial.mdx";
import { Clock, UserCheck, Sparkles, CheckCircle2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        <div className="flex gap-8 items-start justify-center">
          {/* Left Navigation Sidebar */}
          <Sidebar />

          {/* Main Article Body */}
          <main className="flex-1 min-w-0 max-w-3xl pb-16">
            {/* Header Metadata Pill Bar */}
            <div className="mb-6 flex flex-wrap items-center gap-2.5 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                DevRel Assignment
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                6 min read
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                Author: DevRel Candidate
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono">
                Keploy v2 • eBPF
              </span>
            </div>

            {/* The MDX Article Content */}
            <article className="prose dark:prose-invert max-w-none">
              <TutorialContent />
            </article>

            {/* Footer / Candidate Submission Card */}
            <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Built for Keploy DevRel Candidate Assessment
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Built with Next.js 16 (App Router), MDX, and Tailwind CSS. Static generation ready for Vercel.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="https://github.com/keploy/keploy"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Keploy Repo</span>
                  </a>
                  <a
                    href="https://keploy.io/docs"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium transition-colors"
                  >
                    <span>Read Docs</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </footer>
          </main>

          {/* Right Sticky Table of Contents */}
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}
