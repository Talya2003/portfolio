import React, { useEffect, useMemo, useRef, useState } from "react";
import { Sparkles, Send, Bot, User, Copy, Check } from "lucide-react";
import Container from "./layout/Container";
import { content, siteConfig } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const PROXY_ENDPOINT = "/api/hf";
const MODEL_ID = "deepseek-ai/DeepSeek-R1:fastest";

export default function AiResumeQaSection() {
  const { lang } = useLanguage();
  const labels = content[lang] || content.en;
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const chatScrollRef = useRef(null);
  const typingTimerRef = useRef(null);
  const [typingId, setTypingId] = useState(null);
  const [typingPos, setTypingPos] = useState(0);
  const [copiedId, setCopiedId] = useState(null);

  const context = useMemo(() => {
    const exp = labels.experiences
      .map((item) => `${item.company} — ${item.role} (${item.period})`)
      .join("; ");
    const projects = labels.projects.map((item) => item.title).join(", ");
    return `Name: ${siteConfig.name}. Title: ${labels.title}. Location: ${labels.location}. Experience: ${exp}. Projects: ${projects}.`;
  }, [labels, siteConfig.name]);

  const ask = async (text) => {
    if (!text.trim()) return;
    setStatus("loading");
    setErrorMessage("");
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content: text },
    ]);
    setQuestion("");

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
      const finalAnswer = cleaned || output.trim();
      const assistantId = crypto.randomUUID();
      setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: finalAnswer }]);
      setTypingId(assistantId);
      setTypingPos(0);
      setStatus("success");
    } catch (error) {
      setErrorMessage(error?.message || "");
      setStatus("error");
    }
  };

  const clearChat = () => {
    setMessages([]);
    setTypingId(null);
    setTypingPos(0);
    setStatus("idle");
    setErrorMessage("");
  };

  const handleCopy = async (message) => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopiedId(message.id);
      setTimeout(() => setCopiedId(null), 1200);
    } catch (error) {
      setCopiedId(null);
    }
  };

  useEffect(() => {
    if (!open) return;
    const container = chatScrollRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    if (!typingId) return;
    const message = messages.find((msg) => msg.id === typingId);
    if (!message) return;

    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
    }

    typingTimerRef.current = setInterval(() => {
      setTypingPos((prev) => {
        const next = prev + 2;
        if (next >= message.content.length) {
          clearInterval(typingTimerRef.current);
          typingTimerRef.current = null;
          setTypingId(null);
          return message.content.length;
        }
        return next;
      });

      const container = chatScrollRef.current;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 20);

    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
      }
    };
  }, [typingId, messages]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`fixed bottom-6 z-[70] inline-flex items-center gap-2 rounded-full border border-border bg-foreground px-4 py-3 text-xs font-mono uppercase tracking-widest text-background shadow-lg hover:opacity-90 transition-opacity ${
          lang === "he" ? "left-6" : "right-6"
        }`}
        aria-label={labels.ai.title}
      >
        <Bot className="h-4 w-4" />
        {labels.ai.label}
      </button>

      {open && (
        <div
          className={`fixed bottom-24 z-[70] w-[90vw] max-w-md rounded-lg border border-border bg-card shadow-2xl ${
            lang === "he" ? "left-6" : "right-6"
          }`}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <Bot className="h-3.5 w-3.5" />
              <span>{labels.ai.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={clearChat}
                className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                {labels.ai.actions.clear}
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                {lang === "he" ? "סגור" : "Close"}
              </button>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="rounded-md border border-border bg-background p-4 text-sm text-foreground min-h-[220px] max-h-[320px] overflow-y-auto space-y-4">
              {messages.length === 0 && (
                <p className="text-muted-foreground">{labels.ai.emptyState}</p>
              )}
              {messages.map((message) => {
                const isTyping = typingId === message.id && message.role === "assistant";
                const text = isTyping ? message.content.slice(0, typingPos) : message.content;
                return (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <span className="mt-1 rounded-full border border-border p-1 text-muted-foreground">
                      <Bot className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg border border-border px-3 py-2 text-sm whitespace-pre-wrap ${
                      message.role === "user"
                        ? "bg-foreground text-background"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span>{text}</span>
                      {message.role === "assistant" && (
                        <button
                          type="button"
                          onClick={() => handleCopy(message)}
                          className="shrink-0 rounded-md border border-border p-1 text-muted-foreground hover:bg-background hover:text-foreground transition-colors"
                          aria-label={labels.ai.actions.copy}
                        >
                          {copiedId === message.id ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                  {message.role === "user" && (
                    <span className="mt-1 rounded-full border border-border p-1 text-muted-foreground">
                      <User className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              );
              })}
              {status === "loading" && (
                <div className="flex items-start gap-3 justify-start">
                  <span className="mt-1 rounded-full border border-border p-1 text-muted-foreground">
                    <Bot className="h-3.5 w-3.5" />
                  </span>
                  <div className="max-w-[80%] rounded-lg border border-border px-3 py-2 text-sm bg-secondary text-foreground">
                    <span className="typing-dots" aria-label="Typing">
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {labels.ai.fields.question}
              </label>
              <textarea
                rows="2"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    ask(question);
                  }
                }}
                placeholder={labels.ai.placeholders.question}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>

            <button
              type="button"
              onClick={() => ask(question)}
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 font-mono text-xs uppercase tracking-widest text-background hover:opacity-80 transition-opacity"
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
        </div>
      )}

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
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    ask(question);
                  }
                }}
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
              <button
                type="button"
                onClick={clearChat}
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                {labels.ai.actions.clear}
              </button>

            {status === "error" && (
              <p className="text-sm text-muted-foreground">
                {labels.ai.feedback.error}
                {errorMessage ? ` (${errorMessage})` : ""}
              </p>
            )}
          </div>

          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <Bot className="h-3.5 w-3.5" />
              <span>{labels.ai.answerLabel}</span>
            </div>
            <div
              ref={chatScrollRef}
              className="rounded-md border border-border bg-background p-4 text-sm text-foreground min-h-[260px] max-h-[360px] overflow-y-auto space-y-4"
            >
              {messages.length === 0 && (
                <p className="text-muted-foreground">{labels.ai.emptyState}</p>
              )}
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex items-start gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <span className="mt-1 rounded-full border border-border p-1 text-muted-foreground">
                      <Bot className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg border border-border px-3 py-2 text-sm whitespace-pre-wrap ${
                      message.role === "user"
                        ? "bg-foreground text-background"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === "user" && (
                    <span className="mt-1 rounded-full border border-border p-1 text-muted-foreground">
                      <User className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              ))}
              {status === "loading" && (
                <div className="flex items-start gap-3 justify-start">
                  <span className="mt-1 rounded-full border border-border p-1 text-muted-foreground">
                    <Bot className="h-3.5 w-3.5" />
                  </span>
                  <div className="max-w-[80%] rounded-lg border border-border px-3 py-2 text-sm bg-secondary text-foreground">
                    <span className="typing-dots" aria-label="Typing">
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
