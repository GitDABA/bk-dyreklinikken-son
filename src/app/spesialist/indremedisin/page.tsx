import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  Phone,
  ArrowRight,
  Stethoscope,
  Pill,
  TestTube,
  ScanSearch,
  Droplets,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Indremedisin — Komplekse utredninger",
  description:
    "Avansert utredning av indremedisinske tilstander hos hund og katt. Gastroenterologi, endokrinologi, hepatologi og nefrologi. Ring 64 95 05 00.",
};

const areas = [
  {
    icon: Stethoscope,
    title: "Gastroenterologi",
    desc: "Utredning av kroniske mage-/tarmproblemer, malabsorpsjon, inflammatorisk tarmsykdom (IBD) og fôrintoleranse.",
  },
  {
    icon: Pill,
    title: "Endokrinologi",
    desc: "Diagnostikk og behandling av hormonforstyrrelser: hypothyreose, hypertyreose, Cushing, Addison, diabetes mellitus.",
  },
  {
    icon: TestTube,
    title: "Hepatologi",
    desc: "Utredning av leversykdommer med avansert laboratorieanalyse og ultralydveiledet prøvetaking.",
  },
  {
    icon: Droplets,
    title: "Nefrologi",
    desc: "Diagnostikk og oppfølging av nyresykdommer, inkludert kronisk nyresvikt (CKD) og akutt nyreskade.",
  },
  {
    icon: ScanSearch,
    title: "Avansert bildediagnostikk",
    desc: "Ultralydveiledet celleprøvetaking (FNA), abdominal ultralyd og digital røntgen for presis diagnostikk.",
  },
];

export default function IndremedisinPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white mb-6 leading-tight">
            Indremedisin — komplekse utredninger
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto font-sans">
            Grundig, metodisk utredning av komplekse medisinske tilstander med avansert
            laboratorieanalyse og bildediagnostikk. Når fastlegen trenger en andre mening.
          </p>
          <a
            href="tel:+4764950500"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Ring 64 95 05 00
          </a>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Spesialist", href: "/spesialist/onkologi" },
          { label: "Indremedisin" },
        ]}
      />

      {/* Areas */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase mb-2 block font-sans">
            Fagområder
          </span>
          <h2>Indremedisinske utredninger</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[var(--color-sand)] dark:bg-[var(--color-surface)] p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[var(--color-surface)] dark:bg-[var(--color-bg)] rounded-full flex items-center justify-center mb-5 shadow-sm">
                <Icon className="h-7 w-7 text-[var(--color-primary)]" aria-hidden="true" />
              </div>
              <h3 className="text-lg mb-3 font-sans font-semibold">{title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-[var(--color-surface)] dark:bg-[var(--color-bg)] px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Vår tilnærming</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 font-sans">
            Indremedisinsk utredning krever en systematisk tilnærming. Vi starter alltid med
            en grundig anamnese og klinisk undersøkelse, etterfulgt av målrettede diagnostiske
            tester. Hver utredning tilpasses det individuelle dyret — ingen unødvendige prøver,
            men heller ikke noe som utelates.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed font-sans">
            Marianne Mandelin (DipECVIM-CA) leder våre indremedisinske utredninger med
            støtte fra et komplett laboratorium, høykvalitets ultralyd og mulighet for
            telemedisin-konsultasjon med eksterne spesialister.
          </p>
        </div>
      </section>

      {/* Price callout */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto bg-[var(--color-sand)]/30 dark:bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-[var(--color-text)] text-lg font-sans">
            Indremedisinsk utredning fra{" "}
            <span className="font-bold text-[var(--color-primary)]">2 000 NOK</span>
          </p>
          <Link
            href="/priser"
            className="inline-flex items-center gap-2 mt-4 text-[var(--color-accent)] font-semibold text-sm hover:gap-3 transition-all"
          >
            Full prisliste <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] py-16 px-4 sm:px-8 text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[var(--color-accent)] rounded-full flex items-center justify-center shadow-lg">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white/70 text-sm uppercase tracking-wider font-sans">
                Bestill utredning
              </p>
              <a href="tel:+4764950500" className="text-2xl hover:text-[var(--color-accent)] transition-colors">
                Ring 64 95 05 00
              </a>
            </div>
          </div>
          <div className="h-px w-20 bg-white/20 hidden md:block" aria-hidden="true" />
          <Link
            href="/for-veterinaerer"
            className="group flex items-center gap-2 text-lg font-medium font-sans"
          >
            For veterinærer (henvisning)
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
