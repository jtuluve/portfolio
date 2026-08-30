import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const markdownComponents: Components = {
  h2: (props) => (
    <h2
      className="font-pixelify mb-4 mt-12 scroll-mt-8 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mb-3 mt-9 text-xl font-semibold" {...props} />
  ),
  p: (props) => (
    <p
      className="my-5 text-[1.05rem] leading-8 text-zinc-700 dark:text-zinc-300 [&>img]:mx-auto [&>img]:block"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="font-medium text-zinc-950 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-950 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-100"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="my-5 list-disc space-y-2 pl-6 text-zinc-700 marker:text-zinc-400 dark:text-zinc-300" {...props} />
  ),
  ol: (props) => (
    <ol className="my-5 list-decimal space-y-2 pl-6 text-zinc-700 marker:text-zinc-500 dark:text-zinc-300" {...props} />
  ),
  li: (props) => <li className="pl-1 leading-7" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-zinc-900 pl-5 italic text-zinc-600 dark:border-zinc-100 dark:text-zinc-400 [&>p]:my-0"
      {...props}
    />
  ),
  hr: (props) => (
    <hr className="my-10 border-zinc-300 dark:border-zinc-700" {...props} />
  ),
  pre: (props) => (
    <pre
      className="my-7 overflow-x-auto rounded border border-zinc-300 bg-zinc-950 p-5 text-sm leading-7 text-zinc-100 dark:border-zinc-700"
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={
        className
          ? `font-mono ${className}`
          : "rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.9em] text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
      }
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-7 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border-b border-zinc-400 px-3 py-2 font-semibold dark:border-zinc-600" {...props} />
  ),
  td: (props) => (
    <td className="border-b border-zinc-200 px-3 py-3 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300" {...props} />
  ),
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl">
      <header className="border-b border-zinc-300 pb-10 dark:border-zinc-700">
        <Link
          href="/articles"
          className="inline-flex border-b border-zinc-400 pb-0.5 text-sm text-zinc-600 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-600 dark:text-zinc-400 dark:hover:border-zinc-100 dark:hover:text-zinc-50"
        >
          ← All articles
        </Link>
        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
          <time dateTime={article.date}>
            {dateFormatter.format(new Date(`${article.date}T00:00:00`))}
          </time>
          <span aria-hidden="true">·</span>
          <span className="normal-case tracking-normal">{article.readingTime}</span>
        </div>
        <h1 className="font-pixelify mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {article.title}
        </h1>
        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-500">
          {article.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </header>

      <div className="py-5">
        <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {article.content}
        </Markdown>
      </div>

      <footer className="mt-8 border-t border-zinc-300 py-8 dark:border-zinc-700">
        <Link
          href="/articles"
          className="font-medium underline decoration-zinc-400 underline-offset-4 hover:decoration-zinc-950 dark:decoration-zinc-600 dark:hover:decoration-zinc-100"
        >
          Read more articles
        </Link>
      </footer>
    </article>
  );
}
