
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const question = await prisma.question.findUnique({
    where: {
      slug,
    },
  });

  if (!question) {
    return {
      title: "Question Not Found | Bible Aur Hum",
      description: "This Bible question could not be found.",
    };
  }

  return {
    title: question.seoTitle || `${question.title} | Bible Aur Hum`,
    description: question.seoDescription || question.shortAnswer,
  };
}

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params;

  const question = await prisma.question.findUnique({
    where: {
      slug,
    },
    include: {
      category: true,
    },
  });

  if (!question || question.status !== "PUBLISHED") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Category */}
        <p className="font-semibold uppercase tracking-[0.4em] text-red-600">
          {question.category.name}
        </p>

        {/* Title */}
        <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
          {question.title}
        </h1>

        {/* Short Answer */}
        <section className="mt-10 rounded-2xl bg-blue-50 p-8 shadow">
          <h2 className="text-2xl font-bold text-blue-700">
            Quick Answer
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            {question.shortAnswer}
          </p>
        </section>

        {/* Full Answer */}
        <section className="mt-10 rounded-2xl bg-white p-8 shadow-lg md:p-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Biblical Answer
          </h2>

          <div className="mt-6 whitespace-pre-line text-lg leading-9 text-gray-700">
            {question.answer}
          </div>
        </section>

        {/* Key Bible References */}
        {question.bibleReferences && (
          <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Key Bible References
            </h2>

            <p className="mt-3 leading-7 text-gray-700">
              Explore these Scripture passages for further study.
            </p>

            <div className="mt-5 whitespace-pre-line leading-8 text-gray-800">
              {question.bibleReferences}
            </div>
          </section>
        )}

        {/* YouTube */}
        {question.youtubeUrl && (
          <section className="mt-10 rounded-2xl bg-red-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Watch Related Teaching
            </h2>

            <a
              href={question.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-semibold text-red-600 hover:underline"
            >
              Watch on YouTube →
            </a>
          </section>
        )}
      </div>
    </main>
  );
}
