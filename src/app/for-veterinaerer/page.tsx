import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  Phone,
  Mail,
  ArrowRight,
  Clock,
  Microscope,
  HeartPulse,
  Stethoscope,
  Scissors,
  ScanSearch,
  Leaf,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For veterinærer — Henvisningsportal",
  description:
    "Henvisningsklinikk for spesialisttjenester. Vi tar imot henvisninger innen onkologi, kardiologi, indremedisin og bløtdelskirurgi. Svar innen 24 timer.",
};

const specialistAreas = [
  {
    icon: Microscope,
    title: "Onkologi",
    desc: "Tumourstaging, prognosevurdering, onkologisk kirurgi med vide marginer, kjemoterapi.",
  },
  {
    icon: HeartPulse,
    title: "Kardiologi",
    desc: "Ekkokardiografi, EKG, blodtrykk, arytmimonitorering, hjertesviktop­pfølging.",
  },
  {
    icon: Stethoscope,
    title: "Indremedisin",
    desc: "Gastroenterologi, endokrinologi, hepatologi, nefrologi. Metodisk tilnærming med avansert lab og ultralydveiledet prøvetaking.",
  },
  {
    icon: Scissors,
    title: "Bløtdelskirurgi",
    desc: "Abdominalkirurgi (fremmedlegemer, pyometra, cystotomi), onkologisk kirurgi. Vektlegging av preoperativ planlegging.",
  },
  {
    icon: ScanSearch,
    title: "Bildediagnostikk",
    desc: "Abdominal/torakal ultralyd, digital røntgen. Telemedisin bildeavlesning ved eksterne radiologispesialister.",
  },
  {
    icon: Leaf,
    title: "Dermatologi",
    desc: "Kroniske og tilbakevendende hud- og ørelidelser hos hund og katt.",
  },
];

export default function ForVeterinaererPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white mb-6 leading-tight">
            Henvisningsklinikk for spesialisttjenester
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto font-sans">
            Vi tar imot henvisninger innen onkologi, kardiologi, indremedisin og
            bløtdelskirurgi. Kontakt Marianne Mandelin direkte.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:post@sondk.no?subject=Henvisning"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Send henvisning
            </a>
            <div className="flex items-center gap-2 text-white">
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span className="text-lg font-medium font-sans">64 95 05 00</span>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "For veterinærer" }]} />

      {/* Specialist areas */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase mb-2 block font-sans">
            Fagområder
          </span>
          <h2>Våre spesialisttjenester</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialistAreas.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-[var(--color-surface)] dark:bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[var(--color-sand)] dark:bg-[var(--color-bg)] rounded-xl flex items-center justify-center mb-5">
                <Icon className="h-6 w-6 text-[var(--color-primary)]" aria-hidden="true" />
              </div>
              <h3 className="text-xl mb-3 font-sans font-semibold">{title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Marianne contact card */}
      <section className="py-20 sm:py-24 bg-[var(--color-sand)] dark:bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase mb-3 block font-sans">
                Direkte kontakt
              </span>
              <h2 className="mb-3">Personlig oppfølging av dine pasienter</h2>
              <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
                Vi etterstreber et tett samarbeid med henvisende veterinær for å
                sikre kontinuitet i behandlingen.
              </p>
            </div>

            <div className="bg-[var(--color-surface)]/60 dark:bg-[var(--color-bg)] backdrop-blur-sm p-6 rounded-2xl border border-[var(--color-border)]">
              <h3 className="text-xl font-sans font-semibold mb-0.5">
                Marianne Mandelin
              </h3>
              <p className="text-[var(--color-accent)] font-medium text-sm mb-4 font-sans">
                Spesialist i smådyrsykdommer
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:post@sondk.no"
                  className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-sans">post@sondk.no</span>
                </a>
                <a
                  href="tel:+4764950500"
                  className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-sans font-medium">64 95 05 00</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[var(--color-primary)] dark:text-[var(--color-primary-light)]">
              <Clock className="h-5 w-5 shrink-0" aria-hidden="true" />
              <p className="text-sm font-medium italic font-sans">
                Vi garanterer svar på din henvisning innen 24 timer.
              </p>
            </div>
          </div>

          <div className="relative group hidden lg:block">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/staff_marianne_mandelin.jpg"
                alt="Marianne Mandelin — spesialist i smådyrsykdommer"
                width={600}
                height={750}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-focus-within:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[var(--color-accent)] text-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="italic text-sm leading-snug">
                &ldquo;Vårt mål er å være din trygge partner i kompliserte kasus.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[var(--color-bg)] dark:bg-[var(--color-surface)] border-2 border-dashed border-[var(--color-border)] rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 dark:bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-semibold font-sans">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Faglig påfyll
            </div>
            <h2 className="max-w-2xl mx-auto">
              Kurs og kompetanseutvikling
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-xl mx-auto font-sans">
              Dyreklinikken Son arrangerer fagkvelder for veterinærer. Neste
              arrangement publiseres her.
            </p>
            <a
              href="mailto:post@sondk.no?subject=Påmelding fremtidige kurs"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md group"
            >
              Meld meg på fremtidige kurs
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
