"use client";

import { useState } from "react";

type Category = {
  id: number;
  name: string;
};

type Tag = {
  id: number;
  name: string;
};

type BibleStudyFormProps = {
  categories: Category[];
  tags: Tag[];
  action: (formData: FormData) => void | Promise<void>;
  submitLabel: string;
  initialData?: {
    title?: string;
    slug?: string;
    shortDescription?: string;
    content?: string;
    featuredImage?: string;
    bibleReference?: string;
    seoTitle?: string;
    seoDescription?: string;
    categoryId?: number;
    status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    featured?: boolean;
    tagIds?: number[];
  };
};

export default function BibleStudyForm({
  categories,
  tags,
  action,
  submitLabel,
  initialData,
}: BibleStudyFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? "");

  const generateSlug = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  return (
    <form action={action} className="space-y-8">
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Bible Study Information
        </h2>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Study Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Enter Bible study title"
            />
          </div>

          <div>
            <label
              htmlFor="slug"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              URL Slug
            </label>

            <input
              id="slug"
              name="slug"
              type="text"
              defaultValue={
                initialData?.slug ?? (title ? generateSlug(title) : "")
              }
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="example-bible-study"
            />

            <p className="mt-2 text-sm text-gray-500">
              Used in the public URL for this Bible study.
            </p>
          </div>

          <div>
            <label
              htmlFor="shortDescription"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Short Description
            </label>

            <textarea
              id="shortDescription"
              name="shortDescription"
              rows={4}
              defaultValue={initialData?.shortDescription ?? ""}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Brief summary of this Bible study"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Full Study Content
            </label>

            <textarea
              id="content"
              name="content"
              rows={14}
              defaultValue={initialData?.content ?? ""}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Write the complete Bible study here..."
            />
          </div>

          <div>
            <label
              htmlFor="featuredImage"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Featured Image URL
            </label>

            <input
              id="featuredImage"
              name="featuredImage"
              type="text"
              defaultValue={initialData?.featuredImage ?? ""}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="/images/bible-study.jpg"
            />
          </div>

          <div>
            <label
              htmlFor="bibleReference"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Bible Reference
            </label>

            <input
              id="bibleReference"
              name="bibleReference"
              type="text"
              defaultValue={initialData?.bibleReference ?? ""}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Genesis 1:1-5"
            />
          </div>

          <div>
            <label
              htmlFor="categoryId"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Category
            </label>

            <select
              id="categoryId"
              name="categoryId"
              required
              defaultValue={initialData?.categoryId ?? ""}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Select a category</option>

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          SEO Settings
        </h2>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="seoTitle"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              SEO Title
            </label>

            <input
              id="seoTitle"
              name="seoTitle"
              type="text"
              defaultValue={initialData?.seoTitle ?? ""}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="SEO title"
            />
          </div>

          <div>
            <label
              htmlFor="seoDescription"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              SEO Description
            </label>

            <textarea
              id="seoDescription"
              name="seoDescription"
              rows={4}
              defaultValue={initialData?.seoDescription ?? ""}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              placeholder="SEO description"
            />
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Publishing
        </h2>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="status"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Status
            </label>

            <select
              id="status"
              name="status"
              defaultValue={initialData?.status ?? "DRAFT"}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
              <option value="ARCHIVED">Archived</option>
            </select>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-gray-700">
              Tags
            </p>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {tags.map((tag) => (
                <label
                  key={tag.id}
                  className="flex items-center gap-2 rounded-lg border p-3"
                >
                  <input
                    type="checkbox"
                    name="tagIds"
                    value={tag.id}
                    defaultChecked={initialData?.tagIds?.includes(tag.id)}
                    className="h-4 w-4"
                  />

                  <span className="text-sm text-gray-700">
                    {tag.name}
                  </span>
                </label>
              ))}
            </div>

            {tags.length === 0 && (
              <p className="text-sm text-gray-500">
                No tags available yet.
              </p>
            )}
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="featured"
              value="true"
              defaultChecked={initialData?.featured ?? false}
              className="h-5 w-5"
            />

            <span className="text-sm font-medium text-gray-700">
              Feature this Bible study
            </span>
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}