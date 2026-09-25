import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticleDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const article = await prisma.article.findFirst({
    where: {
      slug,
      status: "PUBLISHED",
    },
    include: {
      category: true,
    },
  });

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/articles"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Articles
        </Link>

        <div className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          {article.featuredImage ? (
            <img
              src={article.featuredImage}
              alt={article.title}
              className="h-72 w-full object-cover"
            />
          ) : (
            <div className="flex h-72 items-center justify-center bg-gray-100 text-7xl">
              📖
            </div>
          )}

          <div className="p-8">
            <p className="text-sm font-semibold text-blue-600">
              {article.category.name}
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              {article.title}
            </h1>

            {article.shortDescription && (
              <p className="mt-5 text-lg leading-8 text-gray-600">
                {article.shortDescription}
              </p>
            )}

            {article.bibleReference && (
              <p className="mt-5 font-medium text-gray-700">
                📖 {article.bibleReference}
              </p>
            )}

            {article.content && (
              <div className="mt-8 whitespace-pre-line leading-8 text-gray-700">
                {article.content}
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}