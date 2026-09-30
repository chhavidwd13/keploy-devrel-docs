"use client";

import React, { useState } from "react";
import { ArrowRight, Database, Play, Radio, Server, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function ArchitectureFlow() {
  const [phase, setPhase] = useState<"record" | "test">("record");

  return (
    <div className="my-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-sm overflow-hidden transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-orange-500/10 text-orange-500">
              <Zap className="w-4 h-4" />
            </span>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">
              Interactive Architecture: How Keploy Intercepts & Replays
            </h3>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Toggle between the two core lifecycle phases of zero-code eBPF testing
          </p>
        </div>

        {/* Phase Toggle Tabs */}
        <div className="flex rounded-lg p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 self-start sm:self-auto">
          <button
            onClick={() => setPhase("record")}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
              phase === "record"
                ? "bg-white dark:bg-zinc-800 text-orange-600 dark:text-orange-400 shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <Radio className={`w-3.5 h-3.5 ${phase === "record" ? "animate-pulse text-orange-500" : ""}`} />
            Phase 1: Record Mode
          </button>
          <button
            onClick={() => setPhase("test")}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
              phase === "test"
                ? "bg-white dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 shadow-xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            <Play className="w-3.5 h-3.5 text-emerald-500" />
            Phase 2: Test / Replay Mode
          </button>
        </div>
      </div>

      {/* Visual Diagram */}
      <div className="py-8">
        {phase === "record" ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {/* Step 1: Client */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-center relative group">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 mx-auto flex items-center justify-center font-mono text-xs mb-2">
                  01
                </div>
                <div className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                  HTTP Client / Curl
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
                  POST /url
                </div>
                <div className="mt-2 inline-block px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-[10px]">
                  Real API Traffic
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-zinc-400 dark:text-zinc-600">
                <ArrowRight className="w-5 h-5 animate-pulse text-orange-500" />
              </div>

              {/* Step 2: Keploy eBPF + Gin App */}
              <div className="p-4 rounded-xl border-2 border-orange-500/40 bg-orange-50/40 dark:bg-orange-950/20 text-center relative">
                <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-orange-500 text-white text-[9px] font-bold uppercase tracking-wider">
                  Zero Code Change
                </span>
                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 mx-auto flex items-center justify-center mb-2">
                  <Server className="w-4 h-4" />
                </div>
                <div className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                  Go App (Gin Router)
                </div>
                <div className="text-[11px] text-orange-600 dark:text-orange-400 mt-1 font-mono">
                  keploy record -c &quot;...&quot;
                </div>
                <div className="mt-2 text-[11px] text-zinc-600 dark:text-zinc-300">
                  eBPF intercepts socket read/write
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-zinc-400 dark:text-zinc-600">
                <ArrowRight className="w-5 h-5 text-orange-500" />
              </div>

              {/* Step 3: MongoDB */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center mb-2">
                  <Database className="w-4 h-4" />
                </div>
                <div className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                  Real MongoDB
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
                  localhost:27017
                </div>
                <div className="mt-2 inline-block px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[10px]">
                  Records Wire Protocol
                </div>
              </div>
            </div>

            {/* Generated Artifacts Box */}
            <div className="mt-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300">
                  <strong>Output generated on disk:</strong> Keploy writes raw network payloads directly into declarative YAML files:
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="px-2 py-1 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-orange-600 dark:text-orange-400">
                  keploy/tests/test-1.yaml
                </span>
                <span className="px-2 py-1 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sky-600 dark:text-sky-400">
                  keploy/mocks.yaml
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {/* Step 1: Keploy Replay Runner */}
              <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-50/30 dark:bg-emerald-950/20 text-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center font-mono text-xs mb-2">
                  <Play className="w-4 h-4" />
                </div>
                <div className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                  Keploy Test Engine
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-mono">
                  keploy test -c &quot;...&quot;
                </div>
                <div className="mt-2 inline-block px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px]">
                  Reads test-1.yaml
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-zinc-400 dark:text-zinc-600">
                <ArrowRight className="w-5 h-5 text-emerald-500 animate-pulse" />
              </div>

              {/* Step 2: Go App Under Test */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-center">
                <div className="w-8 h-8 rounded-full bg-zinc-500/10 text-zinc-500 mx-auto flex items-center justify-center mb-2">
                  <Server className="w-4 h-4" />
                </div>
                <div className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                  Go App (Gin Router)
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
                  Unchanged Binary
                </div>
                <div className="mt-2 text-[11px] text-zinc-600 dark:text-zinc-400">
                  Executes handler code normally
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-zinc-400 dark:text-zinc-600">
                <ArrowRight className="w-5 h-5 text-emerald-500" />
              </div>

              {/* Step 3: Mock Server (No DB!) */}
              <div className="p-4 rounded-xl border-2 border-dashed border-emerald-500/50 bg-emerald-50/20 dark:bg-emerald-950/10 text-center relative">
                <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-bold uppercase tracking-wider">
                  No Database Needed
                </span>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">
                  Virtual Mock Proxy
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-mono">
                  mocks.yaml Replay
                </div>
                <div className="mt-2 text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
                  Instant, isolated testing!
                </div>
              </div>
            </div>

            {/* Replay Verification Box */}
            <div className="mt-4 p-4 rounded-xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-emerald-900 dark:text-emerald-200">
                  <strong>Zero Test Flakiness:</strong> Replays HTTP response and matches headers/body against original recording with noise filtering (timestamp/UUID ignorance).
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white font-mono text-[10px] font-semibold tracking-wider uppercase">
                TEST PASSED (100% Match)
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-500 dark:text-zinc-400">
        💡 <strong>The Core Advantage:</strong> In traditional testing, you spend days writing manual mock structs for MongoDB drivers. With Keploy, your real traffic creates deterministic mocks automatically.
      </div>
    </div>
  );
}
