
"use client";

import Link from "next/link";

type Question = {
  id: number;
  title: string;
  slug: string;
  shortAnswer: string;
  category: {
    name: string;
  };
};

type QuestionCategory = {
  name: string;
  slug: string;
};

type QuestionSearchProps = {
  questions: Question[];
  categories: QuestionCategory[];
  search: string;
  category: string;
  totalQuestions: number;
};

export default function QuestionSearch({
  questions,
  categories,
  search,
  category,
  totalQuestions,
}: QuestionSearchProps) {
  return (
    <div className="mt-16">
      {/* Search and Category Filter */}
      <form
        method="GET"
        action="/questions"
        className="mx-auto grid max-w-4xl gap-4 md:grid-cols-[1fr_240px]"
      >
        <div>
          <label
            htmlFor="question-search"
            className="mb-3 block text-lg font-semibold text-gray-800"
          >
            Search Bible Questions
          </label>

          <input
            id="question-search"
            name="search"
            type="search"
            defaultValue={search}
            placeholder="Search questions, topics, or Bible references..."
            className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-lg shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="question-category"
            className="mb-3 block text-lg font-semibold text-gray-800"
          >
            Category
          </label>

          <select
            id="question-category"
            name="category"
            defaultValue={category}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 text-gray-800 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">All Categories</option>

            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Search Questions
          </button>
        </div>
      </form>

      {/* Results Count */}
      <div className="mx-auto mt-8 max-w-4xl">
        <p className="text-gray-600">
          Found{" "}
          <span className="font-semibold text-gray-900">
            {totalQuestions}
          </span>{" "}
          {totalQuestions === 1 ? "question" : "questions"}
        </p>
      </div>

      {/* Results */}
      <div className="mx-auto mt-6 max-w-4xl">
        {questions.length === 0 ? (
          <div className="rounded-xl bg-gray-50 p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              No questions found
            </h2>

            <p className="mt-3 text-gray-600">
              Try a different search term or category.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {questions.map((question) => (
              <Link
                key={question.id}
                href={`/questions/${question.slug}`}
                className="block rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
                  {question.category.name}
                </p>

                <h2 className="mt-2 text-xl font-bold text-gray-900">
                  {question.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-gray-600">
                  {question.shortAnswer}
                </p>

                <span className="mt-4 inline-block font-semibold text-blue-600">
                  Read Answer →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
