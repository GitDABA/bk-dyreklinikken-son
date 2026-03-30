import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  ArrowRight,
  Stethoscope,
  Syringe,
  Scissors,
  SmilePlus,
  Microscope,
  HeartPulse,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tjenester — Veterinærtjenester",
  description:
    "Komplett oversikt over tjenester ved Dyreklinikken Son. Allmennpraksis, kirurgi, tannhelse, vaksinering og spesialisttjenester.",
};

export default function TjenesterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] pt-32 pb-20 sm:pt-40 sm:pb-24 px-4 sm:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white mb-6 leading-tight">Våre tjenester</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-sans">
            Fra rutinekontroll til avansert spesialistbehandling — alt under ett tak.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Tjenester" }]} />

      <div className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Allmennpraksis */}
          <div className="space-y-10">
            <h2 className="text-2xl">Allmennpraksis</h2>

            {/* Poliklinikk */}
            <div className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="h-5 w-5 text-[var(--color-primary)]" aria-hidden="true" />
                <h3 className="text-lg font-sans font-semibold">Poliklinikk</h3>
              </div>
              <ul className="space-y-2 text-[var(--color-text-muted)] text-sm font-sans">
                {[
                  "Konsultasjon (fra 975 NOK)",
                  "Vaksinering (fra 699 NOK)",
                  "Valpepakke/kattungepakke (fra 1 399 NOK)",
                  "Negletriming (fra 200 NOK)",
                  "Resepter/refill (fra 150 NOK)",
                  "ID-chip (fra 1 075 NOK)",
                  "EU-pass (745 NOK)",
                  "Librela/Solensia-injeksjoner (fra 1 060 NOK)",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1" aria-hidden="true">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tannhelse */}
            <div className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-4">
                <SmilePlus className="h-5 w-5 text-[var(--color-primary)]" aria-hidden="true" />
                <h3 className="text-lg font-sans font-semibold">Tannhelse</h3>
              </div>
              <div className="mb-4 aspect-[16/9] rounded-xl overflow-hidden bg-[var(--color-sand)]">
                <Image
                  src="/images/dental-procedure.jpg"
                  alt="Tannbehandling hos Dyreklinikken Son"
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="space-y-2 text-[var(--color-text-muted)] text-sm font-sans">
                {[
                  "Gratis tannsjekk",
                  "Tannrens inkl. røntgen (fra 2 800 NOK)",
                  "Ekstraksjon (fra 1 500 NOK)",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1" aria-hidden="true">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Kirurgi */}
            <div className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-4">
                <Scissors className="h-5 w-5 text-[var(--color-primary)]" aria-hidden="true" />
                <h3 className="text-lg font-sans font-semibold">Kirurgi</h3>
              </div>
              <ul className="space-y-2 text-[var(--color-text-muted)] text-sm font-sans">
                {[
                  "Kastrering hannkatt (fra 1 275 NOK)",
                  "Sterilisering hunnkatt (fra 2 398 NOK)",
                  "Kastrering hannhund (fra 8 750 NOK)",
                  "Kirurgisk massereseksjon (fra 5 000 NOK)",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1" aria-hidden="true">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Spesialisttjenester */}
          <div className="space-y-10">
            <h2 className="text-2xl">Spesialisttjenester</h2>

            {[
              {
                icon: Microscope,
                title: "Onkologi",
                desc: "Komplett onkologisk utredning og behandling — tumourstaging, onkologisk kirurgi, kjemoterapi og ultralydveiledet celleprøvetaking.",
                href: "/spesialist/onkologi",
              },
              {
                icon: HeartPulse,
                title: "Kardiologi",
                desc: "Ekkokardiografi, EKG, blodtrykksmåling og arytmimonitorering. Avansert hjertediagnostikk for hund og katt.",
                href: "/spesialist/kardiologi",
              },
              {
                icon: Stethoscope,
                title: "Indremedisin",
                desc: "Gastroenterologi, endokrinologi, hepatologi og nefrologi. Metodisk utredning med avansert lab og bildediagnostikk.",
                href: "/spesialist/indremedisin",
              },
            ].map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-[var(--color-sand)] dark:bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="h-5 w-5 text-[var(--color-primary)]" aria-hidden="true" />
                  <h3 className="text-lg font-sans font-semibold">{title}</h3>
                </div>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4 font-sans">
                  {desc}
                </p>
                <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold text-sm group-hover:gap-3 transition-all">
                  Les mer <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}

            {/* Additional services */}
            <div className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border)]">
              <h3 className="text-lg font-sans font-semibold mb-4 text-[var(--color-primary)]">
                Diagnostikk og lab
              </h3>
              <ul className="space-y-2 text-[var(--color-text-muted)] text-sm font-sans">
                {[
                  "Blodprøveanalyse (fra 1 000 NOK)",
                  "Urinanalyse (fra 220 NOK)",
                  "Cytologi (fra 550 NOK)",
                  "Røntgen (fra 2 500 NOK)",
                  "Ultralyd (fra 1 250 NOK)",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1" aria-hidden="true">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking */}
            <div className="bg-[var(--color-accent)]/10 dark:bg-[var(--color-accent)]/5 p-6 rounded-2xl border border-[var(--color-accent)]/20">
              <h3 className="text-lg font-sans font-semibold mb-2 text-[var(--color-primary)]">
                Bestill time
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm mb-4 font-sans">
                Enklest via online booking eller ring oss direkte.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.vettigo.dk/no/booking.php?_klinik=son999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all"
                >
                  Bestill online <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="tel:+4764950500"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-[var(--color-primary)] hover:text-white transition-all"
                >
                  Ring 64 95 05 00
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
