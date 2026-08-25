/** Central verified Unsplash image URLs (checked HTTP 200). */

const q = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  sofaGreen: q("photo-1555041469-a586c61ea9bc"),
  sofaLiving: q("photo-1493663284031-b7e3aefcae8e"),
  sofaGrey: q("photo-1567538096630-e0c55bd6374c"),
  sofaLounge: q("photo-1567016432779-094069958ea5"),
  bedHotel: q("photo-1631049307264-da0ec9d70304"),
  bedModern: q("photo-1617325247661-675ab4b64ae2"),
  bedSoft: q("photo-1522771739844-6a9f6d5f14af"),
  bedWarm: q("photo-1616594039964-ae9021a400a0"),
  diningWood: q("photo-1604578762246-41134e37f9cc"),
  diningChairs: q("photo-1615066390971-03e4e1c36ddf"),
  diningSet: q("photo-1538688525198-9b88f6f53126"),
  wardrobeCloset: q("photo-1558997519-83ea9252edf8"),
  wardrobeRoom: q("photo-1631679706909-1844bbd07221"),
  bedroomInterior: q("photo-1560448204-e02f11c3d0e2"),
  livingStyled: q("photo-1586023492125-27b2c045efd7"),
  livingWarm: q("photo-1616486338812-3dadae4b4ace"),
  livingModern: q("photo-1618221195710-dd6b41faaea6"),
  livingBright: q("photo-1600210492486-724fe5c67fb0"),
  livingLuxury: q("photo-1600585154340-be6161a56a0c"),
  livingOpen: q("photo-1600607687939-ce8a6c25118c"),
  livingCalm: q("photo-1600566753190-17f0baa2a6c3"),
  livingSoft: q("photo-1600210491892-03d54c0aaf87"),
  livingDetail: q("photo-1600121848594-d8644e57abab"),
  chairAccent: q("photo-1506439773649-6e0eb8cfb237"),
  chairModern: q("photo-1592078615290-033ee584e267"),
  chairPink: q("photo-1580480055273-228ff5388ef8"),
  officeDesk: q("photo-1497366216548-37526070297c"),
  officeHome: q("photo-1484154218962-a197022b5858"),
  kitchenWarm: q("photo-1556912173-46c336c7fd55"),
  interiorShelf: q("photo-1618220179428-22790b461013"),
  workshopTools: q("photo-1452860606245-08befc0ff44b"),
  workshopWood: q("photo-1416879595882-3373a0480b5b"),
  materialsWood: q("photo-1504148455328-c376907d081c"),
  furnitureDetail: q("photo-1556228453-efd6c1ff04f6"),
  apartment: q("photo-1493809842364-78817add7ffb"),
  bedroomWide: q("photo-1595526114035-0d45ed16cfbf"),
  kitchenCraft: q("photo-1556228578-0d85b1a4d571"),
} as const;

export function imgW(
  key: keyof typeof img,
  width: number,
): string {
  return img[key].replace(/w=\d+/, `w=${width}`);
}
