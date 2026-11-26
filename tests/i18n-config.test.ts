import { describe, expect, it } from "vitest";
import { defaultLocale, isLocale, localeDetails, locales } from "../src/i18n/config";

describe("i18n config", () => {
  it("has the default locale in the list of locales", () => {
    expect(locales).toContain(defaultLocale);
  });

  it("has a label and a flag for each locale", () => {
    for (const locale of locales) {
      expect(localeDetails[locale].label).not.toBe("");
      expect(localeDetails[locale].flag).not.toBe("");
    }
  });

  it("accepts only the known locales", () => {
    expect(isLocale("pt")).toBe(true);
    expect(isLocale("es")).toBe(false);
    expect(isLocale("")).toBe(false);
  });
});
