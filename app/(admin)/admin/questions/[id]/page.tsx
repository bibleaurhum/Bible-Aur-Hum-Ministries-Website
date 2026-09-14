import { prisma } from "@/lib/prisma";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function QuestionDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const questionId = Number(id);

  const question = await prisma.question.findUnique({
    where: {
      id: questionId,
    },
    include: {
      category: true,
    },
  });

  if (!question) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">
          Question not found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm font-medium text-blue-600">
            {question.category.name}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            {question.title}
          </h1>

          <p className="mt-3 text-gray-500">
            {question.slug}
          </p>
        </div>

        <Link
          href={`/admin/questions/${question.id}/edit`}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Edit Question
        </Link>
      </div>

      {/* Status */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex gap-4">
          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            Status: {question.status}
          </span>

          <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
            Featured: {question.featured ? "Yes" : "No"}
          </span>
        </div>
      </div>

      {/* Short Answer */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Short Answer
        </h2>

        <p className="whitespace-pre-line leading-8 text-gray-700">
          {question.shortAnswer}
        </p>
      </div>

      {/* Full Answer */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Full Answer
        </h2>

        <div className="whitespace-pre-line leading-8 text-gray-700">
          {question.answer}
        </div>
      </div>

      {/* YouTube Video */}
      {question.youtubeUrl && (
        <div className="rounded-xl border bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            YouTube Video
          </h2>

          <a
            href={question.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-blue-600 underline hover:text-blue-800"
          >
            {question.youtubeUrl}
          </a>
        </div>
      )}

      {/* SEO Information */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          SEO Information
        </h2>

        <div className="space-y-6">
          <div>
            <p className="font-medium text-gray-700">
              SEO Title
            </p>

            <p className="mt-2 text-gray-600">
              {question.seoTitle || "Not provided"}
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-700">
              SEO Description
            </p>

            <p className="mt-2 text-gray-600">
              {question.seoDescription || "Not provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}