import React, { useState } from "react";
import { Send, Building2, UserRound } from "lucide-react";
import Container from "./layout/Container";
import { content, siteConfig } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { lang } = useLanguage();
  const labels = content[lang] || content.en;
  const [isRecruiter, setIsRecruiter] = useState(false);

  return (
    <section id="contact" className="border-t border-border py-24">
      <Container>
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {labels.contact.label}
          </p>
          <h2 className="text-4xl font-bold text-foreground mt-3">
            {labels.contact.title}
          </h2>
          <p className="text-base text-muted-foreground mt-4 max-w-2xl">
            {labels.contact.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-lg border border-border bg-card p-6 sm:p-8 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {labels.contact.fields.name}
                </label>
                <input
                  type="text"
                  placeholder={labels.contact.placeholders.name}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {labels.contact.fields.email}
                </label>
                <input
                  type="email"
                  placeholder={labels.contact.placeholders.email}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {labels.contact.fields.message}
              </label>
              <textarea
                rows="4"
                placeholder={labels.contact.placeholders.message}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>

            <div className="flex items-center justify-between rounded-md border border-border bg-secondary px-4 py-3">
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-foreground font-medium">
                    {labels.contact.recruiter.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {labels.contact.recruiter.subtitle}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsRecruiter((prev) => !prev)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isRecruiter ? "bg-foreground" : "bg-muted"
                }`}
                aria-pressed={isRecruiter}
                aria-label={labels.contact.recruiter.toggle}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-background transition-transform ${
                    isRecruiter ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {isRecruiter && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {labels.contact.recruiter.fields.company}
                  </label>
                  <input
                    type="text"
                    placeholder={labels.contact.recruiter.placeholders.company}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {labels.contact.recruiter.fields.role}
                  </label>
                  <input
                    type="text"
                    placeholder={labels.contact.recruiter.placeholders.role}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {labels.contact.recruiter.fields.timeline}
                  </label>
                  <input
                    type="text"
                    placeholder={labels.contact.recruiter.placeholders.timeline}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 font-mono text-sm font-medium text-background hover:opacity-80 transition-opacity"
              >
                {labels.contact.actions.send}
                <Send className="h-3.5 w-3.5" />
              </button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <UserRound className="h-3.5 w-3.5" />
                {labels.contact.actions.email}
              </a>
              <p className="text-xs text-muted-foreground">
                {labels.contact.note}
              </p>
            </div>
          </form>

          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {labels.contact.cards.availability.label}
              </p>
              <h3 className="text-lg font-semibold text-foreground mt-2">
                {labels.contact.cards.availability.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3">
                {labels.contact.cards.availability.body}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {labels.contact.cards.focus.label}
              </p>
              <h3 className="text-lg font-semibold text-foreground mt-2">
                {labels.contact.cards.focus.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3">
                {labels.contact.cards.focus.body}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {labels.contact.cards.response.label}
              </p>
              <h3 className="text-lg font-semibold text-foreground mt-2">
                {labels.contact.cards.response.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3">
                {labels.contact.cards.response.body}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
