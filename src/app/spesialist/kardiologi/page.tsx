import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  Phone,
  ArrowRight,
  HeartPulse,
  Activity,
  Gauge,
  MonitorSmartphone,
  Award,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kardiologi — Hjerteutredning og ekkokardiografi",
  description:
    "Avansert hjertediagnostikk for hund og katt. Ekkokardiografi, EKG, blodtrykk og arytmimonitorering. Ring 64 95 05 00.",
};

const services = [
  {
    icon: HeartPulse,
    title: "Ekkokardiografi",
    desc: "Komplett ultralydundersøkelse av hjertet med Doppler for vurdering av blodstrøm, klaffefunksjon og hjertemuskulatur.",
  },
  {
    icon: Activity,
    title: "EKG",
    desc: "Elektrokardiogram for å oppdage arytmier, ledningsforstyrrelser og andre elektriske avvik i hjertet.",
  },
  {
    icon: Gauge,
    title: "Blodtrykksmåling",
    desc: "Presis blodtrykksmåling for å vurdere hypertensjon og veilede behandlingsvalg.",
  },
  {
    icon: MonitorSmartphone,
    title: "Arytmimonitorering",
    desc: "Langvarig overvåkning av hjerterytme for å fange opp intermitterende arytmier.",
  },
];

export default function KardiologiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white mb-6 leading-tight">
            Hjerteutredning og ekkokardiografi
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto font-sans">
            Vi tilbyr komplett kardiologisk utredning av hund og katt. Mai-Gret Jacobsen har
            over 20 års erfaring og GPCert(SAM) med fordypning i kardiologi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+4764950500"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Ring oss
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
          { label: "Kardiologi" },
        ]}
      />

      {/* Services */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase mb-2 block font-sans">
            Diagnostikk
          </span>
          <h2>Kardiologiske tjenester</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map(({ icon: Icon, title, desc }) => (
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

      {/* Mai-Gret profile */}
      <section className="py-20 sm:py-28 bg-[var(--color-surface)] dark:bg-[var(--color-bg)] px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-[var(--color-sand)]">
              <Image
                src="/images/staff_mai_gret_jacobsen.jpg"
                alt="Mai-Gret Jacobsen — veterinær med fordypning i kardiologi"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="mb-1">Mai-Gret Jacobsen</h2>
              <p className="text-[var(--color-accent)] font-semibold text-lg font-sans">
                Veterinær · GPCert(SAM) · Kardiologi
              </p>
            </div>
            <ul className="space-y-3">
              {[
                { icon: GraduationCap, text: "Cand.med.vet., Norges Veterinærhøgskole (2005)" },
                { icon: Award, text: "GPCert(SAM) — Generell Sertifikat i Smådyrmedisin" },
                { icon: HeartPulse, text: "Fordypning i kardiologi og ultralyd" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-[var(--color-text)]">
                  <Icon className="h-5 w-5 text-[var(--color-primary)] shrink-0" aria-hidden="true" />
                  <span className="font-sans text-sm">{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--color-text-muted)] leading-relaxed font-sans">
              Over 20 års erfaring i smådyrsmedisin. Kjent og betrodd veterinær i Son-området.
              Spesialkompetanse innen kardiologi, ultralyd, dermatologi, kirurgi og tannhelse.
              Arbeider mot ytterligere kardiologisertifisering.
            </p>
          </div>
        </div>
      </section>

      {/* Price callout */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto bg-[var(--color-sand)]/30 dark:bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-[var(--color-text)] text-lg font-sans">
            Kardiologi utredning fra{" "}
            <span className="font-bold text-[var(--color-primary)]">5 500 NOK</span>
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-4">
            Bekymret for hjertehelsen til dyret ditt?
          </h2>
          <p className="text-white/80 mb-8 font-sans max-w-xl mx-auto">
            Tidlig diagnostikk gir bedre behandlingsmuligheter. Ta kontakt for å
            bestille utredning.
          </p>
          <a
            href="tel:+4764950500"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
          >
            <Phone className="h-5 w-5" />
            Ring 64 95 05 00
          </a>
        </div>
      </section>
    </>
  );
}
