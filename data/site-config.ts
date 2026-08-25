import type { NavLink } from "@/types";

export const siteConfig = {
  name: "THE CLASSIC FURNITURE",
  shortName: "Classic Furniture",
  tagline: "Crafted for the Way You Live",
  description:
    "Premium furniture showroom and manufacturer in Ahmedabad, Gujarat. Custom sofas, beds, dining tables, wardrobes and more — designed and crafted in our own workshop.",
  url: "https://theclassicfurniture.in",
  city: "Ahmedabad",
  state: "Gujarat",
  country: "India",
  address: {
    lines: [
      "Shop No.1, 2, 3, Kailash Nagar",
      "Opp. Kedaram Residency, Bachubhai Kuva Road",
      "New Vatva Rd, Ahmedabad, Gujarat 382440",
    ],
    full: "Shop No.1, 2, 3, Kailash Nagar, Opp. Kedaram Residency, Bachubhai Kuva Road, New Vatva Rd, Ahmedabad, Gujarat 382440",
    pincode: "382440",
  },
  phone: "7801908203",
  phoneDisplay: "+91 78019 08203",
  whatsapp: "917801908203",
  email: "hello@theclassicfurniture.in",
  openingHours: "9 AM – 10 PM, Monday to Sunday",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kailash+Nagar+Bachubhai+Kuva+Road+New+Vatva+Ahmedabad+382440",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Kailash+Nagar,+Bachubhai+Kuva+Road,+New+Vatva+Rd,+Ahmedabad,+Gujarat+382440&output=embed",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Furniture", href: "/furniture" },
  { label: "Custom Furniture", href: "/custom-furniture" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Furniture", href: "/furniture" },
  { label: "Custom Furniture", href: "/custom-furniture" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];
