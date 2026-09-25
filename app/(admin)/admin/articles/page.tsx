import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="max-w-6xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Articles
          </h1>

          <p className="mt-2 text-gray-500">
            Manage Bible Aur Hum articles.
          </p>
        </div>

        <Link
          href="/admin/articles/new"
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          + New Article
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        {articles.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No articles found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-semibold">
                    Title
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Category
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Status
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Featured
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {articles.map((article) => (
                  <tr
                    key={article.id}
                    className="border-b last:border-0"
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">
                        {article.title}
                      </div>

                      <div className="mt-1 text-sm text-gray-500">
                        /articles/{article.slug}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {article.category.name}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          article.status === "PUBLISHED"
                            ? "bg-green-100 text-green-700"
                            : article.status === "ARCHIVED"
                              ? "bg-gray-100 text-gray-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {article.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {article.featured ? "Yes" : "No"}
                    </td>

                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/articles/${article.id}/edit`}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}