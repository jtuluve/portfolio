import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllSlideDecks,
  getSlideDeck,
  hasBuiltSlideDeck,
} from "@/lib/slides";

type SlideDeckPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllSlideDecks().map((deck) => ({ id: deck.id }));
}

export async function generateMetadata({
  params,
}: SlideDeckPageProps): Promise<Metadata> {
  const { id } = await params;
  const deck = getSlideDeck(id);

  if (!deck) return {};

  return {
    title: deck.title,
    description: deck.description,
    alternates: { canonical: `/slides/${deck.id}` },
  };
}

export default async function SlideDeckPage({ params }: SlideDeckPageProps) {
  const { id } = await params;
  const deck = getSlideDeck(id);

  if (!deck) notFound();

  if (!hasBuiltSlideDeck(deck.id)) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-50">
        <div className="max-w-lg border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">
            Deck source found
          </p>
          <h1 className="font-pixelify mt-3 text-3xl font-semibold">
            {deck.title}
          </h1>
          <p className="mt-4 leading-7 text-zinc-400">
            The Slidev app has not been generated locally. Build this deck,
            then refresh the page.
          </p>
          <code className="mt-6 block overflow-x-auto border border-zinc-700 bg-black px-4 py-3 font-mono text-sm text-zinc-300">
            npm run slides:build -- {deck.id}
          </code>
          <Link
            href="/slides"
            className="mt-6 inline-flex border-b border-zinc-500 pb-0.5 text-sm text-zinc-300 hover:border-white hover:text-white"
          >
            ← All decks
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative h-dvh overflow-hidden bg-black">
      <iframe
        src={`/_slidev/${deck.id}/index.html`}
        title={deck.title}
        className="h-full w-full border-0"
        allow="fullscreen"
      />
      <Link
        href="/slides"
        aria-label="Back to all slide decks"
        title="All decks"
        className="absolute left-3 top-3 z-10 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 font-mono text-[11px] text-white/75 opacity-30 backdrop-blur-sm transition hover:opacity-100 focus:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        ← decks
      </Link>
    </main>
  );
}
