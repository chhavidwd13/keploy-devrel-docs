import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/Callout";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { YamlInspector } from "@/components/YamlInspector";
import { QuickstartStepper } from "@/components/QuickstartStepper";
import { CodeBlock } from "@/components/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom MDX Components
    Callout,
    ArchitectureFlow,
    YamlInspector,
    QuickstartStepper,
    CodeBlock,

    // HTML Element Customizations
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mt-12 mb-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-24 group flex items-center justify-between"
      >
        <span>{children}</span>
        {id && (
          <a
            href={`#${id}`}
            className="opacity-0 group-hover:opacity-100 text-orange-500 text-base transition-opacity ml-2"
            aria-label="Anchor link"
          >
            #
          </a>
        )}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-200 mt-8 mb-3 scroll-mt-24"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-5 text-[15px]">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-zinc-700 dark:text-zinc-300 text-[15px]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside pl-6 space-y-2 mb-6 text-zinc-700 dark:text-zinc-300 text-[15px]">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    code: ({ children, className }) => {
      // Inline code
      if (!className) {
        return (
          <code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-600 dark:text-orange-400 font-mono text-[13px] border border-zinc-200/80 dark:border-zinc-700/80">
            {children}
          </code>
        );
      }
      return <code className={className}>{children}</code>;
    },
    pre: ({ children }) => (
      <div className="my-5 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-md">
        <pre className="p-4 overflow-x-auto font-mono text-sm leading-relaxed text-zinc-200">
          {children}
        </pre>
      </div>
    ),
    hr: () => (
      <hr className="my-8 border-t border-zinc-200 dark:border-zinc-800" />
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-orange-600 dark:text-orange-400 font-medium underline underline-offset-4 decoration-orange-500/40 hover:decoration-orange-500 transition-colors"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-500/60 pl-4 py-1 my-5 italic text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/30 rounded-r-lg">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
