import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function LecturesPage() {
  const lectures = await prisma.lecture.findMany({
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
            Bible Lectures
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-gray-600">
            Explore biblical teaching, Christian apologetics, and Bible-based
            lectures from Bible Aur Hum Ministries.
          </p>
        </div>

        {lectures.length === 0 ? (
          <div className="rounded-xl border bg-white p-10 text-center shadow-sm">
            <p className="text-gray-600">
              Lectures are coming soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {lectures.map((lecture) => (
              <article
                key={lecture.id}
                className="overflow-hidden rounded-xl border bg-white shadow-sm"
              >
                {lecture.thumbnail ? (
                  <img
                    src={lecture.thumbnail}
                    alt={lecture.title}
                    className="h-52 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-52 items-center justify-center bg-gray-100 text-5xl">
                    📖
                  </div>
                )}

                <div className="p-6">
                  <p className="text-sm font-medium text-blue-600">
                    {lecture.category.name}
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-gray-900">
                    {lecture.title}
                  </h2>

                  {lecture.shortDescription && (
                    <p className="mt-3 text-gray-600">
                      {lecture.shortDescription}
                    </p>
                  )}

                  {lecture.bibleReference && (
                    <p className="mt-4 text-sm font-medium text-gray-700">
                      📖 {lecture.bibleReference}
                    </p>
                  )}

                  <Link
                    href={`/lectures/${lecture.slug}`}
                    className="mt-5 inline-block font-semibold text-blue-600 hover:underline"
                  >
                    Read Lecture →
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
