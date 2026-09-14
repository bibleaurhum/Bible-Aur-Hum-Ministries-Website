"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

type SearchBarProps = {
  placeholder?: string;
};

export default function SearchBar({
  placeholder = "Search...",
}: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState(
    searchParams.get("search") ?? ""
  );

  function handleSearch(value: string) {
    setSearch(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  }

  return (
    <div className="relative w-full max-w-md">
      <input
        type="search"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
        />
      </svg>

      {isPending && (
        <p className="mt-2 text-xs text-gray-500">
          Searching...
        </p>
      )}
    </div>
  );
}