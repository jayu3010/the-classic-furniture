import type { CategorySlug, Product } from "@/types";
import { img } from "@/data/images";

export const products: Product[] = [
  {
    id: "prod-1",
    slug: "modern-l-shape-sofa",
    name: "Modern L-Shape Sofa",
    category: "sofas",
    shortDescription: "Spacious sectional with deep seating and clean lines.",
    description:
      "A contemporary L-shaped sofa designed for Indian living rooms. Generous foam density, removable covers and a frame built for daily family use. Available in multiple fabric options at our Ahmedabad showroom.",
    images: [img.sofaGreen, img.sofaLiving, img.sofaLounge],
    material: "Hardwood frame with high-density foam and fabric upholstery",
    dimensions: "Customisable — standard starts at 8 ft × 6 ft",
    colours: ["Warm Beige", "Charcoal Grey", "Olive", "Ivory"],
    finish: "Upholstered",
    customizable: true,
    featured: true,
    enquireForPrice: true,
    seoTitle: "Modern L-Shape Sofa | THE CLASSIC FURNITURE Ahmedabad",
    seoDescription:
      "Enquire about our Modern L-Shape Sofa at THE CLASSIC FURNITURE showroom in Ahmedabad. Custom sizes and fabrics available.",
  },
  {
    id: "prod-2",
    slug: "oakland-king-storage-bed",
    name: "Oakland King Storage Bed",
    category: "beds",
    shortDescription: "King bed with hydraulic storage and soft headboard.",
    description:
      "A practical king-size bed with ample under-bed storage and a padded headboard. Ideal for apartments where every inch of storage matters.",
    images: [img.bedHotel, img.bedWarm],
    material: "Engineered wood with fabric / veneer options",
    dimensions: "King — approx. 6 ft × 6.5 ft (custom sizes available)",
    colours: ["Walnut", "Natural Oak", "White"],
    finish: "Matte laminate or veneer",
    customizable: true,
    featured: true,
    enquireForPrice: true,
    seoTitle: "Oakland King Storage Bed Ahmedabad",
    seoDescription:
      "King storage bed with hydraulic lift from THE CLASSIC FURNITURE, Ahmedabad furniture manufacturer and showroom.",
  },
  {
    id: "prod-3",
    slug: "haven-6-seater-dining-table",
    name: "Haven 6-Seater Dining Table",
    category: "dining-tables",
    shortDescription: "Solid dining table for everyday family meals.",
    description:
      "A balanced dining table with a warm wood top and sturdy base. Pair with matching chairs or mix with upholstered seating for a softer look.",
    images: [img.diningWood, img.diningChairs],
    material: "Solid wood / veneer top with reinforced base",
    dimensions: "Approx. 6 ft × 3 ft (extendable options on request)",
    colours: ["Honey Oak", "Espresso", "Natural"],
    finish: "Protective matte PU",
    customizable: true,
    featured: true,
    enquireForPrice: true,
    seoTitle: "Haven 6-Seater Dining Table | Ahmedabad",
    seoDescription:
      "6-seater dining table available at our Ahmedabad furniture showroom. Custom lengths and finishes manufactured in-house.",
  },
  {
    id: "prod-4",
    slug: "aria-sliding-wardrobe",
    name: "Aria Sliding Wardrobe",
    category: "wardrobes",
    shortDescription: "Space-saving sliding wardrobe with organised interiors.",
    description:
      "A sliding wardrobe system planned around your clothing and accessories — hanging, shelves, drawers and optional loft storage.",
    images: [img.wardrobeCloset, img.wardrobeRoom],
    material: "BWP / engineered wood with laminate or veneer",
    dimensions: "Made to room measurements",
    colours: ["White Oak", "Graphite", "Warm Walnut"],
    finish: "Premium laminate",
    customizable: true,
    featured: true,
    enquireForPrice: true,
    seoTitle: "Aria Sliding Wardrobe Custom Ahmedabad",
    seoDescription:
      "Custom sliding wardrobes in Ahmedabad by THE CLASSIC FURNITURE. Designed and manufactured for your bedroom.",
  },
  {
    id: "prod-5",
    slug: "nordic-tv-console",
    name: "Nordic TV Console",
    category: "tv-units",
    shortDescription: "Low-profile media unit with open and closed storage.",
    description:
      "A clean TV console that keeps devices organised without visual clutter. Suitable for living rooms and open-plan homes.",
    images: [img.livingStyled, img.livingWarm],
    material: "Engineered wood with wood finish",
    dimensions: "Approx. 5–7 ft width (custom)",
    colours: ["Light Oak", "Walnut", "White"],
    finish: "Matte",
    customizable: true,
    featured: true,
    enquireForPrice: true,
    seoTitle: "Nordic TV Console | Furniture Shop Ahmedabad",
    seoDescription:
      "Nordic-style TV unit at THE CLASSIC FURNITURE showroom in Ahmedabad. Enquire for custom widths and finishes.",
  },
  {
    id: "prod-6",
    slug: "linen-lounge-chair",
    name: "Linen Lounge Chair",
    category: "chairs",
    shortDescription: "Accent lounge chair with soft upholstery.",
    description:
      "A relaxed lounge chair that works beside a sofa, in a reading corner or as a bedroom accent. Fabric and finish options available.",
    images: [img.chairAccent, img.chairModern],
    material: "Hardwood frame with linen-blend upholstery",
    dimensions: "Approx. 30 in W × 32 in D × 34 in H",
    colours: ["Sand", "Sage", "Charcoal"],
    finish: "Upholstered",
    customizable: true,
    featured: true,
    enquireForPrice: true,
    seoTitle: "Linen Lounge Chair Ahmedabad",
    seoDescription:
      "Accent lounge chairs from THE CLASSIC FURNITURE, Ahmedabad. Visit our showroom or enquire on WhatsApp.",
  },
  {
    id: "prod-7",
    slug: "studio-work-desk",
    name: "Studio Work Desk",
    category: "office-furniture",
    shortDescription: "Clean home-office desk with cable-friendly design.",
    description:
      "A calm work desk for home offices and studios. Pair with shelving or a storage pedestal for a complete setup.",
    images: [img.officeDesk, img.officeHome],
    material: "Engineered wood / solid wood options",
    dimensions: "Approx. 4–5 ft width (custom)",
    colours: ["Natural", "Walnut", "White"],
    finish: "Matte PU",
    customizable: true,
    featured: true,
    enquireForPrice: true,
    seoTitle: "Studio Work Desk | Office Furniture Ahmedabad",
    seoDescription:
      "Home office desks manufactured by THE CLASSIC FURNITURE in Ahmedabad. Custom sizes available.",
  },
  {
    id: "prod-8",
    slug: "bespoke-modular-sofa",
    name: "Bespoke Modular Sofa",
    category: "custom-furniture",
    shortDescription: "Modular seating planned around your floor plan.",
    description:
      "A made-to-measure modular sofa configured for your room layout, seating count and fabric preference. Designed and crafted in our Ahmedabad manufacturing facility.",
    images: [img.livingModern, img.sofaGrey],
    material: "As per selection — foam, fabric, leatherette options",
    dimensions: "Fully custom",
    colours: ["Custom fabric selection"],
    finish: "As specified",
    customizable: true,
    featured: true,
    enquireForPrice: true,
    seoTitle: "Bespoke Modular Sofa Custom Ahmedabad",
    seoDescription:
      "Custom modular sofas in Ahmedabad from THE CLASSIC FURNITURE. Share your requirement and get a quote.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
