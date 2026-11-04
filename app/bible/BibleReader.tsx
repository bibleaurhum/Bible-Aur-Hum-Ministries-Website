
"use client";

import { useState } from "react";
import { Copy, MessageCircle } from "lucide-react";
import { BIBLE_BOOKS } from "@/lib/bible/books";

type BibleVerse = {
  number: number;
  text: string;
};

type BibleSearchResult = {
  bookCode: string;
  bookNameEn: string;
  bookNameUr: string;
  chapter: number;
  verse: number;
  text: string;
};
function highlightSearchTerm(text: string, query: string) {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return text;
  }

  const escapedQuery = trimmedQuery.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  const parts = text.split(
    new RegExp(`(${escapedQuery})`, "gi")
  );

  return parts.map((part, index) =>
    part.toLocaleLowerCase() === trimmedQuery.toLocaleLowerCase() ? (
      <mark
        key={index}
        className="rounded bg-yellow-200 px-1 font-semibold text-slate-900"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}
type BibleReaderProps = {
  initialLanguage: "en" | "ur";
  initialBook: string;
  initialChapter: number;
  initialVerses: BibleVerse[];
};

export default function BibleReader({
  initialLanguage,
  initialBook,
  initialChapter,
  initialVerses,
}: BibleReaderProps) {
  const [language, setLanguage] = useState<"en" | "ur">(initialLanguage);
  const [bookCode, setBookCode] = useState(initialBook);
  const [chapter, setChapter] = useState(initialChapter);
  const [verses, setVerses] = useState(initialVerses);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BibleSearchResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

  const selectedBook = BIBLE_BOOKS.find(
    (book) => book.code === bookCode
  ) ?? BIBLE_BOOKS[0];

  const isUrdu = language === "ur";
  function shareVerse(verse: BibleVerse) {
    const reference = `${bookName} ${chapter}:${verse.number}`;

    const text = `${verse.text}\n\n— ${reference}\nBible Aur Hum Ministries`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  async function copyVerse(verse: BibleVerse) {
    const reference = `${bookName} ${chapter}:${verse.number}`;

    const text = `${verse.text}\n\n— ${reference}\nBible Aur Hum Ministries`;

    try {
      await navigator.clipboard.writeText(text);
      alert(isUrdu ? "آیت کاپی ہو گئی!" : "Verse copied successfully!");
    } catch {
      alert(
        isUrdu
          ? "کاپی نہیں ہو سکی۔ دوبارہ کوشش کریں۔"
          : "Could not copy the verse. Please try again."
      );
    }
  }
  const oldTestament = BIBLE_BOOKS.filter(
    (book) => book.testament === "OT"
  );

  const newTestament = BIBLE_BOOKS.filter(
    (book) => book.testament === "NT"
  );

  async function loadChapter(
    nextLanguage: "en" | "ur",
    nextBook: string,
    nextChapter: number
  ) {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/bible/${nextLanguage}/${nextBook}/${nextChapter}`
      );

      if (!response.ok) {
        throw new Error("Unable to load this chapter.");
      }

      const data: BibleVerse[] = await response.json();

      setLanguage(nextLanguage);
      setBookCode(nextBook);
      setChapter(nextChapter);
      setVerses(data);
    } catch {
      setError(
        nextLanguage === "ur"
          ? "باب لوڈ نہیں ہو سکا۔ دوبارہ کوشش کریں۔"
          : "Could not load the chapter. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function searchVerses(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchQuery.trim();

    if (query.length < 2) {
      setSearchError(
        isUrdu
          ? "براہِ کرم کم از کم دو حروف لکھیں۔"
          : "Please enter at least 2 characters."
      );
      setSearchResults([]);
      return;
    }

    setSearching(true);
    setSearchError("");
    setSearchResults([]);

    try {
      const response = await fetch(
        `/api/bible/search?language=${language}&q=${encodeURIComponent(query)}&limit=50`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Search failed.");
      }

      setSearchResults(data.results as BibleSearchResult[]);
    } catch {
      setSearchError(
        isUrdu
          ? "تلاش مکمل نہیں ہو سکی۔ دوبارہ کوشش کریں۔"
          : "Search could not be completed. Please try again."
      );
    } finally {
      setSearching(false);
    }
  }

  const bookName = isUrdu
    ? selectedBook.nameUr
    : selectedBook.nameEn;

  return (
    <main
      className="min-h-screen bg-slate-50 py-12"
      dir={isUrdu ? "rtl" : "ltr"}
      lang={isUrdu ? "ur" : "en"}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Page Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Bible Aur Hum Ministries
          </p>

          <h1 className="text-3xl font-bold text-slate-900 sm:text-5xl">
            {isUrdu ? "آن لائن بائبل" : "Online Bible"}
          </h1>

          <p className="mt-4 text-slate-600">
            {isUrdu
              ? "خدا کے کلام کو پڑھیں اور اس کا مطالعہ کریں"
              : "Read and study the Word of God"}
          </p>
        </div>

        {/* Selection Panel */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="grid gap-5 sm:grid-cols-3">

            {/* Language */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                {isUrdu ? "زبان منتخب کریں" : "Select Language"}
              </label>

              <select
                value={language}
                disabled={loading}
                onChange={(event) =>
                  loadChapter(
                    event.target.value as "en" | "ur",
                    bookCode,
                    chapter
                  )
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-red-500"
              >
                <option value="en">English</option>
                <option value="ur">اردو</option>
              </select>
            </div>

            {/* Book */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                {isUrdu ? "کتاب منتخب کریں" : "Select Book"}
              </label>

              <select
                value={bookCode}
                disabled={loading}
                onChange={(event) =>
                  loadChapter(language, event.target.value, 1)
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-red-500"
              >
                <optgroup label={isUrdu ? "عہد نامہ قدیم" : "Old Testament"}>
                  {oldTestament.map((book) => (
                    <option key={book.code} value={book.code}>
                      {isUrdu ? book.nameUr : book.nameEn}
                    </option>
                  ))}
                </optgroup>

                <optgroup label={isUrdu ? "عہد نامہ جدید" : "New Testament"}>
                  {newTestament.map((book) => (
                    <option key={book.code} value={book.code}>
                      {isUrdu ? book.nameUr : book.nameEn}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Chapter */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                {isUrdu ? "باب منتخب کریں" : "Select Chapter"}
              </label>

              <select
                value={chapter}
                disabled={loading}
                onChange={(event) =>
                  loadChapter(
                    language,
                    bookCode,
                    Number(event.target.value)
                  )
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-red-500"
              >
                {Array.from(
                  { length: selectedBook.chapters },
                  (_, index) => index + 1
                ).map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Bible Search */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-4 text-xl font-bold text-slate-900">
            {isUrdu ? "بائبل میں تلاش کریں" : "Search the Bible"}
          </h2>

          <form onSubmit={searchVerses} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={
                isUrdu
                  ? "کوئی لفظ یا عبارت لکھیں..."
                  : "Enter a word or phrase..."
              }
              className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none focus:border-red-500"
            />

            <button
              type="submit"
              disabled={searching}
              className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {searching
                ? isUrdu ? "تلاش جاری ہے..." : "Searching..."
                : isUrdu ? "تلاش کریں" : "Search"}
            </button>
          </form>

          {searchError && (
            <p className="mt-4 text-sm text-red-600">
              {searchError}
            </p>
          )}

          {!searching && searchResults.length > 0 && (
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-slate-600">
                {isUrdu
                  ? `نتائج: ${searchResults.length}`
                  : `Results: ${searchResults.length}`}
              </p>

              <div className="max-h-[500px] space-y-3 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <button
                    key={`${result.bookCode}-${result.chapter}-${result.verse}-${index}`}
                    type="button"
                    onClick={() =>
                      loadChapter(language, result.bookCode, result.chapter)
                    }
                    className="block w-full rounded-xl border border-slate-200 p-4 text-start transition hover:border-red-300 hover:bg-red-50"
                  >
                    <span className="mb-2 block font-bold text-red-700">
                      {isUrdu
                        ? `${result.bookNameUr} ${result.chapter}:${result.verse}`
                        : `${result.bookNameEn} ${result.chapter}:${result.verse}`}
                    </span>

                    <span
                      className="block leading-8 text-slate-700"
                      dir={isUrdu ? "rtl" : "ltr"}
                    >
                      {highlightSearchTerm(result.text, searchQuery)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {!searching &&
            searchQuery.trim().length >= 2 &&
            !searchError &&
            searchResults.length === 0 && (
              <p className="mt-4 text-sm text-slate-500">
                {isUrdu
                  ? "کوئی نتیجہ نہیں ملا۔"
                  : "No matching verses found."}
              </p>
            )}
        </section>

        {/* Chapter Heading */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-200 bg-slate-900 px-6 py-7 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {bookName} {chapter}
            </h2>

            <p className="mt-2 text-sm text-slate-300">
              {isUrdu ? "مقدس بائبل" : "The Holy Bible"}
            </p>
          </div>

          <div className="min-h-64 p-5 sm:p-8">

            {loading && (
              <p className="py-12 text-center text-slate-500">
                {isUrdu ? "باب لوڈ ہو رہا ہے..." : "Loading chapter..."}
              </p>
            )}

            {!loading && error && (
              <p className="py-12 text-center text-red-600">
                {error}
              </p>
            )}

            {!loading && !error && verses.length === 0 && (
              <p className="py-12 text-center text-slate-500">
                {isUrdu
                  ? "اس باب میں کوئی آیت دستیاب نہیں۔"
                  : "No verses available."}
              </p>
            )}

            {!loading && !error && verses.length > 0 && (
  <div className="space-y-6">
    {verses.map((verse) => (
      <div
        key={verse.number}
        className="border-b border-slate-100 pb-4 last:border-0"
      >
        <div className="flex items-start justify-between gap-3">
          <p
            className={`flex-1 text-lg leading-9 text-slate-800 ${
              isUrdu ? "text-right" : "text-left"
            }`}
            dir={isUrdu ? "rtl" : "ltr"}
          >
            <span className="me-2 inline-block text-sm font-bold text-red-600">
              {verse.number}
            </span>
            {verse.text}
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => copyVerse(verse)}
              title={isUrdu ? "آیت کاپی کریں" : "Copy verse"}
              aria-label={isUrdu ? "آیت کاپی کریں" : "Copy verse"}
              className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600"
            >
              <Copy size={18} />
            </button>

            <button
              type="button"
              onClick={() => shareVerse(verse)}
              title={isUrdu ? "واٹس ایپ پر شیئر کریں" : "Share on WhatsApp"}
              aria-label={isUrdu ? "واٹس ایپ پر شیئر کریں" : "Share on WhatsApp"}
              className="rounded-lg border border-slate-200 p-2 text-green-600 transition hover:border-green-300 hover:bg-green-50"
            >
              <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)}

          </div>
          {/* Previous / Next */}
          <div className="flex items-center justify-between gap-4 border-t border-slate-200 bg-slate-50 p-5">

            <button
              type="button"
              disabled={loading || chapter <= 1}
              onClick={() =>
                loadChapter(language, bookCode, chapter - 1)
              }
              className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isUrdu ? "← پچھلا باب" : "← Previous"}
            </button>

            <span className="text-sm font-semibold text-slate-600">
              {chapter} / {selectedBook.chapters}
            </span>

            <button
              type="button"
              disabled={loading || chapter >= selectedBook.chapters}
              onClick={() =>
                loadChapter(language, bookCode, chapter + 1)
              }
              className="rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isUrdu ? "اگلا باب →" : "Next →"}
            </button>

          </div>
        </section>

        {/* Copyright / Translation Notice */}
        <p className="mt-6 text-center text-xs leading-6 text-slate-500">
          {isUrdu
            ? "اردو ترجمہ: Open Urdu Contemporary Version (OUCV)۔"
            : "English translation: World English Bible (WEB)."}
        </p>

      </div>
    </main>
  );
}
