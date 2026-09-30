import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keploy DevRel Docs | Zero-Code Testing for Go (Gin + MongoDB)",
  description:
    "A hands-on, developer-focused guide to running Keploy eBPF-based API recording and offline mock replay with Go Gin and MongoDB.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors selection:bg-orange-500/20 selection:text-orange-950 dark:selection:text-orange-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
