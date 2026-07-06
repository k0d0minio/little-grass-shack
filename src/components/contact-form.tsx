"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { submitContact, type ContactState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations("contact.form");
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full rounded-full bg-coral text-coral-foreground text-base font-bold shadow-lg shadow-coral/25 transition hover:brightness-105 sm:w-auto"
    >
      {pending ? t("sending") : t("submit")}
    </Button>
  );
}

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [state, formAction] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const lastHandled = useRef<ContactState>(initialState);

  useEffect(() => {
    if (state === lastHandled.current) return;
    lastHandled.current = state;
    if (state.status === "success") {
      toast.success(t("success"));
      formRef.current?.reset();
    } else if (state.status === "invalid") {
      toast.error(t("invalid"));
    } else if (state.status === "error") {
      toast.error(t("error"));
    }
  }, [state, t]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      {/* Honeypot: hidden from humans, tempting to bots. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t("name")}</Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            className="bg-white/70"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t("email")}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
            className="bg-white/70"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t("message")}</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("messagePlaceholder")}
          className="resize-none bg-white/70"
        />
      </div>

      <SubmitButton />
    </form>
  );
}
