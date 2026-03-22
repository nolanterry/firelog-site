import Link from "next/link";
import { getAuthorBySlug } from "@/lib/authors";

export function AuthorByline({ authorSlug }: { authorSlug: string }) {
  const author = getAuthorBySlug(authorSlug);
  if (!author) return null;

  return (
    <p className="text-sm text-muted-foreground">
      By{" "}
      <Link
        href={`/blog/authors/${author.slug}`}
        className="text-red-600 hover:underline font-medium"
      >
        {author.name}
      </Link>
      , {author.role}
    </p>
  );
}
