export const locales = ["en", "pt", "fr", "de", "nl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDetails: Record<Locale, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇬🇧" },
  pt: { label: "Português", flag: "🇵🇹" },
  fr: { label: "Français", flag: "🇫🇷" },
  de: { label: "Deutsch", flag: "🇩🇪" },
  nl: { label: "Nederlands", flag: "🇳🇱" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
