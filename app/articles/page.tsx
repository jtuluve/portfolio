import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import ArticleList from "./article-list";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles by Jnanesh on software engineering, tools, and building for the web.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const articleList = articles.map(
    ({ slug, title, description, date, tags, coverImage, readingTime }) => ({
      slug,
      title,
      description,
      date,
      tags,
      coverImage,
      readingTime,
    }),
  );

  return (
    <div className="mx-auto max-w-3xl">
      <header className="border-b border-zinc-300 pb-7 dark:border-zinc-700">
        <Link
          href="/"
          className="inline-flex border-b border-zinc-400 pb-0.5 text-sm text-zinc-600 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-600 dark:text-zinc-400 dark:hover:border-zinc-100 dark:hover:text-zinc-50"
        >
          ← Portfolio
        </Link>
        <h1 className="font-pixelify mt-9 text-3xl font-semibold tracking-tight md:text-4xl">
          Articles
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Thoughts on software, systems, and building useful things.
        </p>
      </header>

      <ArticleList articles={articleList} />
    </div>
  );
}
