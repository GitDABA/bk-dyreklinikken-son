import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-[var(--color-primary)] mb-4 font-sans">
          404
        </p>
        <h1 className="text-2xl mb-3">Siden ble ikke funnet</h1>
        <p className="text-[var(--color-text-muted)] mb-8 font-sans">
          Beklager, vi fant ikke siden du leter etter. Den kan ha blitt flyttet
          eller slettet.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-lg font-semibold transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Tilbake til forsiden
        </Link>
      </div>
    </div>
  );
}
