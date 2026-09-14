import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteTag } from "./actions";

export default async function TagsPage() {
  const tags = await prisma.tag.findMany({
    orderBy: {
      name: "asc",
    },
    include: {
      _count: {
        select: {
          questions: true,
          lectures: true,
        },
      },
    },
  });

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Tags
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all content tags used across the ministry.
          </p>
        </div>

        <Link
          href="/admin/tags/new"
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          + New Tag
        </Link>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Name
              </th>

              <th className="px-6 py-4 text-left">
                Slug
              </th>

              <th className="px-6 py-4 text-center">
                Questions
              </th>

              <th className="px-6 py-4 text-center">
                Lectures
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {tags.map((tag) => (

              <tr
                key={tag.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="px-6 py-4 font-medium">
                  {tag.name}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {tag.slug}
                </td>

                <td className="px-6 py-4 text-center">
                  {tag._count.questions}
                </td>

                <td className="px-6 py-4 text-center">
                  {tag._count.lectures}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

  <Link
    href={`/admin/tags/${tag.id}/edit`}
    className="rounded bg-yellow-500 px-3 py-1 text-sm text-white hover:bg-yellow-600"
  >
    Edit
  </Link>

  <form
    action={async () => {
      "use server";
      await deleteTag(tag.id);
    }}
  >
    <button
      type="submit"
      className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
    >
      Delete
    </button>
  </form>

</div>

                </td>

              </tr>

            ))}

            {tags.length === 0 && (

              <tr>

                <td
                  colSpan={5}
                  className="py-10 text-center text-gray-500"
                >
                  No tags found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}