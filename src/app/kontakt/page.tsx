import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt — Finn oss i Son",
  description:
    "Kontakt Dyreklinikken Son. Adresse: Slettaveien 2, 1553 Son. Telefon: 64 95 05 00. E-post: post@sondk.no. Bestill time online.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] pt-32 pb-20 sm:pt-40 sm:pb-24 px-4 sm:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white mb-6 leading-tight">Kontakt oss</h1>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-sans">
            Vi er her for å hjelpe. Ring, send e-post eller bestill time online.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Kontakt" }]} />

      <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="space-y-5">
              <a
                href="tel:+4764950500"
                className="flex items-center gap-4 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors text-lg group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-sand)] dark:bg-[var(--color-surface)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5 text-[var(--color-primary)] group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold font-sans">64 95 05 00</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Telefon</p>
                </div>
              </a>

              <a
                href="mailto:post@sondk.no"
                className="flex items-center gap-4 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-sand)] dark:bg-[var(--color-surface)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5 text-[var(--color-primary)] group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold font-sans">post@sondk.no</p>
                  <p className="text-sm text-[var(--color-text-muted)]">E-post</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[var(--color-text)]">
                <div className="w-12 h-12 rounded-full bg-[var(--color-sand)] dark:bg-[var(--color-surface)] flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="font-semibold font-sans">Slettaveien 2, 1553 Son</p>
                  <p className="text-sm text-[var(--color-text-muted)]">Adresse</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-[var(--color-text)]">
                <div className="w-12 h-12 rounded-full bg-[var(--color-sand)] dark:bg-[var(--color-surface)] flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="font-semibold font-sans mb-1">Åpningstider</p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Man–ons, fre: 08:30–16:00
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Torsdag: 08:30–18:00
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.vettigo.dk/no/booking.php?_klinik=son999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Bestill time online
              <ExternalLink className="h-4 w-4" />
            </a>

            {/* Contact form */}
            <div className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6">
              <h2 className="text-xl mb-4">Send oss en melding</h2>
              <form
                action={`mailto:post@sondk.no`}
                method="POST"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--color-text)] mb-1 font-sans"
                  >
                    Navn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent font-sans"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-[var(--color-text)] mb-1 font-sans"
                  >
                    Telefon eller e-post
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent font-sans"
                  />
                </div>
                <div>
                  <label
                    htmlFor="animal"
                    className="block text-sm font-medium text-[var(--color-text)] mb-1 font-sans"
                  >
                    Dyr og rase
                  </label>
                  <input
                    type="text"
                    id="animal"
                    name="animal"
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent font-sans"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--color-text)] mb-1 font-sans"
                  >
                    Melding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-y font-sans"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-3 rounded-lg font-semibold transition-all font-sans"
                >
                  Send melding
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[var(--color-border)] min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.5!2d10.6867!3d59.5267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSlettaveien+2%2C+1553+Son!5e0!3m2!1snb!2sno!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kart til Dyreklinikken Son, Slettaveien 2, 1553 Son"
            />
            <noscript>
              <p className="p-4 text-sm text-[var(--color-text-muted)]">
                Finn oss: Slettaveien 2, 1553 Son. Åpne i{" "}
                <a href="https://maps.google.com/?q=Slettaveien+2,+1553+Son" className="underline">Google Maps</a>.
              </p>
            </noscript>
          </div>
        </div>
      </section>
    </>
  );
}
