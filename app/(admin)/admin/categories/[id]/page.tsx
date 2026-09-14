import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditCategoryPage({
  params,
}: PageProps) {
  const { id } = await params;

  const categoryId = Number(id);

  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  });

  if (!category) {
    return <div>Category not found.</div>;
  }

  async function updateCategory(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;

    await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        name,
        slug,
        description: description || null,
      },
    });

    redirect("/admin/categories");
  }

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Edit Category
        </h1>

        <p className="mt-2 text-gray-500">
          Update this category.
        </p>
      </div>

      <form
        action={updateCategory}
        className="space-y-6 rounded-xl border bg-white p-8 shadow-sm"
      >
        <div>
          <label className="mb-2 block font-medium">
            Category Name
          </label>

          <input
            type="text"
            name="name"
            defaultValue={category.name}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            URL Slug
          </label>

          <input
            type="text"
            name="slug"
            defaultValue={category.slug}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Description
          </label>

          <textarea
            name="description"
            defaultValue={category.description ?? ""}
            rows={5}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Update Category
        </button>
      </form>
    </div>
  );
}