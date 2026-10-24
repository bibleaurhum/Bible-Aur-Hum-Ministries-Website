
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

type Question = {
  id: number;
  title: string;
  slug: string;
  shortAnswer: string;
  answer: string;
  bibleReferences?: string | null;
  youtubeUrl: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  featured: boolean;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  categoryId: number;
  tags: {
    tag: {
      id: number;
    };
  }[];
};

type QuestionFormProps = {
  categories: Category[];
  tags: Tag[];
  question?: Question;
  action: (formData: FormData) => void | Promise<void>;
  submitLabel: string;
};

export default function QuestionForm({
  categories,
  tags,
  question,
  action,
  submitLabel,
}: QuestionFormProps) {
  const [title, setTitle] = useState(question?.title ?? "");
  const [slug, setSlug] = useState(question?.slug ?? "");
  const [shortAnswer, setShortAnswer] = useState(
    question?.shortAnswer ?? ""
  );
  const [answer, setAnswer] = useState(question?.answer ?? "");
  const [bibleReferences, setBibleReferences] = useState(
    question?.bibleReferences ?? ""
  );
  const [youtubeUrl, setYoutubeUrl] = useState(
    question?.youtubeUrl ?? ""
  );
  const [categoryId, setCategoryId] = useState(
    question?.categoryId?.toString() ?? ""
  );
  const [seoTitle, setSeoTitle] = useState(
    question?.seoTitle ?? ""
  );
  const [seoDescription, setSeoDescription] = useState(
    question?.seoDescription ?? ""
  );
  const [featured, setFeatured] = useState(
    question?.featured ?? false
  );
  const [status, setStatus] = useState<
    "DRAFT" | "PUBLISHED" | "ARCHIVED"
  >(question?.status ?? "DRAFT");
  const [selectedTags, setSelectedTags] = useState<number[]>(
    question?.tags?.map((item) => item.tag.id) ?? []
  );

  function toggleTag(tagId: number) {
    setSelectedTags((current) =>
      current.includes(tagId)
        ? current.filter((id) => id !== tagId)
        : [...current, tagId]
    );
  }

  return (
    <form action={action} className="space-y-8">
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
              onChange={(e) => setShortAnswer(e.target.value)}
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
              onChange={(e) => setAnswer(e.target.value)}
              rows={12}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
      </div>

      {/* Key Bible References */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold">
          Key Bible References
        </h2>

        <p className="mb-4 text-sm text-gray-500">
          Add the main Scripture passages supporting your answer.
          Put each reference on a separate line.
        </p>

        <textarea
          name="bibleReferences"
          value={bibleReferences}
          onChange={(e) => setBibleReferences(e.target.value)}
          rows={5}
          placeholder={"Genesis 1:1\nJohn 1:1–3\nColossians 1:16–17"}
          className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
        />
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
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
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
              onChange={(e) => setSeoTitle(e.target.value)}
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
              onChange={(e) => setSeoDescription(e.target.value)}
              rows={4}
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-xl font-semibold">Tags</h2>

        <p className="mb-4 text-sm text-gray-500">
          Enter tags separated by commas. Existing tags will be reused,
          and new tags will be created automatically when you save.
        </p>

        <input
          type="text"
          name="newTags"
          placeholder="God, Creation, Eternity, Theology"
          className="w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
        />

        {tags.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 font-medium">
              Or select existing tags
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {tags.map((tag) => (
                <label
                  key={tag.id}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    name="tags"
                    value={tag.id}
                    checked={selectedTags.includes(tag.id)}
                    onChange={() => toggleTag(tag.id)}
                    className="h-4 w-4"
                  />
                  <span>{tag.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Publishing */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">Publishing</h2>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block font-medium">
              Status
            </label>
            <select
              name="status"
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value as
                    | "DRAFT"
                    | "PUBLISHED"
                    | "ARCHIVED"
                )
              }
              className="rounded-lg border px-4 py-3"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
              <option value="ARCHIVED">Archived</option>
            </select>
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="featured"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="h-5 w-5"
            />
            <span className="font-medium">Featured Question</span>
          </label>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
