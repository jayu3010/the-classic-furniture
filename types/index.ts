export type CategorySlug =
  | "sofas"
  | "beds"
  | "dining-tables"
  | "wardrobes"
  | "tv-units"
  | "chairs"
  | "office-furniture"
  | "custom-furniture";

export interface Category {
  id: string;
  slug: CategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  shortDescription: string;
  description: string;
  images: string[];
  material: string;
  dimensions: string;
  colours: string[];
  finish: string;
  customizable: boolean;
  featured: boolean;
  enquireForPrice?: boolean;
  priceLabel?: string;
  seoTitle: string;
  seoDescription: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "living-room"
    | "bedroom"
    | "dining"
    | "office"
    | "custom-projects"
    | "showroom"
    | "manufacturing";
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  furnitureType: string;
}

export interface NavLink {
  label: string;
  href: string;
}
