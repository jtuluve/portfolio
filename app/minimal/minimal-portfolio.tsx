"use client";

import { experience, projects, works } from "@/constants/data";
import Lenis from "lenis";
import {
  ChevronDown,
  Code,
  Moon,
  SquareArrowOutUpRight,
  Sun,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const coreSkills = ["Python", "JavaScript", "TypeScript", "Next.js", "MongoDB"];
const initialProjectCount = 3;
const initialWorkCount = 3;
const initialAchievementCount = 4;
const themeStorageKey = "minimal-theme";

const minimalProjectDescriptions: Record<string, string> = {
  Genasiri: "Tulu script transliteration tool.",
  Musyncc: "Synchronized music listening.",
  EZOrder: "Fast food-ordering web app.",
  "Centralized Hospital Resource Management System":
    "Real-time hospital resource coordination.",
  "Express Documentation Generator (create-express-doc)":
    "Express API docs generator.",
  LiteKV: "Lightweight key-value client.",
  "LiteKV-api": "Persistent key-value storage API.",
  AniPortal: "Anime discovery and list manager.",
  Telebaravu: "Tulu script image bot.",
  "🤖 Robin-San Bot": "Anime updates Telegram bot.",
  "Anywhere Tulu": "Embeddable Tulu transliteration.",
  Emage: "Emoji mosaic image converter.",
  "Two Cars Game": "Dual-control reflex game.",
  "That Snake Again": "Classic Snake remake.",
};

const minimalWorkDescriptions: Record<string, string> = {
  "Aakar 2025": "Tech fest website.",
  ExamsMitra: "Educational services platform.",
  "SVS Temple PU College": "College website.",
  "Marketing Tool": "Campaign and analytics manager.",
  "AJIMS Employee Management Portal": "Internal HR portal.",
  "WhatsApp Integration Tool": "WhatsApp customer updates.",
  "Swiggy Integration Tool": "POS order synchronization.",
  "SVS Temple English Medium School": "School website.",
  "Zomato Integration Tool": "Automated restaurant order sync.",
};

const achievements: Array<{
  result: string;
  title: string;
  context: string;
}> = [
  {
    result: "Second runner-up",
    title: "Ainnovation 2025 Hackathon",
    context:
      "24-hour national-level hackathon conducted by Microsoft, Kyndryl, and NMAMIT, Nitte.",
  },
  {
    result: "Second runner-up",
    title: "Cardano Asia Hackathon 2025",
    context: "36-hour blockchain hackathon.",
  },
  {
    result: "Runner-up",
    title: "HackToFuture 4.0 Hackathon",
    context: "24-hour hackathon organized by SJEC and EG.",
  },
  {
    result: "First place",
    title: "Debugging at Aakar 2025",
    context: "Competitive debugging event.",
  },
  {
    result: "First place",
    title: "Blind Coding at Aakar 2025",
    context: "Programming contest focused on accuracy without visual feedback.",
  },
  {
    result: "Runner-up",
    title: "Code Hunters at Yukti 2025",
    context: "VTU coding competition.",
  },
  {
    result: "Second place",
    title: "Code Resurrect at Varnothsava 2025",
    context: "SMVITM programming event.",
  },
  {
    result: "Second place",
    title: "Web Designing at Saavishkar",
    context: "MIT Kundapura web design competition.",
  },
  {
    result: "First place",
    title: "Error Debugging at Saavishkar",
    context: "Debugging competition.",
  },
  {
    result: "First place",
    title: "Debugging at Aakar 2024",
    context: "AJIET debugging event.",
  },
  {
    result: "Award recipient",
    title: "Siri Chavadi Puraskara 2022",
    context:
      "Recognized by the Karnataka Tulu Sahitya Academy for contributions to the Unicode proposal for the Tulu script.",
  },
  {
    result: "Multiple honors",
    title: "Tulu script tools",
    context: "Recognized for tools that help preserve and promote the Tulu script.",
  },
  {
    result: "Workshop lead",
    title: "Peer mentoring",
    context:
      "Conducted workshops on Git, GitHub, MongoDB, and UiPath with practical industry workflows.",
  },
];

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-4 hover:no-underline"
    >
      {children}
    </a>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex size-6 items-center justify-center rounded text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  );
}

