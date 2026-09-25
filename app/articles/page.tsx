import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({
    where: {
      status: "PUBLISHED",
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Bible Articles
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-gray-600">
            Explore Bible-based articles, Christian apologetics,
            biblical teaching, and practical Christian living from
            Bible Aur Hum Ministries.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="rounded-xl border bg-white p-10 text-center shadow-sm">
            <p className="text-gray-600">
              Articles are coming soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.id}
                className="overflow-hidden rounded-xl border bg-white shadow-sm"
              >
                {article.featuredImage ? (
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="h-52 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-52 items-center justify-center bg-gray-100 text-5xl">
                    📖
                  </div>
                )}

                <div className="p-6">
                  <p className="text-sm font-medium text-blue-600">
                    {article.category.name}
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-gray-900">
                    {article.title}
                  </h2>

                  {article.shortDescription && (
                    <p className="mt-3 text-gray-600">
                      {article.shortDescription}
                    </p>
                  )}

                  {article.bibleReference && (
                    <p className="mt-4 text-sm font-medium text-gray-700">
                      📖 {article.bibleReference}
                    </p>
                  )}

                  <Link
                    href={`/articles/${article.slug}`}
                    className="mt-5 inline-block font-semibold text-blue-600 hover:underline"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}