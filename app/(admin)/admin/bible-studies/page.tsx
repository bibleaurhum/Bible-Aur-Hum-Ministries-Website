import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function BibleStudiesPage() {
  const bibleStudies = await prisma.bibleStudy.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Bible Studies
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your Bible studies and biblical teaching resources.
          </p>
        </div>

        <Link
          href="/admin/bible-studies/new"
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          + New Bible Study
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Featured</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {bibleStudies.map((study) => (
              <tr key={study.id}>
                <td className="px-6 py-4 font-medium">
                  {study.title}
                </td>

                <td className="px-6 py-4">
                  {study.category.name}
                </td>

                <td className="px-6 py-4">
                  {study.status}
                </td>

                <td className="px-6 py-4">
                  {study.featured ? "Yes" : "No"}
                </td>

                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/admin/bible-studies/${study.id}/edit`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}

            {bibleStudies.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="py-10 text-center text-gray-500"
                >
                  No Bible Studies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}