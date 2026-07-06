// Central place for the business's contact + location details.
// Update these with the real values — they surface across the landing page.
export const site = {
  name: "Little Grass Shack",
  email: "aloha@littlegrassshack.pt",
  phone: "+351 000 000 000",
  phoneHref: "tel:+351000000000",
  // Google Maps link + embed for Ribamar, Ericeira.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ribamar+Ericeira+Portugal",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Ribamar+Ericeira+Portugal&output=embed",
  social: {
    instagram: "https://instagram.com/littlegrassshack",
    facebook: "https://facebook.com/littlegrassshack",
  },
} as const;
