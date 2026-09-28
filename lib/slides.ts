import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const slidesDirectory = path.join(process.cwd(), "slides");
const deckIdPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type SlideDeck = {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  slideCount: number;
};

function countSlides(content: string) {
  const separators = content.match(/^---\s*$/gm)?.length ?? 0;
  return Math.max(1, separators + 1);
}

function normalizeDate(value: unknown) {
  if (value instanceof Date && !Number.isNaN(value.valueOf())) {
    return value.toISOString().slice(0, 10);
  }

  return value ? String(value) : "";
}

export function getSlideDeck(id: string): SlideDeck | null {
  if (!deckIdPattern.test(id)) return null;

  const entryPath = path.join(slidesDirectory, id, "slides.md");
  if (!fs.existsSync(entryPath)) return null;

  const file = fs.readFileSync(entryPath, "utf8");
  const { data, content } = matter(file);

  if (data.published === false) return null;

  return {
    id,
    title: String(data.title || id),
    description: String(data.description || "A Slidev presentation."),
    author: String(data.author || "Jnanesh"),
    date: normalizeDate(data.date),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    slideCount: countSlides(content),
  };
}

export function getAllSlideDecks(): SlideDeck[] {
  if (!fs.existsSync(slidesDirectory)) return [];

  return fs
    .readdirSync(slidesDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => getSlideDeck(entry.name))
    .filter((deck): deck is SlideDeck => deck !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function hasBuiltSlideDeck(id: string) {
  if (!deckIdPattern.test(id)) return false;

  return fs.existsSync(
    path.join(process.cwd(), "public", "_slidev", id, "index.html"),
  );
}
