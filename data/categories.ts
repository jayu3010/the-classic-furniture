import type { Category } from "@/types";
import { img } from "@/data/images";

export const categories: Category[] = [
  {
    id: "cat-sofas",
    slug: "sofas",
    name: "Sofas",
    shortDescription: "Comfortable seating crafted for everyday living.",
    description:
      "Explore L-shaped, modular and classic sofas made for Indian homes. Visit our Ahmedabad showroom to feel the fabric, foam and finish before you decide.",
    image: img.sofaGreen,
    imageAlt: "Modern beige sofa in a bright living room",
    seoTitle: "Sofas in Ahmedabad | THE CLASSIC FURNITURE",
    seoDescription:
      "Browse premium sofas at our Ahmedabad furniture showroom. Custom sizes, fabrics and finishes available from our own manufacturing unit.",
  },
  {
    id: "cat-beds",
    slug: "beds",
    name: "Beds",
    shortDescription: "Restful designs with solid construction.",
    description:
      "From storage beds to upholstered headboards, our bedroom collection blends comfort with lasting craftsmanship for homes across Ahmedabad.",
    image: img.bedHotel,
    imageAlt: "Elegant bed with soft bedding",
    seoTitle: "Beds & Bedroom Furniture in Ahmedabad",
    seoDescription:
      "Discover wooden and upholstered beds crafted by THE CLASSIC FURNITURE, a furniture manufacturer and showroom in Ahmedabad, Gujarat.",
  },
  {
    id: "cat-dining",
    slug: "dining-tables",
    name: "Dining Tables",
    shortDescription: "Tables that bring family meals together.",
    description:
      "Solid wood and contemporary dining sets sized for compact flats and spacious homes. Enquire for custom lengths and finishes.",
    image: img.diningWood,
    imageAlt: "Wooden dining table set with chairs",
    seoTitle: "Dining Tables Showroom in Ahmedabad",
    seoDescription:
      "Shop dining tables and chairs at THE CLASSIC FURNITURE, Ahmedabad. Custom dining sets crafted in our manufacturing facility.",
  },
  {
    id: "cat-wardrobes",
    slug: "wardrobes",
    name: "Wardrobes",
    shortDescription: "Smart storage tailored to your room.",
    description:
      "Sliding, hinged and walk-in wardrobe solutions designed around your space, with options for laminate, veneer and soft-close hardware.",
    image: img.wardrobeCloset,
    imageAlt: "Organised wardrobe and closet storage",
    seoTitle: "Custom Wardrobes in Ahmedabad",
    seoDescription:
      "Custom wardrobe furniture in Ahmedabad from THE CLASSIC FURNITURE. Designed, manufactured and installed for your home.",
  },
  {
    id: "cat-tv",
    slug: "tv-units",
    name: "TV Units",
    shortDescription: "Entertainment units with refined detailing.",
    description:
      "TV units and media consoles that organise cables, devices and décor — available in modern and classic profiles.",
    image: img.livingStyled,
    imageAlt: "Contemporary living room with media furniture",
    seoTitle: "TV Units in Ahmedabad | Furniture Showroom",
    seoDescription:
      "Browse TV units and media furniture at our Ahmedabad showroom. Custom sizes available from our manufacturing workshop.",
  },
  {
    id: "cat-chairs",
    slug: "chairs",
    name: "Chairs",
    shortDescription: "Accent and dining seating with presence.",
    description:
      "Dining chairs, lounge chairs and accent pieces selected to complete your living and dining spaces.",
    image: img.chairAccent,
    imageAlt: "Stylish wooden chair with fabric seat",
    seoTitle: "Chairs & Seating Furniture in Ahmedabad",
    seoDescription:
      "Find dining and lounge chairs at THE CLASSIC FURNITURE showroom in Ahmedabad. Custom upholstery available.",
  },
  {
    id: "cat-office",
    slug: "office-furniture",
    name: "Office Furniture",
    shortDescription: "Workspaces that feel considered.",
    description:
      "Desks, workstations and office storage for home offices and commercial spaces across Ahmedabad.",
    image: img.officeDesk,
    imageAlt: "Modern office desk setup",
    seoTitle: "Office Furniture in Ahmedabad",
    seoDescription:
      "Office desks and furniture manufactured and sold by THE CLASSIC FURNITURE in Ahmedabad, Gujarat.",
  },
  {
    id: "cat-custom",
    slug: "custom-furniture",
    name: "Custom Furniture",
    shortDescription: "Made for your space and lifestyle.",
    description:
      "Share your measurements, materials and inspiration — our manufacturing team builds furniture designed around your home.",
    image: img.livingModern,
    imageAlt: "Custom interior furniture in a styled room",
    seoTitle: "Custom Furniture in Ahmedabad",
    seoDescription:
      "Request custom furniture in Ahmedabad from THE CLASSIC FURNITURE. Sofas, wardrobes, beds and more crafted in-house.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
