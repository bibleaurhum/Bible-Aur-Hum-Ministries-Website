import Link from "next/link";
import { prisma } from "@/lib/prisma";
import QuestionSearch from "@/components/questions/QuestionSearch";
export default async function QuestionsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
  }>;
}) {
    const { page = "1" } = await searchParams;

  const currentPage = Math.max(Number(page) || 1, 1);
  const pageSize = 20;
  const questions = await prisma.question.findMany({
  where: {
    status: "PUBLISHED",
  },

  skip: (currentPage - 1) * pageSize,
  take: pageSize,

  include: {
    category: true,
  },
    orderBy: {
      createdAt: "desc",
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
<QuestionSearch questions={questions} />
        {/* Total Questions */}

        <div className="mt-12 text-center">

          <div className="inline-block rounded-xl bg-blue-700 px-8 py-4 text-white shadow-lg">

            <h2 className="text-3xl font-bold">
              {questions.length}
            </h2>

            <p className="mt-2">
              Total Questions
            </p>

          </div>

        </div>

        {/* Categories */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {Object.entries(categories).map(
            ([categoryName, categoryData]) => (

              <div
                key={categoryName}
                className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <h2 className="text-2xl font-bold text-blue-700">
                  {categoryName}
                </h2>

                <p className="mt-2 text-gray-500">
                  {categoryData.questions.length} Questions
                </p>

                <ul className="mt-6 space-y-3">

                  {categoryData.questions
                    .slice(0, 5)
                    .map((question) => (

                      <li key={question.id}>

                        <Link
                          href={`/questions/${question.slug}`}
                          className="text-gray-700 transition hover:text-red-600"
                        >
                          • {question.title}
                        </Link>

                      </li>

                    ))}

                </ul>

                <Link
                  href={`/questions/category/${categoryData.slug}`}
                  className="mt-8 inline-block rounded-lg bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800"
                >
                  View All →
                </Link>

              </div>

            )
          )}

        </div>

        {/* Empty State */}

        {questions.length === 0 && (
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
              href={`/questions?page=${currentPage - 1}`}
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
              href={`/questions?page=${currentPage + 1}`}
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