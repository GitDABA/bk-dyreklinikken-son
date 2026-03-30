import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  Phone,
  ArrowRight,
  Award,
  GraduationCap,
  BookOpen,
  CheckCircle,
  Microscope,
  Scissors,
  Pill,
  ScanSearch,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Onkologi — Kreftdiagnostikk og behandling",
  description:
    "Komplett onkologisk utredning og behandling for hund og katt. Spesialist Marianne Mandelin med mastergrad i onkologi. Ring 64 95 05 00.",
};

const services = [
  {
    icon: ScanSearch,
    title: "Tumourstaging og prognosevurdering",
    desc: "Omfattende kartlegging for å bestemme kreftens omfang og forventet forløp.",
  },
  {
    icon: Scissors,
    title: "Onkologisk kirurgi med vide marginer",
    desc: "Spesialisert kirurgisk fjerning av svulster for å minimere risiko for tilbakefall.",
  },
  {
    icon: Pill,
    title: "Kjemoterapi",
    desc: "Skreddersydde behandlingsplaner med moderne cellegift for optimal livskvalitet.",
  },
  {
    icon: Microscope,
    title: "Ultralydveiledet celleprøvetaking",
    desc: "Presis cytologisk diagnostikk ved bruk av avansert bildeveiledning for trygg prøvetaking.",
  },
  {
    icon: Monitor,
    title: "Digital røntgen + telemedisin",
    desc: "Høyoppløselige bilder med mulighet for rask konsultasjon med eksterne radiologispesialister.",
  },
];

export default function OnkologiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white mb-6 leading-tight">
            Kreftdiagnostikk og behandling for hund og katt
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto font-sans">
            Vi tilbyr komplett onkologisk utredning og behandling — inkludert
            tumourstaging, kirurgi og kjemoterapi. Marianne Mandelin er
            spesialist med mastergrad i onkologi fra Universitetet i København.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+4764950500"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Ring oss nå
            </a>
            <Link
              href="/for-veterinaerer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-all"
            >
              Send henvisning
            </Link>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Spesialist", href: "/spesialist/onkologi" },
          { label: "Onkologi" },
        ]}
      />

      {/* Services grid */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase mb-2 block font-sans">
            Klinisk ekspertise
          </span>
          <h2>Våre onkologiske tjenester</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[var(--color-sand)] dark:bg-[var(--color-surface)] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[var(--color-surface)] dark:bg-[var(--color-bg)] rounded-full flex items-center justify-center mb-5 mx-auto shadow-sm">
                <Icon className="h-7 w-7 text-[var(--color-primary)]" aria-hidden="true" />
              </div>
              <h3 className="text-lg mb-3 font-sans font-semibold">{title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {services.slice(3).map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[var(--color-sand)] dark:bg-[var(--color-surface)] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[var(--color-surface)] dark:bg-[var(--color-bg)] rounded-full flex items-center justify-center mb-5 mx-auto shadow-sm">
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

      {/* Marianne profile */}
      <section className="py-20 sm:py-28 bg-[var(--color-surface)] dark:bg-[var(--color-bg)] px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-[var(--color-sand)]">
              <Image
                src="/images/staff_marianne_mandelin.jpg"
                alt="Marianne Mandelin — spesialist i onkologi ved Dyreklinikken Son"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="mb-1">Marianne Mandelin</h2>
              <p className="text-[var(--color-accent)] font-semibold text-lg font-sans">
                Spesialist i smådyrsykdommer · Onkolog
              </p>
            </div>
            <ul className="space-y-3">
              {[
                { icon: Award, text: "DipECVIM-CA" },
                {
                  icon: GraduationCap,
                  text: "MS Oncology, Universitetet i København",
                },
                { icon: BookOpen, text: "BSc University of Bristol · 3 år University of Cardiff" },
                { icon: CheckCircle, text: "Spesialist siden 2003" },
              ].map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 text-[var(--color-text)]"
                >
                  <Icon className="h-5 w-5 text-[var(--color-primary)] shrink-0" aria-hidden="true" />
                  <span className="font-sans text-sm">{text}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-[var(--color-accent)] pl-6 py-3">
              <p className="text-xl italic leading-snug">
                &ldquo;En av svært få onkologispesialister tilgjengelig i Akershus/Østfold&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Trust / equipment */}
      <section className="py-12 px-4 sm:px-8 bg-[var(--color-bg)]">
        <div className="max-w-3xl mx-auto bg-[var(--color-sand)]/30 dark:bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg mb-3 font-sans font-semibold text-center">
            Utstyr og kapasitet
          </h3>
          <p className="text-[var(--color-text-muted)] text-sm text-center leading-relaxed">
            Philips/GE ultralyd · digital røntgen · fullverdig laboratorium ·
            telemedisin bildeavlesning med eksterne radiologispesialister
          </p>
        </div>
      </section>

      {/* Price callout */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto bg-[var(--color-sand)]/30 dark:bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-[var(--color-text)] text-lg font-sans">
            Onkologi utredning fra{" "}
            <span className="font-bold text-[var(--color-primary)]">
              2 000 NOK
            </span>{" "}
            · Ultralyd fra{" "}
            <span className="font-bold text-[var(--color-primary)]">
              1 250 NOK
            </span>
          </p>
          <Link
            href="/priser"
            className="inline-flex items-center gap-2 mt-4 text-[var(--color-accent)] font-semibold text-sm hover:gap-3 transition-all"
          >
            Full prisliste <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA bar */}
      <section className="bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] py-16 px-4 sm:px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[var(--color-accent)] rounded-full flex items-center justify-center shadow-lg">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white/70 text-sm uppercase tracking-wider font-sans">
                Haster det?
              </p>
              <a
                href="tel:+4764950500"
                className="text-2xl sm:text-3xl hover:text-[var(--color-accent)] transition-colors"
              >
                Ring 64 95 05 00
              </a>
            </div>
          </div>
          <div className="h-px w-20 bg-white/20 hidden md:block" aria-hidden="true" />
          <Link
            href="/for-veterinaerer"
            className="group flex items-center gap-2 text-lg font-medium"
          >
            For veterinærer (henvisning)
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
