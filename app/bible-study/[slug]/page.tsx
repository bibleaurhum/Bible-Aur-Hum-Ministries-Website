import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type BibleStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BibleStudyDetailPage({
  params,
}: BibleStudyPageProps) {
  const { slug } = await params;

  const study = await prisma.bibleStudy.findFirst({
    where: {
      slug,
      status: "PUBLISHED",
    },
    include: {
      category: true,
    },
  });

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/bible-study"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Back to Bible Studies
        </Link>

        <div className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          {study.featuredImage ? (
            <img
              src={study.featuredImage}
              alt={study.title}
              className="h-72 w-full object-cover"
            />
          ) : (
            <div className="flex h-72 items-center justify-center bg-blue-50">
              <span className="text-7xl">📖</span>
            </div>
          )}

          <div className="p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              {study.category.name}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
              {study.title}
            </h1>

            {study.shortDescription && (
              <p className="mt-6 text-xl leading-8 text-gray-600">
                {study.shortDescription}
              </p>
            )}

            {study.bibleReference && (
              <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm font-medium text-blue-900">
                📖 Bible Reference: {study.bibleReference}
              </div>
            )}

            {study.content && (
              <div className="mt-10 whitespace-pre-wrap text-lg leading-8 text-gray-800">
                {study.content}
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}