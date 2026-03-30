import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileFAB } from "@/components/mobile-fab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dyreklinikken Son — Spesialistklinikk for hund og katt",
    template: "%s | Dyreklinikken Son",
  },
  description:
    "Uavhengig veterinærklinikk i Son med spesialist i onkologi og kardiologi. Avansert diagnostikk og behandling for hund og katt. Ring 64 95 05 00.",
  metadataBase: new URL("https://dyreklinikken-son.netlify.app"),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Dyreklinikken Son",
    images: ["/images/logo_square.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${inter.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "MedicalClinic"],
              name: "Dyreklinikken Son",
              description:
                "Uavhengig veterinærklinikk med spesialist i onkologi og kardiologi.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Slettaveien 2",
                addressLocality: "Son",
                postalCode: "1553",
                addressCountry: "NO",
              },
              telephone: "+47-64-95-05-00",
              email: "post@sondk.no",
              url: "https://dyreklinikkenison.no",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
                  opens: "08:30",
                  closes: "16:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Thursday",
                  opens: "08:30",
                  closes: "18:00",
                },
              ],
              medicalSpecialty: ["Oncology", "Cardiology", "InternalMedicine"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileFAB />
      </body>
    </html>
  );
}
