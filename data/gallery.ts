import type { GalleryItem } from "@/types";
import { img } from "@/data/images";

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Warm Living Room Setting",
    category: "living-room",
    image: img.livingWarm,
    imageAlt: "Living room with sofa and wooden furniture",
  },
  {
    id: "g2",
    title: "Calm Bedroom Retreat",
    category: "bedroom",
    image: img.bedWarm,
    imageAlt: "Bedroom with wooden bed and soft lighting",
  },
  {
    id: "g3",
    title: "Family Dining Space",
    category: "dining",
    image: img.diningWood,
    imageAlt: "Dining table set in a bright room",
  },
  {
    id: "g4",
    title: "Focused Home Office",
    category: "office",
    image: img.officeDesk,
    imageAlt: "Wooden desk in a home office",
  },
  {
    id: "g5",
    title: "Custom Interior Project",
    category: "custom-projects",
    image: img.livingModern,
    imageAlt: "Custom furnished living interior",
  },
  {
    id: "g6",
    title: "Showroom Floor",
    category: "showroom",
    image: img.sofaGreen,
    imageAlt: "Furniture displayed in a bright showroom style space",
  },
  {
    id: "g7",
    title: "Workshop Craftsmanship",
    category: "manufacturing",
    image: img.workshopTools,
    imageAlt: "Woodworking tools and furniture crafting",
  },
  {
    id: "g8",
    title: "Sofa Detail",
    category: "living-room",
    image: img.sofaLiving,
    imageAlt: "Close view of a modern sofa",
  },
  {
    id: "g9",
    title: "Wardrobe Interior",
    category: "bedroom",
    image: img.wardrobeCloset,
    imageAlt: "Organised wardrobe and closet storage",
  },
  {
    id: "g10",
    title: "Dining Atmosphere",
    category: "dining",
    image: img.diningChairs,
    imageAlt: "Dining chairs around a wooden table",
  },
  {
    id: "g11",
    title: "Material Selection",
    category: "manufacturing",
    image: img.materialsWood,
    imageAlt: "Wood materials for furniture making",
  },
  {
    id: "g12",
    title: "Showroom Seating",
    category: "showroom",
    image: img.sofaLounge,
    imageAlt: "Lounge seating furniture display",
  },
];

export const galleryFilters = [
  { label: "All", value: "all" },
  { label: "Living Room", value: "living-room" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Dining", value: "dining" },
  { label: "Office", value: "office" },
  { label: "Custom Projects", value: "custom-projects" },
  { label: "Showroom", value: "showroom" },
  { label: "Manufacturing", value: "manufacturing" },
] as const;
