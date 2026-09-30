"use client";

import React, { useState } from "react";
import { FileCode, Database, Info, Copy, Check } from "lucide-react";

export function YamlInspector() {
  const [activeTab, setActiveTab] = useState<"test" | "mock">("test");
  const [copied, setCopied] = useState(false);

  const testYaml = `version: api.keploy.io/v1beta1
kind: Http
name: test-1
status: RUNNING
spec:
  metadata: {}
  req:
    method: POST
    proto_major: 1
    proto_minor: 1
    url: /url
    header:
      Accept: "*/*"
      Content-Type: application/json
      User-Agent: curl/8.4.0
    body: '{"url": "https://keploy.io", "custom_alias": "keploy-docs"}'
    timestamp: 2026-09-30T10:14:02Z
  resp:
    status_code: 200
    header:
      Content-Type: application/json; charset=utf-8
    body: '{"short_url": "http://localhost:8080/keploy-docs", "status": "success"}'
    status_message: OK
    timestamp: 2026-09-30T10:14:02Z
  objects: []
  assertions:
    noise:
      - header.Date
  created: 1727691242`;

  const mockYaml = `version: api.keploy.io/v1beta1
kind: Mongo
name: mock-mongo-1
spec:
  metadata:
    type: config
    operation: insert
  requests:
    - header:
        length: 84
        request_id: 12
        response_to: 0
        op_code: 2013 # OP_MSG wire protocol
      message:
        flags: 0
        sections:
          - kind: 0
            payload:
              insert: urls
              documents:
                - _id: ObjectID("66fa7a4...")
                  short_url: "keploy-docs"
                  original_url: "https://keploy.io"
  responses:
    - header:
        op_code: 2013
      message:
        payload:
          n: 1
          ok: 1.0`;

  const currentContent = activeTab === "test" ? testYaml : mockYaml;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="my-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-100 shadow-md overflow-hidden">
      {/* Header Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800 gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("test")}
            type="button"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              activeTab === "test"
                ? "bg-zinc-800 text-orange-400 border border-orange-500/30"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-orange-400" />
            keploy/tests/test-1.yaml
          </button>
          <button
            onClick={() => setActiveTab("mock")}
            type="button"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              activeTab === "mock"
                ? "bg-zinc-800 text-sky-400 border border-sky-500/30"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Database className="w-3.5 h-3.5 text-sky-400" />
            keploy/mocks.yaml
          </button>
        </div>

        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center gap-1.5 self-end sm:self-auto px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono cursor-pointer transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied YAML</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
              <span>Copy File</span>
            </>
          )}
        </button>
      </div>

      {/* Code Display */}
      <div className="p-4 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-200 bg-zinc-950">
        <pre className="selection:bg-orange-500/30">
          <code>{currentContent}</code>
        </pre>
      </div>

      {/* Explanatory footer note */}
      <div className="px-4 py-3 bg-zinc-900/70 border-t border-zinc-800/80 flex items-start gap-2.5 text-xs text-zinc-400">
        <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
        <div>
          {activeTab === "test" ? (
            <span>
              <strong>How test-1.yaml works:</strong> Captures the exact HTTP method, path, headers, request body, and expected response. Keploy automatically flags dynamic fields like <code className="text-orange-300">header.Date</code> under <code className="text-orange-300">assertions.noise</code> to prevent false test failures.
            </span>
          ) : (
            <span>
              <strong>How mocks.yaml works:</strong> Records the raw MongoDB binary wire protocol (OP_MSG 2013). During replay, Keploy mocks this query inside the Linux network socket—so your Go driver receives the exact BSON reply without connecting to Mongo!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
