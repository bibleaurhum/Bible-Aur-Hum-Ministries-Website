"use client";

import { useState } from "react";
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

type QuestionSearchProps = {
  questions: Question[];
};

export default function QuestionSearch({
  questions,
}: QuestionSearchProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    ...Array.from(
      new Set(questions.map((question) => question.category.name))
    ).sort(),
  ];

  const filteredQuestions = questions.filter((question) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      !searchText ||
      question.title.toLowerCase().includes(searchText) ||
      question.shortAnswer.toLowerCase().includes(searchText) ||
      question.category.name.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All Categories" ||
      question.category.name === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mt-16">
      {/* Search and Category Filter */}
      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-[1fr_240px]">
        <div>
          <label
            htmlFor="question-search"
            className="mb-3 block text-lg font-semibold text-gray-800"
          >
            Search Bible Questions
          </label>

          <input
            id="question-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions, topics, or categories..."
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 text-gray-800 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            {categories.map((categoryName) => (
              <option key={categoryName} value={categoryName}>
                {categoryName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mx-auto mt-8 max-w-4xl">
        <p className="text-gray-600">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filteredQuestions.length}
          </span>{" "}
          {filteredQuestions.length === 1 ? "question" : "questions"}
        </p>
      </div>

      {/* Results */}
      <div className="mx-auto mt-6 max-w-4xl">
        {filteredQuestions.length === 0 ? (
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
            {filteredQuestions.map((question) => (
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