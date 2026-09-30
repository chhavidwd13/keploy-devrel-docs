"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  children?: React.ReactNode;
  title?: string;
  language?: string;
  rawCode?: string;
}

export function CodeBlock({
  children,
  title,
  language = "bash",
  rawCode,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract text content if rawCode not provided
  const getTextToCopy = (): string => {
    if (rawCode) return rawCode;
    if (typeof children === "string") return children;
    if (React.isValidElement(children)) {
      const childProps = children.props as { children?: React.ReactNode };
      if (typeof childProps?.children === "string") {
        return childProps.children;
      }
    }
    return String(children || "");
  };

  const handleCopy = async () => {
    const text = getTextToCopy();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="my-5 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-100 shadow-md">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          {title ? (
            <span className="font-mono text-zinc-300 font-medium">{title}</span>
          ) : (
            <span className="flex items-center gap-1 font-mono uppercase tracking-wider text-[11px] text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-orange-400" />
              {language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          type="button"
          aria-label="Copy code"
          className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 hover:text-white transition-all text-xs font-mono cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed text-zinc-200 selection:bg-orange-500/30">
        {children}
      </div>
    </div>
  );
}
