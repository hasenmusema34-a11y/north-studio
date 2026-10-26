
"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbgggggv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);

        const message =
          result?.errors?.map((item: { message: string }) => item.message).join(" ") ||
          "Your message could not be sent. Please check your form setup and try again.";

        throw new Error(message);
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <input type="hidden" name="_subject" value="New North Studio inquiry" />

      {/* Hidden spam-trap field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
          Your name *
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Enter your name"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          required
          className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[#20251f] outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
          Email address *
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          maxLength={254}
          required
          className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[#20251f] outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
        />
      </div>

      <div>
        <label htmlFor="contact-company" className="mb-2 block text-sm font-medium">
          Company (optional)
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          placeholder="Your company name"
          maxLength={150}
          autoComplete="organization"
          className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[#20251f] outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
          How can we help? *
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell us a little about your project..."
          rows={5}
          minLength={10}
          maxLength={5000}
          required
          className="w-full resize-y rounded-xl border border-black/15 bg-white px-4 py-3 text-[#20251f] outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
        />
        <p className="mt-2 text-xs text-[#686c65]">
          Please include at least 10 characters.
        </p>
      </div>

      {status === "success" && (
        <p role="status" className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">
          Thank you! Your message was accepted. We&apos;ll be in touch.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-800">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-emerald-800 px-7 py-4 font-semibold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending message..." : "Send message ↗"}
      </button>

      <p className="text-xs leading-5 text-[#686c65]">
        Your details will be used to respond to your inquiry.
      </p>
    </form>
  );
}
