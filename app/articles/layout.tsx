import type { ReactNode } from "react";
import ArticleShell from "./article-shell";

export default function ArticlesLayout({ children }: { children: ReactNode }) {
  return <ArticleShell>{children}</ArticleShell>;
}
