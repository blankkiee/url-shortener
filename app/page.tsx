"use client";

import { useState } from "react";

const FEATURES = [
  {
    title: "Fast redirects",
    body: "Links resolve from an edge function, close to wherever the click happens.",
  },
  {
    title: "Click analytics",
    body: "See clicks over time, top referrers, and rough location per link.",
  },
  {
    title: "No account needed",
    body: "Shorten a link in one step. Nothing to sign up for.",
  },
];

// Placeholder until the real /api/shorten route exists — swap this out first.
function mockShortCode(url: string) {
  let hash = 0;
  for (const char of url) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return hash.toString(36).slice(0, 7);
}

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortCode, setShortCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!url.trim()) return;
    setShortCode(mockShortCode(url.trim()));
    setCopied(false);
  }

  const shortUrl = shortCode ? `snip.link/${shortCode}` : null;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-16 px-5 py-20 sm:px-8 sm:py-28">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
          Free, no account needed
        </span>

        <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Shorten a link. Track every click.
        </h1>

        <p className="max-w-lg text-balance text-lg text-muted">
          Paste a long URL, get a short one back instantly, and see exactly
          who clicked it.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-2 flex w-full max-w-lg flex-col gap-2 sm:flex-row"
        >
          <input
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            type="url"
            required
            placeholder="https://example.com/a/very/long/link"
            className="flex-1 rounded-md border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Shorten
          </button>
        </form>

        {shortUrl && (
          <div className="flex w-full max-w-lg items-center justify-between gap-3 rounded-md border border-border bg-subtle px-4 py-3">
            <span className="truncate font-mono text-sm">{shortUrl}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(`https://${shortUrl}`);
                setCopied(true);
              }}
              className="shrink-0 cursor-pointer rounded-md border border-border px-3 py-1 text-xs font-medium transition-colors hover:bg-background"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="rounded-lg border border-border bg-background p-5"
          >
            <h2 className="text-sm font-medium">{feature.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {feature.body}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
