import React, { useState } from "react";
import { X, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { siteConfig, content } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const EMAILJS_SERVICE_ID = "service_8htaosb";
const EMAILJS_TEMPLATE_ID = "template_wvw7t4k";
const EMAILJS_PUBLIC_KEY = "E_Pko4Wfj6hbbWKIW";

export default function ResumeRequestModal({ open, onClose }) {
  const { lang } = useLanguage();
  const labels = content[lang] || content.en;
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    linkedin: "",
    reason: "",
    website: "",
  });
  const [status, setStatus] = useState("idle");

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.website) {
      onClose();
      return;
    }

    if (status === "sending") return;
    setStatus("sending");

    const payload = {
      name: form.name,
      email: form.email,
      message: "-",
      recruiter_mode: "Resume Request",
      company: form.company,
      role: form.role,
      timeline: "-",
      linkedin: form.linkedin,
      reason: form.reason,
      source: window.location.href,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", company: "", role: "", linkedin: "", reason: "", website: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-lg border border-border bg-card p-6 sm:p-8 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {labels.resumeRequest.label}
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-2">
              {labels.resumeRequest.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-3">
              {labels.resumeRequest.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-border p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            aria-label={labels.resumeRequest.close}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {labels.resumeRequest.fields.name}
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                placeholder={labels.resumeRequest.placeholders.name}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {labels.resumeRequest.fields.email}
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                placeholder={labels.resumeRequest.placeholders.email}
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {labels.resumeRequest.fields.company}
              </label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                placeholder={labels.resumeRequest.placeholders.company}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {labels.resumeRequest.fields.role}
              </label>
              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                placeholder={labels.resumeRequest.placeholders.role}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {labels.resumeRequest.fields.linkedin}
            </label>
            <input
              name="linkedin"
              value={form.linkedin}
              onChange={handleChange}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              placeholder={labels.resumeRequest.placeholders.linkedin}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {labels.resumeRequest.fields.reason}
            </label>
            <textarea
              name="reason"
              rows="3"
              value={form.reason}
              onChange={handleChange}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              placeholder={labels.resumeRequest.placeholders.reason}
              required
            />
          </div>

          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 font-mono text-sm font-medium text-background hover:opacity-80 transition-opacity"
            >
              {status === "sending" ? labels.resumeRequest.actions.sending : labels.resumeRequest.actions.submit}
              <Send className="h-3.5 w-3.5" />
            </button>
            <p className="text-xs text-muted-foreground">
              {labels.resumeRequest.note}
            </p>
          </div>

          {status === "success" && (
            <p className="text-sm text-foreground">{labels.resumeRequest.feedback.success}</p>
          )}
          {status === "error" && (
            <p className="text-sm text-muted-foreground">{labels.resumeRequest.feedback.error}</p>
          )}
        </form>
      </div>
    </div>
  );
}
