import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: "/" },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: item.href } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Brødsmuler"
        className="py-3 px-4 sm:px-8 max-w-7xl mx-auto"
      >
        <ol className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
          <li>
            <Link
              href="/"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Hjem
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              {item.href && i < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--color-text)] font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
