"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, ExternalLink, ChevronRight } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const tocItems: TocItem[] = [
  { id: "the-testing-dilemma", title: "1. The Integration Testing Dilemma", level: 2 },
  { id: "how-keploy-works", title: "2. The Mental Model: Zero-Code eBPF", level: 2 },
  { id: "prerequisites-and-installation", title: "3. Prerequisites & Installation", level: 2 },
  { id: "step-1-the-gin-mongo-service", title: "4. Step 1: The Gin + Mongo Service", level: 2 },
  { id: "step-2-recording-real-traffic", title: "5. Step 2: Recording Real Traffic", level: 2 },
  { id: "step-3-inspecting-yamls", title: "6. Step 3: Inspecting Generated YAMLs", level: 2 },
  { id: "step-4-the-offline-replay", title: "7. Step 4: Offline Test Replay", level: 2 },
  { id: "aha-moments-and-gotchas", title: "8. DevRel 'A-ha!' Insights & Gotchas", level: 2 },
  { id: "summary-and-resources", title: "9. Summary & Candidate Deliverables", level: 2 },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("the-testing-dilemma");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <aside className="hidden xl:block w-64 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pl-4 border-l border-zinc-200 dark:border-zinc-800 text-xs">
      <div className="flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100 font-semibold mb-3">
        <BookOpen className="w-3.5 h-3.5 text-orange-500" />
        <span>ON THIS PAGE</span>
      </div>

      <nav className="space-y-1">
        {tocItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              type="button"
              className={`w-full text-left py-1 px-2 rounded-md transition-all flex items-center justify-between cursor-pointer ${
                isActive
                  ? "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 font-medium"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              <span className="truncate">{item.title}</span>
              {isActive && <ChevronRight className="w-3 h-3 text-orange-500 shrink-0 ml-1" />}
            </button>
          );
        })}
      </nav>

      {/* Helpful links */}
      <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2 text-[11px] text-zinc-500 dark:text-zinc-400">
        <div className="font-semibold uppercase tracking-wider text-[10px] text-zinc-400 dark:text-zinc-500">
          Quick Links
        </div>
        <a
          href="https://github.com/keploy/keploy"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Keploy GitHub (4.2k★)</span>
        </a>
        <a
          href="https://keploy.io/docs"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Official Keploy Docs</span>
        </a>
      </div>
    </aside>
  );
}