export default function MinimalPortfolio() {
  const [isDark, setIsDark] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllWorks, setShowAllWorks] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [preview, setPreview] = useState<{
    src: string;
    y: number;
  } | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, initialProjectCount);
  const visibleWorks = showAllWorks ? works : works.slice(0, initialWorkCount);
  const visibleAchievements = showAllAchievements
    ? achievements
    : achievements.slice(0, initialAchievementCount);
  const updatePreviewPosition = (src: string, y: number) => {
    setPreview({
      src,
      y,
    });
  };
  const toggleTheme = () => {
    setIsDark((value) => {
      const nextValue = !value;
      window.localStorage.setItem(
        themeStorageKey,
        nextValue ? "dark" : "light",
      );
      return nextValue;
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = window.localStorage.getItem(themeStorageKey);

    if (savedTheme === "dark" || savedTheme === "light") {
      setIsDark(savedTheme === "dark");
      return;
    }

    setIsDark(mediaQuery.matches);

    const syncSystemTheme = (event: MediaQueryListEvent) => {
      if (!window.localStorage.getItem(themeStorageKey)) {
        setIsDark(event.matches);
      }
    };

    mediaQuery.addEventListener("change", syncSystemTheme);
    return () => mediaQuery.removeEventListener("change", syncSystemTheme);
  }, []);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotionQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      lerp: 0.08,
      wheelMultiplier: 0.9,
    });

    return () => lenis.destroy();
  }, []);

  return (
    <main
      className={`minimal-page min-h-screen px-6 py-10 font-sans transition-colors duration-200 md:px-10 ${
        isDark ? "dark bg-zinc-950 text-zinc-50" : "bg-white text-zinc-950"
      }`}
    >
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="fixed right-4 top-4 z-30 inline-flex size-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:focus-visible:outline-zinc-100"
      >
        {isDark ? (
          <Sun className="size-4" aria-hidden="true" />
        ) : (
          <Moon className="size-4" aria-hidden="true" />
        )}
      </button>
      <div ref={contentRef} className="mx-auto max-w-3xl">
        <header className="border-b border-zinc-300 pb-8 dark:border-zinc-700">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
            Portfolio
          </p>
          <h1 className="font-pixelify text-4xl font-semibold tracking-tight md:text-5xl">
            Jnanesh
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Software engineer building full-stack web applications, backend
            services, automation tools, and developer utilities.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <ExternalLink href="/resume.pdf">Resume</ExternalLink>
            <ExternalLink href="https://github.com/jtuluve">GitHub</ExternalLink>
          </div>
        </header>

        
        <section className="border-b border-zinc-300 py-8 dark:border-zinc-700">
          <h2 className="font-pixelify text-2xl font-semibold">Skills</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="rounded border border-zinc-300 px-2.5 py-1 text-sm text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="border-b border-zinc-300 py-8 dark:border-zinc-700">
          <h2 className="font-pixelify text-2xl font-semibold">Experience</h2>
          <div className="mt-5 space-y-3">
            {experience.map((item) => {
              const experienceKey = `${item.role}-${item.company}`;
              const isExpanded = expandedExperience === experienceKey;

              return (
                <details
                  key={experienceKey}
                  open={isExpanded}
                  className="-mx-3 rounded border-b border-zinc-200 px-3 py-3 transition-colors hover:bg-zinc-50 last:border-b-0 dark:border-zinc-800 dark:hover:bg-zinc-900"
                >
                  <summary
                    className="relative flex cursor-pointer list-none flex-col gap-1 pr-4 marker:hidden sm:flex-row sm:items-start sm:justify-between"
                    onClick={(event) => {
                      event.preventDefault();
                      setExpandedExperience((value) =>
                        value === experienceKey ? null : experienceKey,
                      );
                    }}
                  >
                  <ChevronDown
                    aria-hidden="true"
                    className={`pointer-events-none absolute right-0 top-1 size-4 shrink-0 text-zinc-500 transition-transform duration-150 mt-[3px] ${isExpanded ? "rotate-180 text-zinc-700 dark:text-zinc-200" : "text-zinc-500 dark:text-zinc-400"}`}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                      <img
                        src={item.logoSrc}
                        alt=""
                        className="h-[1em] w-[1em] shrink-0 rounded object-cover"
                      />
                      <span>{item.company}</span>
                    </p>
                  </div>
                  <p className="text-sm text-zinc-600 sm:pt-1 dark:text-zinc-400">
                    {item.duration}
                  </p>
                </summary>
                <div className="mt-3">
                  <p className="leading-7 text-zinc-800 dark:text-zinc-200">
                    {item.shortDesc}
                  </p>
                  {item.points.length > 0 ? (
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-800 dark:text-zinc-200">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </details>
              );
            })}
          </div>
        </section>

        <section className="border-b border-zinc-300 py-8 dark:border-zinc-700">
          <h2 className="font-pixelify text-2xl font-semibold">
            Achievements
          </h2>
          <div className="mt-5 space-y-5">
            {visibleAchievements.map((achievement) => (
              <article
                key={`${achievement.result}-${achievement.title}`}
                className="max-w-2xl"
              >
                <h3 className="text-base font-semibold leading-7 text-zinc-950 dark:text-zinc-50">
                  {achievement.result} - {achievement.title}
                </h3>
                <p className="mt-0.5 text-sm font-medium leading-6 text-zinc-500 dark:text-zinc-400">
                  {achievement.context}
                </p>
              </article>
            ))}
          </div>
          {achievements.length > initialAchievementCount ? (
            <button
              type="button"
              onClick={() => setShowAllAchievements((value) => !value)}
              className="mt-6 rounded border border-zinc-300 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              {showAllAchievements ? "View less" : "View more"}
            </button>
          ) : null}
        </section>

        <section className="border-b border-zinc-300 py-8 dark:border-zinc-700">
          <h2 className="font-pixelify text-2xl font-semibold">Projects</h2>
          <div className="mt-5 space-y-7">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                onMouseEnter={(event) =>
                  updatePreviewPosition(project.image, event.clientY)
                }
                onMouseMove={(event) =>
                  updatePreviewPosition(project.image, event.clientY)
                }
                onMouseLeave={() => setPreview(null)}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex shrink-0 items-center gap-2">
                    <IconLink href={project.liveUrl} label="Live">
                      <SquareArrowOutUpRight
                        className="size-3.5"
                        aria-hidden="true"
                      />
                    </IconLink>
                    <IconLink href={project.codeUrl} label="Code">
                      <Code className="size-3.5" aria-hidden="true" />
                    </IconLink>
                  </div>
                </div>
                <p className="mt-0.5 text-sm font-medium leading-6 text-zinc-500 dark:text-zinc-400">
                  {minimalProjectDescriptions[project.title] ??
                    project.description}
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.technologies.join(", ")}
                </p>
              </article>
            ))}
          </div>
          {projects.length > initialProjectCount ? (
            <button
              type="button"
              onClick={() => setShowAllProjects((value) => !value)}
              className="mt-6 rounded border border-zinc-300 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              {showAllProjects ? "View less" : "View more"}
            </button>
          ) : null}
        </section>

        <section className="border-b border-zinc-300 py-8 dark:border-zinc-700">
          <h2 className="font-pixelify text-2xl font-semibold">Works</h2>
          <div className="mt-5 space-y-7">
            {visibleWorks.map((work) => (
              <article
                key={work.title}
                onMouseEnter={(event) =>
                  updatePreviewPosition(work.imageUrl, event.clientY)
                }
                onMouseMove={(event) =>
                  updatePreviewPosition(work.imageUrl, event.clientY)
                }
                onMouseLeave={() => setPreview(null)}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{work.title}</h3>
                  {work.liveUrl ? (
                    <div className="flex shrink-0 items-center gap-2">
                      <IconLink href={work.liveUrl} label="Live">
                        <SquareArrowOutUpRight
                          className="size-3.5"
                          aria-hidden="true"
                        />
                      </IconLink>
                    </div>
                  ) : null}
                </div>
                <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                  {work.company}
                </p>
                <p className="mt-0.5 text-sm font-medium leading-6 text-zinc-500 dark:text-zinc-400">
                  {minimalWorkDescriptions[work.title] ?? work.description}
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {work.tools.join(", ")}
                </p>
              </article>
            ))}
          </div>
          {works.length > initialWorkCount ? (
            <button
              type="button"
              onClick={() => setShowAllWorks((value) => !value)}
              className="mt-6 rounded border border-zinc-300 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              {showAllWorks ? "View less" : "View more"}
            </button>
          ) : null}
        </section>

        <section className="py-8">
          <h2 className="font-pixelify text-2xl font-semibold">Contact</h2>
          <p className="mt-3 leading-7 text-zinc-800 dark:text-zinc-200">
            Open to software engineering, full-stack development, and automation
            work.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <ExternalLink href="mailto:jtuluve@gmail.com">Email</ExternalLink>
            <ExternalLink href="https://github.com/jtuluve">GitHub</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/jtuluve">
              LinkedIn
            </ExternalLink>
          </div>
        </section>
      </div>
      {preview ? (
        <img
          src={preview.src}
          alt=""
          aria-hidden="true"
          className="pointer-events-none fixed z-20 hidden aspect-video w-56 -translate-y-1/2 rounded border border-zinc-200 bg-white object-cover shadow-sm dark:border-zinc-700 dark:bg-zinc-900 xl:block"
          style={{
            right: `calc(50% + ${contentRef.current?.offsetWidth ?? 0}px / 2 + 24px)`,
            top: preview.y,
          }}
        />
      ) : null}
    </main>
  );
}
