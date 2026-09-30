"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ExternalLink, Terminal, Sparkles } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
              K
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 tracking-tight text-base">
                  Keploy
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/40">
                  DevRel Docs
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Center pill: Topic */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-xs text-zinc-600 dark:text-zinc-400">
          <Terminal className="w-3.5 h-3.5 text-orange-500" />
          <span>Interactive Quickstart:</span>
          <span className="font-mono text-zinc-900 dark:text-zinc-200 font-medium">Go (Gin + MongoDB)</span>
        </div>

        {/* Right actions: ThemeToggle + Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/keploy/keploy"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </a>

          <a
            href="https://keploy.io"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Try Keploy Cloud</span>
            <span className="sm:hidden">Keploy</span>
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
