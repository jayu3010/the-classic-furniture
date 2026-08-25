import { siteConfig } from "@/data/site-config";

export function getWhatsAppUrl(message?: string): string {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent(
        `Hello, I would like to enquire about furniture at ${siteConfig.name}.`,
      );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

export function getProductWhatsAppUrl(productName: string): string {
  return getWhatsAppUrl(
    `Hello, I am interested in ${productName}. Please share more details.`,
  );
}

export function getPhoneTelHref(): string {
  return `tel:+91${siteConfig.phone}`;
}
