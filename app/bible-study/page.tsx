import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function BibleStudyPage() {
  const bibleStudies = await prisma.bibleStudy.findMany({
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
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Bible Studies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Explore biblical studies designed to help you understand God’s
            Word and grow in faith.
          </p>
        </div>

        {bibleStudies.length === 0 ? (
          <div className="rounded-xl border bg-white p-12 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              Bible Studies Coming Soon
            </h2>
            <p className="mt-3 text-gray-600">
              We are preparing biblical studies and teaching resources for you.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bibleStudies.map((study) => (
              <article
                key={study.id}
                className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {study.featuredImage ? (
                  <img
                    src={study.featuredImage}
                    alt={study.title}
                    className="h-52 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-52 items-center justify-center bg-blue-50">
                    <span className="text-5xl">📖</span>
                  </div>
                )}

                <div className="p-6">
                  <p className="text-sm font-medium text-blue-600">
                    {study.category.name}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    {study.title}
                  </h2>

                  {study.shortDescription && (
                    <p className="mt-3 line-clamp-3 text-gray-600">
                      {study.shortDescription}
                    </p>
                  )}

                  {study.bibleReference && (
                    <p className="mt-4 text-sm font-medium text-gray-500">
                      📖 {study.bibleReference}
                    </p>
                  )}

                  <Link
                    href={`/bible-study/${study.slug}`}
                    className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Read Study →
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