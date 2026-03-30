"use client";

import { useState } from "react";
import { Mail, User, CheckCircle } from "lucide-react";

export default function RevealGatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-20">
      {/* Blurred preview content behind the overlay */}
      <div
        className={`transition-all duration-700 ${
          submitted ? "" : "blur-lg pointer-events-none select-none"
        }`}
        aria-hidden={!submitted}
      >
        <div className="max-w-5xl mx-auto px-4 py-20 space-y-12">
          <div className="text-center">
            <h1 className="mb-4">Dyreklinikken Son — Ny nettside</h1>
            <p className="text-[var(--color-text-muted)] text-lg font-sans max-w-2xl mx-auto">
              En moderne, profesjonell nettside som kommuniserer
              spesialistkompetansen tydelig og konverterer besøkende til
              pasienter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Responsivt design for mobil og desktop",
              "Spesialistsidene fremhevet tydeligere",
              "For-veterinærer henvisningsportal",
              "Tydelig CTA — Ring oss nå",
              "WCAG AA tilgjengelig",
              "Rask lasting (Next.js 15, optimaliserte bilder)",
            ].map((feature) => (
              <div
                key={feature}
                className="bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]"
              >
                <p className="text-[var(--color-text)] font-sans text-sm">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay gate */}
      {!submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-primary)]/60 backdrop-blur-sm pt-20">
          <div className="bg-[var(--color-surface)] rounded-2xl shadow-2xl p-8 sm:p-10 max-w-md w-full mx-4 border border-[var(--color-border)]">
            <div className="text-center mb-6">
              <h2 className="text-2xl mb-2">Se hva som er mulig</h2>
              <p className="text-[var(--color-text-muted)] text-sm font-sans">
                Fyll ut for å se hele forslaget til ny nettside for
                Dyreklinikken Son.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="gate-name"
                  className="block text-sm font-medium text-[var(--color-text)] mb-1 font-sans"
                >
                  Navn
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-text-muted)]" />
                  <input
                    type="text"
                    id="gate-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Ditt navn"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent font-sans"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="gate-email"
                  className="block text-sm font-medium text-[var(--color-text)] mb-1 font-sans"
                >
                  E-post
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-text-muted)]" />
                  <input
                    type="email"
                    id="gate-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="din@epost.no"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent font-sans"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white py-3 rounded-lg font-semibold transition-all font-sans"
              >
                Vis meg nettsiden
              </button>
              <p className="text-xs text-[var(--color-text-muted)] text-center font-sans">
                Jeg er interessert i å oppgradere nettsiden min
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Thank you message (after submit) */}
      {submitted && (
        <div className="fixed bottom-8 right-8 z-50 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-lg p-4 max-w-sm animate-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
            <div>
              <p className="font-semibold text-[var(--color-text)] text-sm font-sans">
                Takk, {name}!
              </p>
              <p className="text-xs text-[var(--color-text-muted)] font-sans">
                Vi tar kontakt på {email} snart.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
