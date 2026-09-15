import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function LecturesPage() {
  const lectures = await prisma.lecture.findMany({
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
            Lectures
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your Bible lectures.
          </p>
        </div>

        <Link
          href="/admin/lectures/new"
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          + New Lecture
        </Link>

      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

        <table className="w-full">

          <thead className="border-b bg-gray-50">

            <tr>
              <th className="px-6 py-4 text-left">
                Title
              </th>

              <th className="px-6 py-4 text-left">
                Category
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-left">
                Featured
              </th>

              <th className="px-6 py-4 text-right">
                Actions
              </th>
            </tr>

          </thead>

          <tbody className="divide-y">

            {lectures.map((lecture) => (

              <tr key={lecture.id}>

                <td className="px-6 py-4 font-medium">
                  {lecture.title}
                </td>

                <td className="px-6 py-4">
                  {lecture.category.name}
                </td>

                <td className="px-6 py-4">
                  {lecture.status}
                </td>

                <td className="px-6 py-4">
                  {lecture.featured ? "Yes" : "No"}
                </td>

                <td className="px-6 py-4 text-right">

                  <Link
  href={`/admin/lectures/${lecture.id}/edit`}
  className="text-blue-600 hover:underline"
>
  Edit
</Link>

                </td>

              </tr>

            ))}

            {lectures.length === 0 && (

              <tr>

                <td
                  colSpan={5}
                  className="py-10 text-center text-gray-500"
                >
                  No lectures found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}