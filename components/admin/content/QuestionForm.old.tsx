"use client";

import { useState } from "react";
import { createQuestion } from "@/app/(admin)/admin/questions/new/actions";

type Category = {
  id: number;
  name: string;
};

type Tag = {
  id: number;
  name: string;
};

type QuestionFormProps = {
  categories: Category[];
  tags: Tag[];
};
export default function QuestionForm({
  categories,
  tags,
}: QuestionFormProps) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortAnswer, setShortAnswer] = useState("");
  const [answer, setAnswer] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState("DRAFT");

  return (
    <form
  action={createQuestion}
  className="space-y-8"
>
      {/* Basic Information */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          Basic Information
        </h2>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block font-medium">
              Question Title
            </label>

            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Example: Who created Satan?"
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
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="who-created-satan"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Category
            </label>

            <select
            name="categoryId"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              required
            >
              <option value="">
                Select a category
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
        </div>
      </div>

      {/* Answer Content */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          Answer Content
        </h2>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block font-medium">
              Short Answer
            </label>

            <textarea
            name="shortAnswer"
              value={shortAnswer}
              onChange={(e) =>
                setShortAnswer(e.target.value)
              }
              rows={4}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Full Answer
            </label>

            <textarea
            name="answer"
              value={answer}
              onChange={(e) =>
                setAnswer(e.target.value)
              }
              rows={12}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
      </div>
{/* YouTube Video */}
<div className="rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-6 text-xl font-semibold">
    YouTube Video
  </h2>

  <div>
    <label className="mb-2 block font-medium">
      YouTube Video URL
    </label>

    <input
      type="url"
      name="youtubeUrl"
      placeholder="https://www.youtube.com/watch?v=..."
      className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
    />
  </div>
</div>
      {/* SEO */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          SEO Settings
        </h2>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block font-medium">
              SEO Title
            </label>

            <input
              type="text"
              name="seoTitle"
              value={seoTitle}
              onChange={(e) =>
                setSeoTitle(e.target.value)
              }
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              SEO Description
            </label>

            <textarea
            name="seoDescription"
              value={seoDescription}
              onChange={(e) =>
                setSeoDescription(e.target.value)
              }
              rows={4}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
{/* Tags */}

<div className="rounded-xl border bg-white p-8 shadow-sm">
  <h2 className="mb-6 text-xl font-semibold">
    Tags
  </h2>

  <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
    {tags.map((tag) => (
      <label
        key={tag.id}
        className="flex items-center gap-2 rounded-lg border p-3 hover:bg-gray-50"
      >
        <input
          type="checkbox"
          name="tags"
          value={tag.id}
          className="h-4 w-4"
        />

        <span>{tag.name}</span>
      </label>
    ))}
  </div>

  <p className="mt-4 text-sm text-gray-500">
    Select one or more tags for this question.
  </p>
</div>
      {/* Publishing */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          Publishing
        </h2>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block font-medium">
              Status
            </label>

            <select
            name="status"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="rounded-lg border px-4 py-3"
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

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="featured"
              checked={featured}
              onChange={(e) =>
                setFeatured(e.target.checked)
              }
              className="h-5 w-5"
            />

            <span className="font-medium">
              Featured Question
            </span>
          </label>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
        >
          Save Question
        </button>
      </div>
    </form>
  );
}