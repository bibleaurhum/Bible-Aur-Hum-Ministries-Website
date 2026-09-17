import { prisma } from "@/lib/prisma";
import { createLecture } from "../actions";

export default async function NewLecturePage() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          New Lecture
        </h1>

        <p className="mt-2 text-gray-500">
          Create a new Bible lecture.
        </p>
      </div>

      <form
        action={createLecture}
        className="space-y-6 rounded-xl border bg-white p-8 shadow-sm"
      >
        <div>
          <label className="mb-2 block font-medium">
            Lecture Title
          </label>

          <input
            type="text"
            name="title"
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Enter lecture title"
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
            className="w-full rounded-lg border px-4 py-3"
            placeholder="example-lecture-title"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Short Description
          </label>

          <textarea
            name="shortDescription"
            rows={4}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Brief description of the lecture"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Full Lecture Content
          </label>

          <textarea
            name="content"
            rows={14}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Write the full lecture content here..."
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Category
          </label>

          <select
            name="categoryId"
            className="w-full rounded-lg border px-4 py-3"
            required
          >
            <option value="">
              Select Category
            </option>

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
            name="youtubeId"
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Example: dQw4w9WgXcQ"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Thumbnail URL
          </label>

          <input
            type="text"
            name="thumbnail"
            className="w-full rounded-lg border px-4 py-3"
            placeholder="https://..."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Duration
            </label>

            <input
              type="text"
              name="duration"
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Example: 42:15"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Speaker
            </label>

            <input
              type="text"
              name="speaker"
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Speaker name"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Bible Reference
          </label>

          <input
            type="text"
            name="bibleReference"
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Example: John 1:1-14"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            SEO Title
          </label>

          <input
            type="text"
            name="seoTitle"
            className="w-full rounded-lg border px-4 py-3"
            placeholder="SEO title for search engines"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            SEO Description
          </label>

          <textarea
            name="seoDescription"
            rows={4}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="SEO description for search engines"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Status
          </label>

          <select
            name="status"
            defaultValue="DRAFT"
            className="w-full rounded-lg border px-4 py-3"
            required
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="featured"
          />

          <label>
            Featured Lecture
          </label>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Save Lecture
        </button>
      </form>
    </div>
  );
}
