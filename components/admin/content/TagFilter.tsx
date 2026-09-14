"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

type Tag = {
  id: number;
  name: string;
};

type TagFilterProps = {
  tags: Tag[];
};

export default function TagFilter({
  tags,
}: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const selectedTag =
    searchParams.get("tag") ?? "";

  function handleChange(value: string) {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (value) {
      params.set("tag", value);
    } else {
      params.delete("tag");
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  }

  return (
    <div className="w-64">
      <select
        value={selectedTag}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
      >
        <option value="">
          All Tags
        </option>

        {tags.map((tag) => (
          <option
            key={tag.id}
            value={tag.id}
          >
            {tag.name}
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