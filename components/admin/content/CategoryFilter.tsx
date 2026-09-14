"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

type Category = {
  id: number;
  name: string;
};

type CategoryFilterProps = {
  categories: Category[];
};

export default function CategoryFilter({
  categories,
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const selectedCategory =
    searchParams.get("category") ?? "";

  function handleChange(value: string) {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  }

  return (
    <div className="w-64">
      <select
        value={selectedCategory}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
      >
        <option value="">
          All Categories
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

      {isPending && (
        <p className="mt-2 text-xs text-gray-500">
          Filtering...
        </p>
      )}
    </div>
  );
}