
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const category = await prisma.category.findUnique({
    where: {
      slug,
    },
  });

  if (!category) {
    return {
      title: "Category Not Found | Bible Aur Hum",
      description: "This Bible question category could not be found.",
    };
  }

  return {
    title: `${category.name} Bible Questions | Bible Aur Hum`,
    description:
      category.description ||
      `Explore biblical questions and answers about ${category.name}.`,
  };
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function CategoryPage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const { page = "1" } = await searchParams;

  const currentPage = Math.max(Number(page) || 1, 1);
  const pageSize = 20;

  const category = await prisma.category.findUnique({
    where: {
      slug,
    },
    include: {
      questions: {
        where: {
          status: "PUBLISHED",
        },
        orderBy: {
          createdAt: "desc",
        },
        skip: (currentPage - 1) * pageSize,
        take: pageSize,
      },
      _count: {
        select: {
          questions: {
            where: {
              status: "PUBLISHED",
            },
          },
        },
      },
    },
  });

  if (!category) {
    notFound();
  }

  const totalQuestions = category._count.questions;
  const totalPages = Math.ceil(totalQuestions / pageSize);

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-semibold uppercase tracking-[0.4em] text-red-600">
          Category
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          {category.name}
        </h1>

        {category.description && (
          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            {category.description}
          </p>
        )}

        <p className="mt-6 text-gray-600">
          {totalQuestions} Published Questions
        </p>

        <div className="mt-12 space-y-6">
          {category.questions.map((question) => (
            <Link
              key={question.id}
              href={`/questions/${question.slug}`}
              className="block rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {question.title}
              </h2>

              <p className="mt-4 text-gray-600">
                {question.shortAnswer}
              </p>

              <span className="mt-6 inline-block font-semibold text-red-600">
                Read Full Answer →
              </span>
            </Link>
          ))}

          {category.questions.length === 0 && (
            <div className="rounded-xl bg-white p-10 text-center shadow">
              <h2 className="text-2xl font-bold">
                No questions found
              </h2>

              <p className="mt-4 text-gray-600">
                There are no published questions in this category yet.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-between">
            {currentPage > 1 ? (
              <Link
                href={`/questions/category/${slug}?page=${currentPage - 1}`}
                className="rounded-lg border bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
              >
                ← Previous
              </Link>
            ) : (
              <div />
            )}

            <span className="text-sm font-medium text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
              <Link
                href={`/questions/category/${slug}?page=${currentPage + 1}`}
                className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-800"
              >
                Next →
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}
      </div>
    </main>
  );
}
