import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dyreklinikken-son.netlify.app";
  const now = new Date().toISOString();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/spesialist/onkologi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/for-veterinaerer`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/spesialist/kardiologi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/spesialist/indremedisin`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tjenester`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/om-oss`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/priser`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
