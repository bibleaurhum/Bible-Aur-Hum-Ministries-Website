import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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
    title:
      question.seoTitle ||
      `${question.title} | Bible Aur Hum`,
    description:
      question.seoDescription ||
      question.shortAnswer,
  };
}
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function QuestionPage({
  params,
}: Props) {
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

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          {question.title}
        </h1>

        {/* Short Answer */}

        <div className="mt-10 rounded-2xl bg-blue-50 p-8 shadow">
          <h2 className="text-2xl font-bold text-blue-700">
            Quick Answer
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            {question.shortAnswer}
          </p>
        </div>

        {/* Full Answer */}

        <div className="mt-10 rounded-2xl bg-white p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900">
            Biblical Answer
          </h2>

          <div className="mt-6 whitespace-pre-line text-lg leading-9 text-gray-700">
            {question.answer}
          </div>
        </div>

        {/* YouTube */}

        {question.youtubeUrl && (
          <div className="mt-10 rounded-2xl bg-red-50 p-8">
            <h2 className="text-2xl font-bold">
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
          </div>
        )}

      </div>
    </main>
  );
}