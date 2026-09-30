"use client";

import React, { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

interface StepItem {
  id: number;
  title: string;
  desc: string;
}

const steps: StepItem[] = [
  { id: 1, title: "Install Keploy CLI", desc: "Single command curl script or Docker alias" },
  { id: 2, title: "Start MongoDB", desc: "Local container to capture initial live responses" },
  { id: 3, title: "Record with Keploy", desc: "Run keploy record and fire sample curl POST requests" },
  { id: 4, title: "Inspect YAML Artifacts", desc: "Verify generated test cases and mongo mocks in /keploy" },
  { id: 5, title: "Replay Without Database", desc: "Stop Mongo container and execute keploy test to see 100% pass" },
];

export function QuickstartStepper() {
  const [completed, setCompleted] = useState<number[]>([1]);

  const toggleStep = (id: number) => {
    if (completed.includes(id)) {
      setCompleted(completed.filter((item) => item !== id));
    } else {
      setCompleted([...completed, id]);
    }
  };

  const progressPercent = Math.round((completed.length / steps.length) * 100);

  return (
    <div className="my-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 p-5 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            Interactive Quickstart Checklist
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Click each milestone as you follow along this guide
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-20 sm:w-28 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-mono font-medium text-orange-600 dark:text-orange-400">
            {progressPercent}%
          </span>
        </div>
      </div>

      <div className="space-y-2.5">
        {steps.map((step) => {
          const isDone = completed.includes(step.id);
          return (
            <button
              key={step.id}
              onClick={() => toggleStep(step.id)}
              type="button"
              className={`w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                isDone
                  ? "bg-white dark:bg-zinc-900 border-orange-500/30 text-zinc-900 dark:text-zinc-100 shadow-xs"
                  : "bg-white/50 dark:bg-zinc-900/20 border-zinc-200/80 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-orange-500 fill-orange-500/10" />
                ) : (
                  <Circle className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-xs font-medium ${isDone ? "text-orange-950 dark:text-orange-200 line-through opacity-80" : ""}`}>
                  Step {step.id}: {step.title}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                  {step.desc}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
