import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MinimalShell from "@/components/minimal-shell";
import { getAllSlideDecks } from "@/lib/slides";

export const metadata: Metadata = {
  title: "Slides",
  description: "Presentations and talks by Jnanesh.",
  alternates: { canonical: "/slides" },
};

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default function SlidesPage() {
  const decks = getAllSlideDecks();

  return (
    <MinimalShell>
      <div className="mx-auto max-w-3xl">
        <header className="border-b border-zinc-300 pb-7 dark:border-zinc-700">
          <Link
            href="/"
            className="inline-flex border-b border-zinc-400 pb-0.5 text-sm text-zinc-600 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-600 dark:text-zinc-400 dark:hover:border-zinc-100 dark:hover:text-zinc-50"
          >
            ← Portfolio
          </Link>
          <div className="mt-9 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">
                Talks / decks
              </p>
              <h1 className="font-pixelify mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Slides
              </h1>
            </div>
            <p className="font-mono text-xs text-zinc-500">
              {String(decks.length).padStart(2, "0")} published
            </p>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Presentations about software, systems, and the work behind useful
            tools.
          </p>
        </header>

        <section aria-labelledby="slide-decks" className="py-4">
          <h2 id="slide-decks" className="sr-only">
            Published slide decks
          </h2>
          {decks.length === 0 ? (
            <p className="py-10 leading-7 text-zinc-600 dark:text-zinc-400">
              No decks are published yet.
            </p>
          ) : (
            decks.map((deck, index) => (
              <article
                key={deck.id}
                className="group grid grid-cols-[2.5rem_1fr] border-b border-zinc-300 py-8 dark:border-zinc-700 md:grid-cols-[3.5rem_1fr_auto]"
              >
                <span className="font-mono text-xs text-zinc-400 transition-colors group-hover:text-orange-600 dark:text-zinc-600 dark:group-hover:text-orange-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <Link
                    href={`/slides/${deck.id}`}
                    className="inline-flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100"
                  >
                    <h3 className="text-xl font-semibold leading-7">
                      {deck.title}
                    </h3>
                    <ArrowUpRight
                      className="size-4 translate-y-px text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                      aria-hidden="true"
                    />
                  </Link>
                  <p className="mt-2 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
                    {deck.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-zinc-500">
                    {deck.date ? (
                      <time dateTime={deck.date}>
                        {dateFormatter.format(new Date(`${deck.date}T00:00:00`))}
                      </time>
                    ) : null}
                    {deck.date ? <span aria-hidden="true">·</span> : null}
                    <span>{deck.slideCount} slides</span>
                    {deck.tags.length > 0 ? (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{deck.tags.join(" / ")}</span>
                      </>
                    ) : null}
                  </div>
                </div>
                <span className="mt-4 hidden self-start border border-zinc-300 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500 transition-colors group-hover:border-orange-300 group-hover:text-orange-700 dark:border-zinc-700 dark:group-hover:border-orange-800 dark:group-hover:text-orange-300 md:block">
                  Open deck
                </span>
              </article>
            ))
          )}
        </section>
      </div>
    </MinimalShell>
  );
}
