import Link from "next/link";
import { Globe, MapPin, Phone, Share2 } from "lucide-react";
import { categories } from "@/data/categories";
import { footerQuickLinks, siteConfig } from "@/data/site-config";
import { getPhoneTelHref } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-walnut/10 bg-espresso text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-2xl tracking-[0.06em]">
            {siteConfig.name}
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-ivory/75">
            Furniture showroom and manufacturer in {siteConfig.city}. Premium
            pieces and custom work crafted with care for homes across Gujarat.
          </p>
          <div className="flex gap-3">
            <a
              href={siteConfig.social.instagram}
              className="rounded-full border border-ivory/20 p-2 hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory/50"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Share2 className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              className="rounded-full border border-ivory/20 p-2 hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory/50"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold tracking-wider uppercase">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm text-ivory/75">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory/40"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold tracking-wider uppercase">
            Furniture
          </h2>
          <ul className="space-y-2 text-sm text-ivory/75">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/furniture/${cat.slug}`}
                  className="hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory/40"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm text-ivory/75">
          <h2 className="mb-4 text-sm font-semibold tracking-wider text-ivory uppercase">
            Contact
          </h2>
          <p className="flex gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>{siteConfig.address.full}</span>
          </p>
          <p>
            <a
              href={getPhoneTelHref()}
              className="inline-flex items-center gap-2 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory/40"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory/40"
            >
              {siteConfig.email}
            </a>
          </p>
          <p>{siteConfig.openingHours}</p>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-4 py-5 text-center text-xs text-ivory/55 sm:px-6">
        © {year} {siteConfig.name}. All rights reserved. Furniture showroom in{" "}
        {siteConfig.city}, {siteConfig.state}.
      </div>
    </footer>
  );
}
