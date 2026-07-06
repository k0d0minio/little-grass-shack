"use client";

import { useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Check, Globe } from "lucide-react";
import { locales, localeDetails, type Locale } from "@/i18n/config";
import { setLocale } from "@/app/actions";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const activeLocale = useLocale() as Locale;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const active = localeDetails[activeLocale];

  function choose(locale: Locale) {
    setOpen(false);
    if (locale === activeLocale) return;
    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 disabled:opacity-60"
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span aria-hidden>{active.flag}</span>
        <span className="hidden sm:inline">{active.label}</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <button
              type="button"
              aria-label="Close language menu"
              className="fixed inset-0 z-10 cursor-default"
              onClick={() => setOpen(false)}
            />
            <motion.ul
              role="listbox"
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-2xl border border-border bg-popover p-1.5 text-popover-foreground shadow-xl"
            >
              {locales.map((locale) => {
                const details = localeDetails[locale];
                const isActive = locale === activeLocale;
                return (
                  <li key={locale}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onClick={() => choose(locale)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-semibold transition hover:bg-muted",
                        isActive && "text-coral",
                      )}
                    >
                      <span className="text-base" aria-hidden>
                        {details.flag}
                      </span>
                      <span className="flex-1">{details.label}</span>
                      {isActive && <Check className="h-4 w-4" aria-hidden />}
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
