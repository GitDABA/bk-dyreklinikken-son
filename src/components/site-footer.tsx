import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-sand)] dark:bg-[var(--color-surface)] py-16 px-4 sm:px-8 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" aria-label="Dyreklinikken Son — hjem">
            <Image
              src="/images/logo_horizontal.png"
              alt="Dyreklinikken Son"
              width={180}
              height={43}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-xs">
            Uavhengig veterinærklinikk i Son med spesialistkompetanse innen onkologi, kardiologi og indremedisin.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/p/Dyreklinikken-Son-61575021394774/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[var(--color-surface)] dark:bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all"
              aria-label="Følg oss på Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/dyreklinikkenson/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[var(--color-surface)] dark:bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all"
              aria-label="Følg oss på Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="font-semibold text-[var(--color-primary)] text-sm uppercase tracking-wider">
            Navigasjon
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/tjenester", label: "Tjenester" },
              { href: "/spesialist/onkologi", label: "Spesialist" },
              { href: "/for-veterinaerer", label: "For veterinærer" },
              { href: "/om-oss", label: "Om oss" },
              { href: "/priser", label: "Priser" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold text-[var(--color-primary)] text-sm uppercase tracking-wider">
            Kontakt
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-[var(--color-text-muted)]">
              <MapPin className="h-4 w-4 text-[var(--color-primary)] shrink-0" aria-hidden="true" />
              Slettaveien 2, 1553 Son
            </li>
            <li>
              <a
                href="tel:+4764950500"
                className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Phone className="h-4 w-4 text-[var(--color-primary)] shrink-0" aria-hidden="true" />
                64 95 05 00
              </a>
            </li>
            <li>
              <a
                href="mailto:post@sondk.no"
                className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Mail className="h-4 w-4 text-[var(--color-primary)] shrink-0" aria-hidden="true" />
                post@sondk.no
              </a>
            </li>
          </ul>
        </div>

        {/* Opening hours */}
        <div className="space-y-4">
          <h4 className="font-semibold text-[var(--color-primary)] text-sm uppercase tracking-wider">
            Åpningstider
          </h4>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li className="flex justify-between">
              <span>Man–ons, fre</span>
              <span>08:30–16:00</span>
            </li>
            <li className="flex justify-between">
              <span>Torsdag</span>
              <span>08:30–18:00</span>
            </li>
            <li className="flex justify-between text-[var(--color-text-muted)]/60 italic">
              <span>Lør–søn</span>
              <span>Stengt</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[var(--color-border)]">
        <p className="text-xs text-[var(--color-text-muted)] text-center">
          © {new Date().getFullYear()} Dyreklinikken Son · Slettaveien 2, 1553 Son
        </p>
      </div>
    </footer>
  );
}
