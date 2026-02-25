import React, { useMemo, useState } from "react";
import { Sparkles, Send } from "lucide-react";
import Container from "./layout/Container";
import { content, siteConfig } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const PROXY_ENDPOINT = "/api/hf";
const MODEL_ID = "deepseek-ai/DeepSeek-R1:fastest";

export default function AiResumeQaSection() {
  const { lang } = useLanguage();
  const labels = content[lang] || content.en;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const context = useMemo(() => {
    const exp = labels.experiences
      .map((item) => `${item.company} ? ${item.role} (${item.period})`)
      .join("; ");
    const projects = labels.projects.map((item) => item.title).join(", ");
    return `Name: ${siteConfig.name}. Title: ${labels.title}. Location: ${labels.location}. Experience: ${exp}. Projects: ${projects}.`;
  }, [labels, siteConfig.name]);

  const ask = async (text) => {
    if (!text.trim()) return;
    setStatus("loading");
    setAnswer("");
    setErrorMessage("");

    const prompt = `You are a hiring-focused assistant. Answer briefly in ${lang === "he" ? "Hebrew" : "English"} using the portfolio context only.\nContext: ${context}\nQuestion: ${text}\nAnswer:`;

    try {
      const res = await fetch(PROXY_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: MODEL_ID,
          messages: [{ role: "user", content: prompt }],
          max_tokens: 200,
          temperature: 0.4,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        const message = data?.error || "HF request failed";
        throw new Error(message);
      }
      const output = data?.choices?.[0]?.message?.content || "";
      const cleaned = output.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
      setAnswer(cleaned || output.trim());
      setStatus("success");
    } catch (error) {
      setErrorMessage(error?.message || "");
      setStatus("error");
    }
  };

  return (
    <section className="border-t border-border py-24">
      <Container>
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{labels.ai.label}</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-3">{labels.ai.title}</h2>
          <p className="text-base text-muted-foreground mt-4 max-w-2xl">
            {labels.ai.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap gap-3">
              {labels.ai.suggestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setQuestion(item);
                    ask(item);
                  }}
                  className="rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {labels.ai.fields.question}
              </label>
              <textarea
                rows="3"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder={labels.ai.placeholders.question}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>

            <button
              type="button"
              onClick={() => ask(question)}
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 font-mono text-sm font-medium text-background hover:opacity-80 transition-opacity"
            >
              {status === "loading" ? labels.ai.actions.thinking : labels.ai.actions.ask}
              <Send className="h-3.5 w-3.5" />
            </button>

            {status === "error" && (
              <p className="text-sm text-muted-foreground">
                {labels.ai.feedback.error}
                {errorMessage ? ` (${errorMessage})` : ""}
              </p>
            )}
          </div>

          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {labels.ai.answerLabel}
            </p>
            <div className="rounded-md border border-border bg-background px-4 py-4 text-sm text-foreground min-h-[160px] whitespace-pre-wrap">
              {answer || labels.ai.emptyState}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
