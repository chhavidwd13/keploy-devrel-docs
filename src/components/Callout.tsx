"use client";

import React from "react";
import { Info, Lightbulb, AlertTriangle, Sparkles } from "lucide-react";

interface CalloutProps {
  type?: "info" | "tip" | "warning" | "aha";
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const configs = {
    info: {
      border: "border-sky-500/40 dark:border-sky-500/30",
      bg: "bg-sky-50/70 dark:bg-sky-950/20",
      text: "text-sky-900 dark:text-sky-200",
      badgeBg: "bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300",
      icon: <Info className="w-4 h-4 text-sky-500" />,
      defaultTitle: "Note",
    },
    tip: {
      border: "border-emerald-500/40 dark:border-emerald-500/30",
      bg: "bg-emerald-50/70 dark:bg-emerald-950/20",
      text: "text-emerald-900 dark:text-emerald-200",
      badgeBg: "bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300",
      icon: <Lightbulb className="w-4 h-4 text-emerald-500" />,
      defaultTitle: "Pro Tip",
    },
    warning: {
      border: "border-amber-500/40 dark:border-amber-500/30",
      bg: "bg-amber-50/70 dark:bg-amber-950/20",
      text: "text-amber-900 dark:text-amber-200",
      badgeBg: "bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300",
      icon: <AlertTriangle className="w-4 h-4 text-amber-500" />,
      defaultTitle: "Attention",
    },
    aha: {
      border: "border-orange-500/40 dark:border-orange-500/30",
      bg: "bg-orange-50/70 dark:bg-orange-950/20",
      text: "text-orange-950 dark:text-orange-100",
      badgeBg: "bg-orange-100 dark:bg-orange-900/60 text-orange-700 dark:text-orange-300",
      icon: <Sparkles className="w-4 h-4 text-orange-500" />,
      defaultTitle: "The Keploy A-ha! Moment",
    },
  };

  const current = configs[type] || configs.info;

  return (
    <div
      className={`my-6 p-4 rounded-xl border ${current.border} ${current.bg} shadow-sm backdrop-blur-xs transition-all`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${current.badgeBg}`}>
          {current.icon}
          {title || current.defaultTitle}
        </span>
      </div>
      <div className={`text-sm leading-relaxed ${current.text} [&>p]:mb-2 [&>p:last-child]:mb-0 font-normal`}>
        {children}
      </div>
    </div>
  );
}
