import { prisma } from "@/lib/prisma";
import { createArticle } from "../actions";

export default async function NewArticlePage() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          New Article
        </h1>

        <p className="mt-2 text-gray-500">
          Create a new Bible Aur Hum article.
        </p>
      </div>

      <form
        action={createArticle}
        className="space-y-6 rounded-xl border bg-white p-8 shadow-sm"
      >
        <div>
          <label className="mb-2 block font-medium">
            Article Title
          </label>

          <input
            type="text"
            name="title"
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Enter article title"
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
            placeholder="example-article-title"
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
            placeholder="Brief description of the article"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Full Article Content
          </label>

          <textarea
            name="content"
            rows={16}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Write the full article content here..."
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
            Featured Image URL
          </label>

          <input
            type="text"
            name="featuredImage"
            className="w-full rounded-lg border px-4 py-3"
            placeholder="https://..."
          />
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
            <option value="DRAFT">
              Draft
            </option>

            <option value="PUBLISHED">
              Published
            </option>

            <option value="ARCHIVED">
              Archived
            </option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="featured"
          />

          <label>
            Featured Article
          </label>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Save Article
        </button>
      </form>
    </div>
  );
}