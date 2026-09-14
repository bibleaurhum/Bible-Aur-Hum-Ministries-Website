"use client";

import { useEffect, useState } from "react";

type SlugFieldProps = {
  title: string;
  value: string;
  onChange: (value: string) => void;
};

function generateSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-");
}

export default function SlugField({
  title,
  value,
  onChange,
}: SlugFieldProps) {
  const [manualEdit, setManualEdit] = useState(false);

  useEffect(() => {
    if (!manualEdit) {
      onChange(generateSlug(title));
    }
  }, [title, manualEdit, onChange]);

  return (
    <div className="space-y-2">
      <label
        htmlFor="slug"
        className="block text-sm font-semibold text-gray-700"
      >
        URL Slug
      </label>

      <input
        id="slug"
        name="slug"
        type="text"
        value={value}
        onChange={(e) => {
          setManualEdit(true);
          onChange(generateSlug(e.target.value));
        }}
        placeholder="who-created-satan"
        autoComplete="off"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
      />

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>
          URL Preview:
        </span>

        <span className="font-medium text-blue-700">
          /questions/{value || "your-slug"}
        </span>
      </div>

      <button
        type="button"
        onClick={() => {
          setManualEdit(false);
          onChange(generateSlug(title));
        }}
        className="text-xs font-medium text-blue-600 hover:underline"
      >
        Regenerate from title
      </button>
    </div>
  );
}