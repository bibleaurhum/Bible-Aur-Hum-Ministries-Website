import Link from "next/link";
import { prisma } from "@/lib/prisma";
import QuestionSearch from "@/components/questions/QuestionSearch";
export default async function QuestionsPage({
  searchParams,
}: {
 searchParams: Promise<{
  page?: string;
  search?: string;
  category?: string;
}>;
}) {
    const {
  page = "1",
  search = "",
  category = "",
} = await searchParams;

  const currentPage = Math.max(Number(page) || 1, 1);
  const paginationParams = new URLSearchParams();

if (search.trim()) paginationParams.set("search", search.trim());
if (category) paginationParams.set("category", category);
  const pageSize = 20;
  const questionWhere = {
  status: "PUBLISHED" as const,
  ...(search.trim()
    ? {
        OR: [
          { title: { contains: search.trim(), mode: "insensitive" as const } },
          { shortAnswer: { contains: search.trim(), mode: "insensitive" as const } },
          { answer: { contains: search.trim(), mode: "insensitive" as const } },
          { bibleReferences: { contains: search.trim(), mode: "insensitive" as const } },
        ],
      }
    : {}),
  ...(category
    ? {
        category: {
          slug: category,
        },
      }
    : {}),
};
  const totalQuestions = await prisma.question.count({
  where: questionWhere,
});
const featuredQuestions = await prisma.question.findMany({
  where: {
    status: "PUBLISHED",
    featured: true,
  },
  select: {
    id: true,
    title: true,
    slug: true,
    shortAnswer: true,
    category: {
      select: {
        name: true,
      },
    },
  },
  orderBy: {
    createdAt: "desc",
  },
  take: 6,
});
  const questions = await prisma.question.findMany({
  where: questionWhere,

  skip: (currentPage - 1) * pageSize,
  take: pageSize,

  include: {
    category: true,
  },
    orderBy: {
      createdAt: "desc",
    },
  });
 const allCategories = await prisma.category.findMany({
  orderBy: {
    name: "asc",
  },
  include: {
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
  const categories = questions.reduce(
    (groups, question) => {
      const categoryName = question.category.name;

      if (!groups[categoryName]) {
        groups[categoryName] = {
          slug: question.category.slug,
          questions: [],
        };
      }

      groups[categoryName].questions.push(question);

      return groups;
    },
    {} as Record<
      string,
      {
        slug: string;
        questions: typeof questions;
      }
    >
  );

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.4em] text-red-600">
            Bible Question Library
          </p>

          <h1 className="mt-4 text-5xl font-bold text-gray-900">
            Find Biblical Answers
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            Explore carefully researched biblical answers covering
            Christianity, Theology, Apologetics, Science, History,
            Philosophy, Islam, Christian Living, and much more.
          </p>

        </div>
{/* Featured Questions */}

{!search.trim() && !category && currentPage === 1 &&
  featuredQuestions.length > 0 && (
    <section className="mt-16">

      <div className="mb-8 text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-red-600">
          Featured Questions
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900">
          Important Biblical Questions
        </h2>

        <p className="mt-3 text-gray-600">
          Explore some of our carefully selected biblical answers.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {featuredQuestions.map((question) => (
          <Link
            key={question.id}
            href={`/questions/${question.slug}`}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm font-semibold text-red-600">
              {question.category.name}
            </p>

            <h3 className="mt-3 text-xl font-bold text-gray-900 transition group-hover:text-blue-700">
              {question.title}
            </h3>

            <p className="mt-3 line-clamp-3 leading-7 text-gray-600">
              {question.shortAnswer}
            </p>

            <span className="mt-5 inline-block font-semibold text-blue-700">
              Read Answer →
            </span>
          </Link>
        ))}

      </div>
    </section>
  )}

<QuestionSearch
  questions={questions}
  categories={allCategories}
  search={search}
  category={category}
  totalQuestions={totalQuestions}
/>
        {/* Total Questions */}

        <div className="mt-12 text-center">

          <div className="inline-block rounded-xl bg-blue-700 px-8 py-4 text-white shadow-lg">

            <h2 className="text-3xl font-bold">
              {totalQuestions}
            </h2>

            <p className="mt-2">
              Total Questions
            </p>

          </div>

        </div>

        {/* Categories */}

<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

  {allCategories
    .filter((category) => category._count.questions > 0)
    .map((category) => (

      <div
        key={category.id}
        className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >

        <h2 className="text-2xl font-bold text-blue-700">
          {category.name}
        </h2>

        <p className="mt-2 text-gray-500">
          {category._count.questions} Questions
        </p>

        <Link
          href={`/questions/category/${category.slug}`}
          className="mt-8 inline-block rounded-lg bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800"
        >
          View All →
        </Link>

      </div>

    ))}


</div>

        {/* Empty State */}

        {questions.length === 0 && !search.trim() && !category && (
          <div className="mt-20 text-center">

            <h2 className="text-2xl font-bold text-gray-800">
              No published questions yet
            </h2>

            <p className="mt-3 text-gray-600">
              New Bible questions will appear here soon.
            </p>

          </div>
        )}

      </div>
              {/* Pagination */}

        <div className="mt-12 flex items-center justify-between">
          {currentPage > 1 ? (
            <Link
              href={`/questions?${new URLSearchParams({
  search: search.trim(),
  category,
  page: String(currentPage - 1),
}).toString()}`}
              className="rounded-lg border bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          <span className="text-sm font-medium text-gray-600">
            Page {currentPage}
          </span>

          {questions.length === pageSize ? (
            <Link
              href={`/questions?${new URLSearchParams({
  search: search.trim(),
  category,
  page: String(currentPage + 1),
}).toString()}`}
              className="rounded-lg bg-blue-700 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-800"
            >
              Next →
            </Link>
          ) : (
            <div />
          )}
        </div>
    </main>
  );
}