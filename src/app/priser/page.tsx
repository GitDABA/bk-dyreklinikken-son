import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ExternalLink, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Priser — Prisliste",
  description:
    "Prisliste for Dyreklinikken Son. Konsultasjoner, diagnostikk, kirurgi, tannhelse, spesialist og laboratorium. Alle priser inkl. MVA.",
};

interface PriceItem {
  service: string;
  price: string;
  note?: string;
}

interface PriceSection {
  title: string;
  items: PriceItem[];
}

const sections: PriceSection[] = [
  {
    title: "Poliklinikk",
    items: [
      { service: "Konsultasjon", price: "fra 975 NOK" },
      { service: "Vaksinering", price: "fra 699 NOK" },
      { service: "Valpepakke / kattungepakke (per dyr)", price: "fra 1 399 NOK" },
      { service: "Negletriming", price: "fra 200 NOK" },
      { service: "Resept / refill", price: "fra 150 NOK" },
      { service: "ID-chip", price: "fra 1 075 NOK" },
      { service: "EU-pass (utstedelse)", price: "745 NOK" },
      { service: "EU-pass reiseattest/ormekur", price: "fra 190 NOK" },
      { service: "Librela / Solensia-injeksjon", price: "fra 1 060 NOK" },
    ],
  },
  {
    title: "Diagnostikk / utredning",
    items: [
      { service: "Indremedisinsk utredning", price: "fra 2 000 NOK" },
      { service: "Kardiologi utredning", price: "fra 5 500 NOK" },
      { service: "Onkologi utredning", price: "fra 2 000 NOK" },
      { service: "Dermatologi utredning", price: "fra 2 000 NOK" },
    ],
  },
  {
    title: "Bildediagnostikk",
    items: [
      { service: "Røntgen", price: "fra 2 500 NOK" },
      { service: "Ultralyd", price: "fra 1 250 NOK" },
    ],
  },
  {
    title: "Tannhelse",
    items: [
      { service: "Tannsjekk", price: "Gratis" },
      { service: "Tannrens inkl. røntgen", price: "fra 2 800 NOK" },
      { service: "Ekstraksjon", price: "fra 1 500 NOK" },
    ],
  },
  {
    title: "Laboratorium",
    items: [
      { service: "Blodprøveanalyse", price: "fra 1 000 NOK" },
      { service: "Urinanalyse", price: "fra 220 NOK" },
      { service: "Cytologi", price: "fra 550 NOK" },
    ],
  },
  {
    title: "Kirurgi",
    items: [
      { service: "Kastrering hannkatt", price: "fra 1 275 NOK" },
      { service: "Sterilisering hunnkatt", price: "fra 2 398 NOK" },
      { service: "Kastrering hannhund (kirurgisk)", price: "fra 8 750 NOK" },
      { service: "Kirurgisk massereseksjon", price: "fra 5 000 NOK" },
    ],
  },
];

export default function PriserPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] pt-32 pb-20 sm:pt-40 sm:pb-24 px-4 sm:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white mb-4 leading-tight">Priser</h1>
          <p className="text-white/80 font-sans">
            Oppdatert 16.02.2026 · Alle priser inkl. MVA
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Priser" }]} />

      <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden"
            >
              <div className="bg-[var(--color-sand)] dark:bg-[var(--color-bg)] px-6 py-4">
                <h2 className="text-lg font-sans font-semibold text-[var(--color-primary)]">
                  {section.title}
                </h2>
              </div>
              <div className="divide-y divide-[var(--color-border)]">
                {section.items.map((item) => (
                  <div
                    key={item.service}
                    className="flex items-center justify-between px-6 py-3 text-sm font-sans"
                  >
                    <span className="text-[var(--color-text)]">
                      {item.service}
                      {item.note && (
                        <span className="text-[var(--color-text-muted)] text-xs ml-2">
                          ({item.note})
                        </span>
                      )}
                    </span>
                    <span className="text-[var(--color-primary)] font-medium shrink-0 ml-4">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Booking */}
        <div className="mt-12 bg-[var(--color-accent)]/10 dark:bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl mb-3">Bestill time</h2>
          <p className="text-[var(--color-text-muted)] text-sm mb-6 font-sans">
            Bestill enkelt online eller ring oss for spesialisthenvisning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://www.vettigo.dk/no/booking.php?_klinik=son999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Bestill online <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="tel:+4764950500"
              className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all"
            >
              <Phone className="h-4 w-4" />
              Ring 64 95 05 00
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
