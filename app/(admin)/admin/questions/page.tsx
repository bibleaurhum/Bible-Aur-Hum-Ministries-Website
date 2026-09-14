import Link from "next/link";
import { prisma } from "@/lib/prisma";
import SearchBar from "@/components/admin/content/SearchBar";
import CategoryFilter from "@/components/admin/content/CategoryFilter";
import TagFilter from "@/components/admin/content/TagFilter";
import DeleteQuestionButton from "@/components/admin/content/DeleteQuestionButton";

type PageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string;
    tag?: string;
    page?: string;
  }>;
};

export default async function QuestionsPage({
  searchParams,
}: PageProps) {
  const {
    search = "",
    category = "",
    tag = "",
    page = "1",
  } = await searchParams;

  const currentPage = Math.max(Number(page) || 1, 1);
  const pageSize = 20;

  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const tags = await prisma.tag.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const questions = await prisma.question.findMany({
    where: {
      ...(search
        ? {
            OR: [
              {
                title: {
                  contains: search,
                },
              },
              {
                slug: {
                  contains: search,
                },
              },
              {
                shortAnswer: {
                  contains: search,
                },
              },
              {
                answer: {
                  contains: search,
                },
              },
            ],
          }
        : {}),

      ...(category
        ? {
            categoryId: Number(category),
          }
        : {}),

      ...(tag
        ? {
            tags: {
              some: {
                tagId: Number(tag),
              },
            },
          }
        : {}),
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

  return (
    <div>
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Questions
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all Bible questions and answers.
          </p>
        </div>

        <Link
          href="/admin/questions/new"
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          + New Question
        </Link>
      </div>

      {/* Filters */}

      <div className="mt-8 flex flex-col gap-4 rounded-xl border bg-white p-6 shadow-sm md:flex-row">
        <SearchBar />

        <CategoryFilter categories={categories} />

        <TagFilter tags={tags} />
      </div>

      {/* Questions Table */}

      <div className="mt-8 overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Question
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Category
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Featured
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {questions.map((question) => (
              <tr
                key={question.id}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">
                    {question.title}
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    {question.slug}
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {question.category.name}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    {question.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {question.featured ? "Yes" : "No"}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    {/* Edit */}

                    <Link
                      href={`/admin/questions/${question.id}/edit`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>

                    {/* Delete */}

                    <DeleteQuestionButton
                      questionId={question.id}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}

        {questions.length === 0 && (
          <div className="py-16 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No questions found
            </h2>

            <p className="mt-2 text-gray-500">
              Try another search or create a new question.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}

      <div className="mt-8 flex items-center justify-between">
        {currentPage > 1 ? (
          <Link
            href={`/admin/questions?page=${currentPage - 1}${
              search ? `&search=${encodeURIComponent(search)}` : ""
            }${category ? `&category=${category}` : ""}${
              tag ? `&tag=${tag}` : ""
            }`}
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
            href={`/admin/questions?page=${currentPage + 1}${
              search ? `&search=${encodeURIComponent(search)}` : ""
            }${category ? `&category=${category}` : ""}${
              tag ? `&tag=${tag}` : ""
            }`}
            className="rounded-lg border bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            Next →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}