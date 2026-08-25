"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const mobileMenu =
    mounted && open
      ? createPortal(
          <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <button
              type="button"
              className="absolute inset-0 bg-ink/45"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <div
              id="mobile-menu"
              className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col bg-ivory shadow-2xl"
            >
              <div className="flex h-16 items-center justify-between border-b border-walnut/10 px-4">
                <span className="font-display text-lg tracking-wide text-walnut">
                  Menu
                </span>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md text-walnut focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-3 text-base text-ink hover:bg-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Visit Showroom
                  </Link>
                </Button>
              </nav>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-300",
          scrolled
            ? "border-walnut/10 bg-ivory shadow-sm"
            : "border-walnut/5 bg-ivory",
        )}
      >
        <div className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex min-w-0 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
          >
            <span className="font-display text-lg tracking-[0.08em] text-walnut sm:text-xl">
              {siteConfig.shortName.toUpperCase()}
            </span>
            <span className="hidden text-[10px] tracking-[0.2em] text-muted uppercase sm:block">
              Ahmedabad Showroom
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40",
                    active
                      ? "font-medium text-walnut"
                      : "text-ink/70 hover:text-walnut",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Visit Showroom</Link>
            </Button>
            <button
              type="button"
              className="relative z-20 inline-flex h-11 w-11 items-center justify-center rounded-md text-walnut focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
