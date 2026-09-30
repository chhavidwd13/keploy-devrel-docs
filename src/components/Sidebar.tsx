"use client";

import React from "react";
import {
  Sparkles,
  Layers,
  Terminal,
  FileCode2,
  PlaySquare,
  AlertCircle,
  HelpCircle,
  FileCheck2,
} from "lucide-react";

interface NavSection {
  title: string;
  items: {
    title: string;
    href: string;
    icon: React.ReactNode;
    badge?: string;
  }[];
}

const navSections: NavSection[] = [
  {
    title: "GETTING STARTED",
    items: [
      {
        title: "The Testing Dilemma",
        href: "#the-testing-dilemma",
        icon: <Layers className="w-4 h-4 text-orange-500" />,
      },
      {
        title: "eBPF Mental Model",
        href: "#how-keploy-works",
        icon: <Sparkles className="w-4 h-4 text-amber-500" />,
        badge: "Core",
      },
      {
        title: "CLI Installation",
        href: "#prerequisites-and-installation",
        icon: <Terminal className="w-4 h-4 text-sky-500" />,
      },
    ],
  },
  {
    title: "HANDS-ON TUTORIAL",
    items: [
      {
        title: "1. The Gin + Mongo App",
        href: "#step-1-the-gin-mongo-service",
        icon: <FileCode2 className="w-4 h-4 text-emerald-500" />,
      },
      {
        title: "2. Record Real Traffic",
        href: "#step-2-recording-real-traffic",
        icon: <Terminal className="w-4 h-4 text-indigo-500" />,
        badge: "Hands-on",
      },
      {
        title: "3. Inspect Test & Mock YAML",
        href: "#step-3-inspecting-yamls",
        icon: <FileCheck2 className="w-4 h-4 text-purple-500" />,
      },
      {
        title: "4. Replay Without Database",
        href: "#step-4-the-offline-replay",
        icon: <PlaySquare className="w-4 h-4 text-rose-500" />,
        badge: "Magic",
      },
    ],
  },
  {
    title: "DEVREL INSIGHTS",
    items: [
      {
        title: "A-ha! Moments & Gotchas",
        href: "#aha-moments-and-gotchas",
        icon: <AlertCircle className="w-4 h-4 text-amber-500" />,
      },
      {
        title: "Summary & Deliverables",
        href: "#summary-and-resources",
        icon: <HelpCircle className="w-4 h-4 text-teal-500" />,
      },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-4 text-xs">
      <div className="space-y-6">
        {navSections.map((section, idx) => (
          <div key={idx}>
            <div className="font-semibold uppercase tracking-wider text-[10px] text-zinc-400 dark:text-zinc-500 mb-2 px-2">
              {section.title}
            </div>
            <div className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href={item.href}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors font-medium"
                >
                  <div className="flex items-center gap-2 truncate">
                    {item.icon}
                    <span className="truncate">{item.title}</span>
                  </div>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Candidate & Role Info Card */}
        <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-[11px] space-y-1 text-zinc-500 dark:text-zinc-400">
          <div className="font-medium text-zinc-800 dark:text-zinc-200">
            Candidate Assignment
          </div>
          <div>Role: DevRel Specialist</div>
          <div>Target: Keploy (Go Quickstart)</div>
          <div className="pt-2 text-[10px] text-orange-600 dark:text-orange-400 font-mono">
            Next.js 16 + MDX + Tailwind
          </div>
        </div>
      </div>
    </aside>
  );
}
