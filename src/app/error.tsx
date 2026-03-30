"use client";

import { ArrowLeft, RefreshCw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-md">
        <p className="text-5xl mb-4">⚠️</p>
        <h1 className="text-2xl mb-3">Noe gikk galt</h1>
        <p className="text-[var(--color-text-muted)] mb-8 font-sans">
          Beklager, en feil oppstod. Prøv å laste siden på nytt.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            <RefreshCw className="h-4 w-4" />
            Prøv igjen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Til forsiden
          </a>
        </div>
      </div>
    </div>
  );
}
