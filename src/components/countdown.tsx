"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: number): TimeLeft | null {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  const seconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

export function Countdown({ openDate }: { openDate: string }) {
  const t = useTranslations("countdown");
  const target = new Date(openDate).getTime();

  // null until mounted to avoid SSR/client hydration mismatch on time values.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(
    undefined,
  );

  useEffect(() => {
    setTimeLeft(getTimeLeft(target));
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (timeLeft === undefined) {
    // Placeholder to reserve layout before the client clock kicks in.
    return <div className="min-h-[8.5rem]" aria-hidden />;
  }

  if (timeLeft === null) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <p className="font-display text-5xl uppercase tracking-wide text-white sm:text-6xl">
          {t("openTitle")}
        </p>
        <p className="mt-3 text-lg text-white/85">{t("openSubtitle")}</p>
      </motion.div>
    );
  }

  const units: { label: string; value: number }[] = [
    { label: t("days"), value: timeLeft.days },
    { label: t("hours"), value: timeLeft.hours },
    { label: t("minutes"), value: timeLeft.minutes },
    { label: t("seconds"), value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-5">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex min-w-[4.75rem] flex-col items-center rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-md sm:min-w-[6.5rem] sm:px-6"
        >
          <span className="font-display text-4xl leading-none text-white tabular-nums sm:text-6xl">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/70 sm:text-xs">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
