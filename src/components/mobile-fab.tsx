import { Phone } from "lucide-react";

export function MobileFAB() {
  return (
    <a
      href="tel:+4764950500"
      className="fixed bottom-5 right-5 z-50 md:hidden w-14 h-14 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95"
      aria-label="Ring Dyreklinikken Son"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
