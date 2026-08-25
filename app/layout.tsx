import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd, localBusinessJsonLd } from "@/lib/seo";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Furniture Showroom in Ahmedabad`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "furniture showroom in Ahmedabad",
    "furniture shop in Ahmedabad",
    "furniture manufacturer in Ahmedabad",
    "custom furniture in Ahmedabad",
    "THE CLASSIC FURNITURE",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} | Furniture Showroom in Ahmedabad`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Furniture Showroom in Ahmedabad`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="font-sans flex min-h-full flex-col bg-ivory text-ink">
        <JsonLd data={localBusinessJsonLd()} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
