import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Countdown } from "@/components/countdown";
import { ContactForm } from "@/components/contact-form";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Reveal } from "@/components/reveal";
import {
  FacebookIcon,
  InstagramIcon,
  MonsteraLeaf,
  PalmLeaf,
  Pineapple,
  SunRays,
  WaveDivider,
} from "@/components/decor";
import { site } from "@/lib/site";

function getOpenDate(): string | null {
  const raw = process.env.OPEN_DATE;
  if (!raw) return null;
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? null : raw;
}

export default async function Home() {
  const t = await getTranslations();
  const openDate = getOpenDate();

  return (
    <main className="flex flex-col">
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-ocean via-coral to-sunset">
        {/* Sun + decorative foliage */}
        <SunRays className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] text-white/15 motion-safe:animate-[spin_60s_linear_infinite]" />
        <PalmLeaf className="pointer-events-none absolute -left-10 top-24 hidden h-40 w-72 -rotate-12 text-palm/40 md:block" />
        <MonsteraLeaf className="pointer-events-none absolute -bottom-8 -left-6 h-56 w-56 rotate-12 text-palm/30" />
        <MonsteraLeaf className="pointer-events-none absolute -bottom-10 right-4 hidden h-52 w-52 -rotate-12 text-palm/25 sm:block" />

        {/* Top bar */}
        <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-script text-xl text-white drop-shadow-sm sm:text-2xl">
            {t("hero.title")}
          </span>
          <LanguageSwitcher />
        </header>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-7 px-6 pb-20 pt-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-5 py-2 text-sm font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              🌺 {t("hero.badge")}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rotate-[-1.5deg] rounded-3xl bg-sand px-8 py-8 shadow-2xl shadow-charcoal/30 ring-1 ring-black/5 sm:px-14 sm:py-10">
              <Image
                src="/logo.jpg"
                alt={t("hero.title")}
                width={520}
                height={520}
                priority
                className="logo-blend h-auto w-64 sm:w-80"
              />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="font-script text-3xl text-white drop-shadow-md sm:text-4xl">
              {t("hero.tagline")}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="max-w-xl text-balance text-base leading-relaxed text-white/90 sm:text-lg">
              {t("hero.subtitle")}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="flex flex-col items-center gap-4">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                <MapPin className="h-4 w-4" aria-hidden />
                {t("hero.location")}
              </span>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-bold text-coral shadow-lg transition hover:bg-white/90"
              >
                {t("hero.cta")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>

        <WaveDivider className="relative z-10 h-12 w-full text-sand sm:h-16" />
      </section>

      {/* ---------- COUNTDOWN (conditional on OPEN_DATE) ---------- */}
      {openDate && (
        <section className="relative overflow-hidden bg-charcoal px-6 py-20 text-white">
          <PalmLeaf className="pointer-events-none absolute -right-8 top-6 h-32 w-60 rotate-6 text-white/5" />
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="font-display text-4xl uppercase tracking-wide text-sunset sm:text-5xl">
                {t("countdown.title")}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-balance text-white/75">
                {t("countdown.subtitle")}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-10">
                <Countdown openDate={openDate} />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------- ABOUT ---------- */}
      <section className="relative overflow-hidden bg-sand px-6 py-24">
        <Pineapple className="pointer-events-none absolute -right-6 top-10 hidden h-52 w-32 rotate-6 text-sunset/25 md:block" />
        <MonsteraLeaf className="pointer-events-none absolute -left-10 bottom-0 h-44 w-44 -rotate-12 text-palm/15" />
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl uppercase tracking-wide text-coral sm:text-5xl">
              {t("about.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-balance text-lg leading-relaxed text-charcoal/80">
              {t("about.body")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- LOCATION ---------- */}
      <section className="bg-sand-deep px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-display text-4xl uppercase tracking-wide text-ocean sm:text-5xl">
              {t("location.title")}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal className="flex">
              <div className="flex w-full flex-col justify-center gap-8 rounded-3xl bg-card p-8 shadow-lg sm:p-10">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {t("location.addressLabel")}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-lg font-semibold text-charcoal">
                      {t("location.address")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                    <Clock className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {t("location.hoursLabel")}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-charcoal">
                      {t("location.hours")}
                    </p>
                  </div>
                </div>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-coral px-6 py-3 font-bold text-coral-foreground shadow-md transition hover:brightness-105"
                >
                  {t("location.directions")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="flex">
              <div className="w-full overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5">
                <iframe
                  title={t("location.title")}
                  src={site.mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full lg:h-full lg:min-h-[24rem]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section
        id="contact"
        className="relative overflow-hidden bg-palm px-6 py-24"
      >
        <PalmLeaf className="pointer-events-none absolute -left-10 -top-6 h-40 w-72 rotate-12 text-white/10" />
        <PalmLeaf className="pointer-events-none absolute -right-10 bottom-0 h-40 w-72 -rotate-12 scale-x-[-1] text-white/10" />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center text-white">
            <Reveal>
              <h2 className="font-display text-4xl uppercase tracking-wide sm:text-5xl">
                {t("contact.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-white/85">
                {t("contact.subtitle")}
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* Contact details */}
            <Reveal className="flex">
              <div className="flex w-full flex-col gap-6 rounded-3xl bg-white/10 p-8 text-white backdrop-blur-sm">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-4 transition hover:text-sunset"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                      {t("contact.phoneLabel")}
                    </span>
                    <span className="text-lg font-semibold">{site.phone}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-4 transition hover:text-sunset"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                      {t("contact.emailLabel")}
                    </span>
                    <span className="text-lg font-semibold">{site.email}</span>
                  </span>
                </a>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                    {t("contact.followLabel")}
                  </span>
                  <div className="mt-3 flex gap-3">
                    <a
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
                    >
                      <InstagramIcon className="h-5 w-5" aria-hidden />
                    </a>
                    <a
                      href={site.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
                    >
                      <FacebookIcon className="h-5 w-5" aria-hidden />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1} className="flex">
              <div className="w-full rounded-3xl bg-card p-8 shadow-xl sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-charcoal px-6 py-12 text-center text-white/80">
        <p className="font-script text-2xl text-white">{t("hero.title")}</p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
          {t("footer.tagline")}
        </p>
        <p className="mt-6 text-sm text-white/50">
          © {new Date().getFullYear()} {site.name}. {t("footer.rights")}
        </p>
        <p className="mt-1 text-sm text-white/40">{t("footer.madeWith")} 🤙</p>
      </footer>
    </main>
  );
}
