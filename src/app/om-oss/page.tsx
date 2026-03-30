import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Om oss — Team og klinikk",
  description:
    "Dyreklinikken Son er en uavhengig veterinærklinikk i Son med spesialistkompetanse innen onkologi, kardiologi og indremedisin. Møt teamet.",
};

const team = [
  {
    name: "Marianne J. Mandelin",
    title: "Veterinær, Spesialist i smådyrsykdommer",
    qualifications: "DipECVIM-CA · MS CACS (Oncology), Universitetet i København · BSc University of Bristol",
    bio: "Utdannet ved University of Bristol (2000), deretter tre år ved University of Cardiff. Siden 2003 ved Jeløy Dyreklinikk/AniCura Jeløy Dyresykehus — både førstelinje og henvisning. Spesialist i smådyrsykdommer med mastergrad i onkologi fra Universitetet i København. Hovedinteresser: onkologi, indremedisin (gastroenterologi, endokrinologi, laboratoriemedisin), ultralydveiledet diagnostikk.",
    img: "/images/staff_marianne_mandelin.jpg",
  },
  {
    name: "Mai-Gret Jacobsen",
    title: "Veterinær, GPCert(SAM)",
    qualifications: "Cand.med.vet. · GPCert(SAM) · 20+ års erfaring",
    bio: "Utdannet ved Norges Veterinærhøgskole (2005). Lang erfaring innen smådyrsmedisin. Var med på å etablere klinikker i Moss og Son. Spesialkompetanse i kardiologi, ultralyd, dermatologi, kirurgi og tannhelse. En kjent og betrodd veterinær i Son-området. Arbeider mot ytterligere kardiologisertifisering.",
    img: "/images/staff_mai_gret_jacobsen.jpg",
  },
  {
    name: "Martine Boxill",
    title: "Klinikkleder",
    qualifications: "Tidligere veterinærassistent · Daglig drift og logistikk",
    bio: "Tidligere veterinærassistent, nå klinikkleder med ansvar for drift, logistikk og daglig flyt. Første kontaktpunkt på telefon og i resepsjonen. Beskrives som varm, rolig og strukturert — sørger for at både dyr og eiere føler seg ivaretatt fra første stund.",
    img: "/images/staff_martine_boxill.jpg",
  },
  {
    name: "Aurora Johansen",
    title: "Autorisert dyrepleier",
    qualifications: "NMBU 2024 · Laboratoriemedisin · Anestesi",
    bio: "Utdannet ved NMBU (2024), tidligere erfaring fra et stort dyresykehus. Spesiell interesse for laboratoriemedisin og anestesi. Kjent for rolig og trygg håndtering, spesielt av katter. Et eksempel på hvordan faglig kompetanse, omsorg og personlig egnethet går hånd i hånd.",
    img: "/images/staff_aurora_johansen.jpg",
  },
];

const clinicImages = [
  { src: "/images/clinic_photo_1.jpg", alt: "Dyreklinikken Son — moderne behandlingsrom" },
  { src: "/images/clinic_photo_2.jpg", alt: "Dyreklinikken Son — venteområde" },
  { src: "/images/clinic_photo_3.jpg", alt: "Dyreklinikken Son — utstyr og diagnostikk" },
  { src: "/images/recent_img_2269.jpeg", alt: "Dyreklinikken Son — nyoppussede lokaler i Slettaveien 2" },
];

export default function OmOssPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] pt-32 pb-20 sm:pt-40 sm:pb-24 px-4 sm:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white mb-6 leading-tight">Om Dyreklinikken Son</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-sans">
            Uavhengig klinikk — ingen kjede, ingen eier som bestemmer behandlingsvalg.
            Bare veterinærer som er glad i dyr.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Om oss" }]} />

      {/* About */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-3xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p className="text-[var(--color-text)] leading-relaxed font-sans text-base">
            Dyreklinikken Son åpnet mai 2025 og har siden januar 2026 holdt til i nyoppussede
            lokaler i Slettaveien 2, Son. Vi er en uavhengig klinikk — ingen kjede, ingen eier
            som bestemmer behandlingsvalg. Bare veterinærer som er glad i dyr.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed font-sans text-base mt-4">
            Målet vårt er å kombinere tryggheten i et nært og godt lokalt veterinærtilbud med
            et omfattende henvisningstilbud innen fagfelt som onkologi, kardiologi og indremedisin.
            Vi fokuserer på grundig diagnostikk, forebygging og trygg hverdagshjelp. Målrettede
            undersøkelser er nøkkelen til riktig behandling, og gjøres alltid i nært samråd med
            deg som eier.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28 bg-[var(--color-surface)] dark:bg-[var(--color-bg)] px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="mb-4">Vårt team</h2>
            <div className="h-1 w-16 bg-[var(--color-accent)] mx-auto rounded-full" aria-hidden="true" />
          </div>
          <div className="space-y-16">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-[var(--color-sand)] max-w-md mx-auto lg:mx-0">
                    <Image
                      src={member.img}
                      alt={`${member.name} — ${member.title}`}
                      width={500}
                      height={625}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={`space-y-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl">{member.name}</h3>
                  <p className="text-[var(--color-accent)] font-semibold font-sans">
                    {member.title}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] italic font-sans">
                    {member.qualifications}
                  </p>
                  <p className="text-[var(--color-text-muted)] leading-relaxed font-sans">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic gallery */}
      <section className="py-20 sm:py-28 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="mb-4">Klinikken</h2>
            <p className="text-[var(--color-text-muted)] max-w-xl mx-auto font-sans">
              Nyoppussede, moderne lokaler i Son sentrum.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clinicImages.map((img) => (
              <div
                key={img.src}
                className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm bg-[var(--color-sand)]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={700}
                  height={525}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
