
"use client";

import { useState } from "react";
import { BIBLE_BOOKS } from "@/lib/bible/books";

type BibleVerse = {
  number: number;
  text: string;
};

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

  const selectedBook = BIBLE_BOOKS.find(
    (book) => book.code === bookCode
  ) ?? BIBLE_BOOKS[0];

  const isUrdu = language === "ur";

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
        isUrdu
          ? "باب لوڈ نہیں ہو سکا۔ دوبارہ کوشش کریں۔"
          : "Could not load the chapter. Please try again."
      );
    } finally {
      setLoading(false);
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

        {/* Chapter Heading */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-200 bg-slate-900 px-6 py-7 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {bookName} {chapter}
            </h2>

            <p className="mt-2 text-sm text-slate-300">
              {isUrdu
                ? "مقدس بائبل"
                : "The Holy Bible"}
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
                {isUrdu ? "اس باب میں کوئی آیت دستیاب نہیں۔" : "No verses available."}
              </p>
            )}

            {!loading && !error && verses.length > 0 && (
              <div className="space-y-5">
                {verses.map((verse) => (
                  <p
                    key={verse.number}
                    className={`text-lg leading-9 text-slate-800 ${
                      isUrdu ? "text-right" : "text-left"
                    }`}
                    dir={isUrdu ? "rtl" : "ltr"}
                  >
                    <span className="me-2 inline-block text-sm font-bold text-red-600">
                      {verse.number}
                    </span>
                    {verse.text}
                  </p>
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
