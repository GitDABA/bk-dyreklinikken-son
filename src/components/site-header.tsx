"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: "/tjenester", label: "Tjenester" },
  { href: "/spesialist/onkologi", label: "Spesialist" },
  { href: "/for-veterinaerer", label: "For veterinærer" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/priser", label: "Priser" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-surface)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <nav
        className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto"
        aria-label="Hovednavigasjon"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Dyreklinikken Son — hjem">
          <Image
            src="/images/logo_horizontal.png"
            alt="Dyreklinikken Son logo"
            width={200}
            height={48}
            className="h-8 sm:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200 text-[15px] font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+4764950500"
            className="hidden sm:inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-5 py-2.5 rounded-lg font-medium transition-all text-sm"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Ring oss
          </a>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden p-2 rounded-md hover:bg-[var(--color-sand)] transition-colors"
              aria-label="Åpne meny"
            >
              <Menu className="h-6 w-6 text-[var(--color-text)]" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[var(--color-surface)]">
              <SheetTitle className="sr-only">Navigasjonsmeny</SheetTitle>
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[var(--color-text)] hover:text-[var(--color-accent)] hover:bg-[var(--color-sand)] px-4 py-3 rounded-lg transition-colors text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/kontakt"
                  onClick={() => setOpen(false)}
                  className="text-[var(--color-text)] hover:text-[var(--color-accent)] hover:bg-[var(--color-sand)] px-4 py-3 rounded-lg transition-colors text-lg font-medium"
                >
                  Kontakt
                </Link>
                <a
                  href="tel:+4764950500"
                  className="mt-4 flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-5 py-3 rounded-lg font-medium transition-all mx-4"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Ring 64 95 05 00
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
