import { prisma } from "@/lib/prisma";
import { updateTag } from "../../actions";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditTagPage({
  params,
}: PageProps) {
  const { id } = await params;

  const tag = await prisma.tag.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!tag) {
    notFound();
  }

  async function updateTagAction(formData: FormData) {
    "use server";

    await updateTag(Number(id), formData);
  }

  return (
    <div className="max-w-3xl space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Edit Tag
        </h1>

        <p className="mt-2 text-gray-500">
          Update this content tag.
        </p>
      </div>

      {/* Form */}

      <form
        action={updateTagAction}
        className="rounded-xl border bg-white p-8 shadow-sm space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Tag Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            defaultValue={tag.name}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />

          <p className="mt-2 text-sm text-gray-500">
            Slug will be regenerated automatically.
          </p>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Update Tag
          </button>

          <a
            href="/admin/tags"
            className="rounded-lg border px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}