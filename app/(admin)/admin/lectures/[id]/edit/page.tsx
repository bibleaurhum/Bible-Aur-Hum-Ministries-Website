import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditLecturePage({ params }: Props) {
  const { id } = await params;

  const lecture = await prisma.lecture.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!lecture) {
    notFound();
  }

  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Edit Lecture
        </h1>

        <p className="mt-2 text-gray-500">
          Update this Bible lecture.
        </p>
      </div>

      <form className="space-y-6 rounded-xl border bg-white p-8 shadow-sm">

        <div>
          <label className="mb-2 block font-medium">
            Lecture Title
          </label>

          <input
            type="text"
            defaultValue={lecture.title}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            URL Slug
          </label>

          <input
            type="text"
            defaultValue={lecture.slug}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Short Description
          </label>

          <textarea
            rows={4}
            defaultValue={lecture.shortDescription ?? ""}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Category
          </label>

          <select
            defaultValue={lecture.categoryId}
            className="w-full rounded-lg border px-4 py-3"
          >
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            YouTube Video ID
          </label>

          <input
            type="text"
            defaultValue={lecture.youtubeId}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Status
          </label>

          <select
            defaultValue={lecture.status}
            className="w-full rounded-lg border px-4 py-3"
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>

        <div className="flex items-center gap-3">

          <input
            type="checkbox"
            defaultChecked={lecture.featured}
          />

          <label>
            Featured Lecture
          </label>

        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Update Lecture
        </button>

      </form>
    </div>
  );
}