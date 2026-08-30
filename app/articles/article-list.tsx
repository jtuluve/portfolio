"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Article } from "@/lib/articles";

type ArticleListItem = Omit<Article, "content">;

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default function ArticleList({
  articles,
}: {
  articles: ArticleListItem[];
}) {
  const listRef = useRef<HTMLElement>(null);
  const [preview, setPreview] = useState<{
    src: string;
    y: number;
  } | null>(null);

  const updatePreviewPosition = (src: string, y: number) => {
    setPreview({ src, y });
  };

  return (
    <>
      <section
        ref={listRef}
        aria-labelledby="latest-articles"
        className="py-4"
      >
        <h2 id="latest-articles" className="sr-only">
          Latest articles
        </h2>
        {articles.map((article) => (
          <article
            key={article.slug}
            className="border-b border-zinc-300 py-8 dark:border-zinc-700"
            onMouseEnter={(event) => {
              if (article.coverImage) {
                updatePreviewPosition(article.coverImage, event.clientY);
              }
            }}
            onMouseMove={(event) => {
              if (article.coverImage) {
                updatePreviewPosition(article.coverImage, event.clientY);
              }
            }}
            onMouseLeave={() => setPreview(null)}
          >
            <Link
              href={`/articles/${article.slug}`}
              className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100"
            >
              <h3 className="text-xl font-semibold leading-7">
                {article.title}
              </h3>
            </Link>
            <p className="mt-2 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
              {article.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-medium text-zinc-500 dark:text-zinc-500">
              <time dateTime={article.date}>
                {dateFormatter.format(new Date(`${article.date}T00:00:00`))}
              </time>
              <span aria-hidden="true">·</span>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-zinc-200 bg-zinc-100 px-2 py-0.5 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime}</span>
            </div>
          </article>
        ))}
      </section>

      {preview ? (
        <div
          className="pointer-events-none fixed z-20 hidden aspect-video w-56 -translate-y-1/2 overflow-hidden rounded border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900 xl:block"
          style={{
            right: `calc(50% + ${listRef.current?.offsetWidth ?? 0}px / 2 + 24px)`,
            top: preview.y,
          }}
        >
          <Image
            src={preview.src}
            alt=""
            aria-hidden="true"
            fill
            sizes="224px"
            className="object-cover"
          />
        </div>
      ) : null}
    </>
  );
}

