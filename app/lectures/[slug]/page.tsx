import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LectureDetailPage({ params }: Props) {
  const { slug } = await params;

  const lecture = await prisma.lecture.findFirst({
    where: {
      slug,
      status: "PUBLISHED",
    },
    include: {
      category: true,
    },
  });

  if (!lecture) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/lectures"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Lectures
        </Link>

        <div className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          {lecture.thumbnail ? (
            <img
              src={lecture.thumbnail}
              alt={lecture.title}
              className="h-72 w-full object-cover"
            />
          ) : (
            <div className="flex h-72 items-center justify-center bg-gray-100 text-7xl">
              📖
            </div>
          )}

          <div className="p-8">
            <p className="text-sm font-semibold text-blue-600">
              {lecture.category.name}
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              {lecture.title}
            </h1>

            {lecture.shortDescription && (
              <p className="mt-5 text-lg leading-8 text-gray-600">
                {lecture.shortDescription}
              </p>
            )}

            {lecture.bibleReference && (
              <p className="mt-5 font-medium text-gray-700">
                📖 {lecture.bibleReference}
              </p>
            )}

            {lecture.content && (
              <div className="mt-8 whitespace-pre-line leading-8 text-gray-700">
                {lecture.content}
              </div>
            )}

            {lecture.youtubeId && (
              <div className="mt-10">
                <a
                  href={`https://www.youtube.com/watch?v=${lecture.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
                >
                  Watch on YouTube →
                </a>
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
