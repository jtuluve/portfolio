"use client";

import { experience, projects, works } from "@/constants/data";
import type { ReactNode } from "react";
import { useRef, useState } from "react";

const coreSkills = ["Python", "JavaScript", "TypeScript", "Next.js", "MongoDB"];
const initialProjectCount = 4;
const initialWorkCount = 4;

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

export default function MinimalPortfolio() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllWorks, setShowAllWorks] = useState(false);
  const [preview, setPreview] = useState<{
    src: string;
    y: number;
  } | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, initialProjectCount);
  const visibleWorks = showAllWorks ? works : works.slice(0, initialWorkCount);
  const updatePreviewPosition = (src: string, y: number) => {
    setPreview({
      src,
      y,
    });
  };

  return (
    <main className="minimal-page min-h-screen bg-white px-6 py-10 font-sans text-zinc-950 md:px-10">
      <div ref={contentRef} className="mx-auto max-w-3xl">
        <header className="border-b border-zinc-300 pb-8">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-600">
            Portfolio
          </p>
          <h1 className="font-pixelify text-4xl font-semibold tracking-tight md:text-5xl">
            Jnanesh
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-700">
            Software engineer building full-stack web applications, backend
            services, automation tools, and developer utilities.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <ExternalLink href="/resume.pdf">Resume</ExternalLink>
            <ExternalLink href="https://github.com/jtuluve">GitHub</ExternalLink>
          </div>
        </header>

        <section className="border-b border-zinc-300 py-8">
          <h2 className="font-pixelify text-2xl font-semibold">Experience</h2>
          <div className="mt-5 space-y-3">
            {experience.map((item) => (
              <details
                key={`${item.role}-${item.company}`}
                className="group border-b border-zinc-200 pb-3 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none flex-col gap-1 marker:hidden sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-zinc-700">
                      <img
                        src={item.logoSrc}
                        alt=""
                        className="h-[1em] w-[1em] shrink-0 rounded object-cover"
                      />
                      <span>{item.company}</span>
                    </p>
                  </div>
                  <p className="text-sm text-zinc-600 sm:pt-1">
                    {item.duration}
                  </p>
                </summary>
                <div className="mt-3">
                  <p className="leading-7 text-zinc-800">{item.shortDesc}</p>
                  {item.points.length > 0 ? (
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-800">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="border-b border-zinc-300 py-8">
          <h2 className="font-pixelify text-2xl font-semibold">Skills</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="rounded border border-zinc-300 px-2.5 py-1 text-sm text-zinc-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="border-b border-zinc-300 py-8">
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
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 leading-7 text-zinc-800">
                  {project.description}
                </p>
                <p className="mt-2 text-sm text-zinc-600">
                  {project.technologies.join(", ")}
                </p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <ExternalLink href={project.liveUrl}>Live</ExternalLink>
                  <ExternalLink href={project.codeUrl}>Code</ExternalLink>
                </div>
              </article>
            ))}
          </div>
          {projects.length > initialProjectCount ? (
            <button
              type="button"
              onClick={() => setShowAllProjects((value) => !value)}
              className="mt-6 rounded border border-zinc-300 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-100"
            >
              {showAllProjects ? "View less" : "View more"}
            </button>
          ) : null}
        </section>

        <section className="border-b border-zinc-300 py-8">
          <h2 className="font-pixelify text-2xl font-semibold">Selected Work</h2>
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
                <h3 className="text-lg font-semibold">{work.title}</h3>
                <p className="mt-1 text-zinc-700">{work.company}</p>
                <p className="mt-2 leading-7 text-zinc-800">
                  {work.description}
                </p>
                <p className="mt-2 text-sm text-zinc-600">
                  {work.tools.join(", ")}
                </p>
                {work.liveUrl ? (
                  <div className="mt-2 text-sm">
                    <ExternalLink href={work.liveUrl}>Live</ExternalLink>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
          {works.length > initialWorkCount ? (
            <button
              type="button"
              onClick={() => setShowAllWorks((value) => !value)}
              className="mt-6 rounded border border-zinc-300 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-100"
            >
              {showAllWorks ? "View less" : "View more"}
            </button>
          ) : null}
        </section>

        <section className="py-8">
          <h2 className="font-pixelify text-2xl font-semibold">Contact</h2>
          <p className="mt-3 leading-7 text-zinc-800">
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
          className="pointer-events-none fixed z-20 hidden aspect-video w-56 -translate-y-1/2 rounded border border-zinc-200 bg-white object-cover shadow-sm xl:block"
          style={{
            right: `calc(50% + ${contentRef.current?.offsetWidth ?? 0}px / 2 + 24px)`,
            top: preview.y,
          }}
        />
      ) : null}
    </main>
  );
}
