"use server";

import { cookies } from "next/headers";
import { defaultLocale, isLocale } from "@/i18n/config";

export async function setLocale(locale: string) {
  const store = await cookies();
  const next = isLocale(locale) ? locale : defaultLocale;
  store.set("locale", next, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}

export type ContactState = {
  status: "idle" | "success" | "invalid" | "error";
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot — bots fill hidden fields, humans don't.
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) {
    return { status: "success" };
  }

  if (!name || !EMAIL_RE.test(email) || message.length < 2) {
    return { status: "invalid" };
  }

  try {
    // TODO: wire up to an email provider (e.g. Resend) or a datastore.
    // Kept as a server-side log so the form is functional out of the box.
    console.info("[contact] New enquiry:", { name, email, message });
    return { status: "success" };
  } catch (error) {
    console.error("[contact] Failed to handle enquiry", error);
    return { status: "error" };
  }
}
