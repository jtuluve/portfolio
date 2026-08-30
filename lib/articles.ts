import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage?: string;
  content: string;
  readingTime: string;
};

function getReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function readArticleFile(fileName: string): Article {
  const slug = fileName.replace(/\.md$/, "");
  const file = fs.readFileSync(path.join(articlesDirectory, fileName), "utf8");
  const { data, content } = matter(file);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    content,
    readingTime: getReadingTime(content),
  };
}

export function getAllArticles() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readArticleFile)
    .sort(
      (firstPost, secondPost) =>
        new Date(secondPost.date).getTime() - new Date(firstPost.date).getTime(),
    );
}

export function getArticleBySlug(slug: string) {
  const safeSlug = path.basename(slug);
  const fileName = `${safeSlug}.md`;
  const filePath = path.join(articlesDirectory, fileName);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return readArticleFile(fileName);
}
