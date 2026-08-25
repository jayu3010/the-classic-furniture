import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { img } from "@/data/images";

const defaultKeywords = [
  "furniture showroom in Ahmedabad",
  "furniture shop in Ahmedabad",
  "furniture manufacturer in Ahmedabad",
  "custom furniture in Ahmedabad",
  "sofa shop in Ahmedabad",
  "wooden furniture in Ahmedabad",
  "dining table showroom in Ahmedabad",
  "THE CLASSIC FURNITURE",
];

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? img.sofaGreen;

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+91${siteConfig.phone}`,
    email: siteConfig.email,
    image: img.sofaGreen,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No.1, 2, 3, Kailash Nagar, Opp. Kedaram Residency, Bachubhai Kuva Road, New Vatva Rd",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.9633,
      longitude: 72.6455,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "22:00",
    },
    priceRange: "₹₹",
    areaServed: {
      "@type": "City",
      name: "Ahmedabad",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productJsonLd(product: {
  name: string;
  description: string;
  images: string[];
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: product.category,
    url: absoluteUrl(`/products/${product.slug}`),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStoreOnly",
      priceCurrency: "INR",
      url: absoluteUrl(`/products/${product.slug}`),
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
