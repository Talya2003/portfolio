import React, { useEffect, useMemo, useState } from "react";
import { Github, Star, GitFork, Clock } from "lucide-react";
import Container from "./layout/Container";
import { content, siteConfig } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const REPO_ENDPOINT = "https://api.github.com/users/Talya2003/repos?per_page=100&sort=updated";

export default function GitHubReposSection() {
  const { lang } = useLanguage();
  const labels = content[lang] || content.en;
  const [status, setStatus] = useState("idle");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let isMounted = true;
    async function loadRepos() {
      try {
        setStatus("loading");
        const res = await fetch(REPO_ENDPOINT);
        if (!res.ok) {
          throw new Error("GitHub request failed");
        }
        const data = await res.json();
        if (!isMounted) return;
        const filtered = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        setRepos(filtered);
        setStatus("success");
      } catch (err) {
        if (isMounted) {
          setStatus("error");
        }
      }
    }
    loadRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  const locale = useMemo(() => (lang === "he" ? "he-IL" : "en-US"), [lang]);
  const formatDate = (value) =>
    new Intl.DateTimeFormat(locale, { year: "numeric", month: "short", day: "numeric" }).format(
      new Date(value)
    );

  return (
    <section className="border-t border-border py-24">
      <Container>
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <Github className="h-3.5 w-3.5" />
            <span>{labels.github.label}</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mt-3">{labels.github.title}</h2>
        </div>

        {status === "loading" && (
          <p className="text-base text-muted-foreground" aria-live="polite">
            {labels.github.loading}
          </p>
        )}

        {status === "error" && (
          <div className="space-y-4">
            <p className="text-base text-muted-foreground">{labels.github.error}</p>
            <a
              href={siteConfig.github}
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {labels.github.cta}
            </a>
          </div>
        )}

        {status === "success" && (
          <div className="space-y-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-lg border border-border bg-card p-6 sm:p-8 transition-all hover:border-muted-foreground/30 hover:bg-secondary/50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground group-hover:underline">
                      {repo.name}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground mt-3 min-h-[3rem]">
                    {repo.description || labels.github.noDescription}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                    {repo.language && (
                      <span className="rounded-full border border-border bg-secondary px-3 py-1">
                        {labels.github.language}: {repo.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {labels.github.stars}: {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" />
                      {labels.github.forks}: {repo.forks_count}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {labels.github.updated}: {formatDate(repo.pushed_at)}
                  </div>
                </a>
              ))}
            </div>
            <a
              href={siteConfig.github}
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {labels.github.cta}
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
