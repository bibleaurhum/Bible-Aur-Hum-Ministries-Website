"use client";

type TitleFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function TitleField({
  value,
  onChange,
}: TitleFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="title"
        className="block text-sm font-semibold text-gray-700"
      >
        Title
      </label>

      <input
        id="title"
        name="title"
        type="text"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Example: Who Created Satan?"
        autoComplete="off"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base shadow-sm transition-all outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
      />

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>
          This title will appear on your website and in search engines.
        </span>

        <span>{value.length} characters</span>
      </div>
    </div>
  );
}