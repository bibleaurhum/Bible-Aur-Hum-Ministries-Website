import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  async function deleteCategory(formData: FormData) {
    "use server";

    const id = Number(formData.get("id"));

    await prisma.category.delete({
      where: {
        id,
      },
    });

    redirect("/admin/categories");
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Categories
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your Bible content categories.
          </p>
        </div>

        <Link
          href="/admin/categories/new"
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          + New Category
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Slug</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 font-medium">
                  {category.name}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {category.slug}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {category.description}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <Link
                      href={`/admin/categories/${category.id}/edit`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>

                    <form action={deleteCategory}>
                      <input
                        type="hidden"
                        name="id"
                        value={category.id}
                      />

                      <button
                        type="submit"
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}

            {categories.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="py-10 text-center text-gray-500"
                >
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}