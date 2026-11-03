import "server-only";

import fs from "node:fs";
import path from "node:path";
import { toJSON } from "usfm-js";
import { BIBLE_BOOKS } from "./books";

export type BibleVerse = {
  number: number;
  text: string;
};

type UsfmVerseObject = {
  type?: string;
  tag?: string;
  text?: string;
  content?: string;
  endMarkerChar?: string;
  nextChar?: string;
  children?: UsfmVerseObject[];
};

const BIBLE_DIRECTORIES: Record<"en" | "ur", string> = {
  ur: path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "data",
    "bible",
    "ur",
    "usfm"
  ),
  en: path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "data",
    "bible",
    "en",
    "usfm"
  ),
};

const BIBLE_FILE_SUFFIXES: Record<"en" | "ur", string> = {
  en: "engwebp",
  ur: "urdoucv",
};

// Verified filename numbers for all 66 books.
const BIBLE_FILE_NUMBERS: Record<"en" | "ur", Record<string, number>> = {
  en: {
    GEN: 2,
    EXO: 3,
    LEV: 4,
    NUM: 5,
    DEU: 6,
    JOS: 7,
    JDG: 8,
    RUT: 9,
    "1SA": 10,
    "2SA": 11,
    "1KI": 12,
    "2KI": 13,
    "1CH": 14,
    "2CH": 15,
    EZR: 16,
    NEH: 17,
    EST: 18,
    JOB: 19,
    PSA: 20,
    PRO: 21,
    ECC: 22,
    SNG: 23,
    ISA: 24,
    JER: 25,
    LAM: 26,
    EZK: 27,
    DAN: 28,
    HOS: 29,
    JOL: 30,
    AMO: 31,
    OBA: 32,
    JON: 33,
    MIC: 34,
    NAM: 35,
    HAB: 36,
    ZEP: 37,
    HAG: 38,
    ZEC: 39,
    MAL: 40,
    MAT: 70,
    MRK: 71,
    LUK: 72,
    JHN: 73,
    ACT: 74,
    ROM: 75,
    "1CO": 76,
    "2CO": 77,
    GAL: 78,
    EPH: 79,
    PHP: 80,
    COL: 81,
    "1TH": 82,
    "2TH": 83,
    "1TI": 84,
    "2TI": 85,
    TIT: 86,
    PHM: 87,
    HEB: 88,
    JAS: 89,
    "1PE": 90,
    "2PE": 91,
    "1JN": 92,
    "2JN": 93,
    "3JN": 94,
    JUD: 95,
    REV: 96,
  },

  ur: {
    GEN: 2,
    EXO: 3,
    LEV: 4,
    NUM: 5,
    DEU: 6,
    JOS: 7,
    JDG: 8,
    RUT: 9,
    "1SA": 10,
    "2SA": 11,
    "1KI": 12,
    "2KI": 13,
    "1CH": 14,
    "2CH": 15,
    EZR: 16,
    NEH: 17,
    EST: 18,
    JOB: 19,
    PSA: 20,
    PRO: 21,
    ECC: 22,
    SNG: 23,
    ISA: 24,
    JER: 25,
    LAM: 26,
    EZK: 27,
    DAN: 28,
    HOS: 29,
    JOL: 30,
    AMO: 31,
    OBA: 32,
    JON: 33,
    MIC: 34,
    NAM: 35,
    HAB: 36,
    ZEP: 37,
    HAG: 38,
    ZEC: 39,
    MAL: 40,
    MAT: 46,
    MRK: 47,
    LUK: 48,
    JHN: 49,
    ACT: 74,
    ROM: 51,
    "1CO": 52,
    "2CO": 53,
    GAL: 54,
    EPH: 55,
    PHP: 56,
    COL: 57,
    "1TH": 58,
    "2TH": 59,
    "1TI": 60,
    "2TI": 61,
    TIT: 62,
    PHM: 63,
    HEB: 64,
    JAS: 65,
    "1PE": 90,
    "2PE": 67,
    "1JN": 68,
    "2JN": 69,
    "3JN": 94,
    JUD: 71,
    REV: 72,
  },
};

function getBibleFilePath(
  language: "en" | "ur",
  bookCode: string
): string {
  const fileNumber = BIBLE_FILE_NUMBERS[language][bookCode];

  if (fileNumber === undefined) {
    throw new Error(
      `Bible filename mapping not found for ${bookCode} (${language}).`
    );
  }

  const fileName = `${String(fileNumber).padStart(2, "0")}-${bookCode}${BIBLE_FILE_SUFFIXES[language]}.usfm`;

  return path.join(BIBLE_DIRECTORIES[language], fileName);
}

function extractVerseText(objects: UsfmVerseObject[]): string {
  return objects
    .map((item) => {
      if (
        item.type === "text" ||
        item.type === "quote" ||
        item.type === "word"
      ) {
        return item.text ?? "";
      }

      if (item.tag === "+w") {
        return (item.content ?? "").split("|")[0];
      }

      if (item.tag === "+w*") {
        return item.content
          ? (item.endMarkerChar ?? "") + item.content
          : item.endMarkerChar ?? "";
      }

      if (item.type === "footnote") {
        return item.nextChar ?? "";
      }

      if (item.children) {
        return extractVerseText(item.children);
      }

      return "";
    })
    .join("");
}

export function getBibleChapter(
  language: "en" | "ur",
  bookCode: string,
  chapterNumber: number
): BibleVerse[] {
  const normalizedBookCode = bookCode.toUpperCase();

  if (!Number.isInteger(chapterNumber) || chapterNumber < 1) {
    throw new Error("Invalid Bible chapter number.");
  }

  const book = BIBLE_BOOKS.find(
    (item) => item.code === normalizedBookCode
  );

  if (!book) {
    throw new Error(`Bible book not found: ${normalizedBookCode}.`);
  }

  const filePath = getBibleFilePath(language, normalizedBookCode);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Bible file not found: ${path.basename(filePath)}.`);
  }

  const usfmText = fs.readFileSync(filePath, "utf8");
  const parsedBible = toJSON(usfmText);

  const chapter = parsedBible.chapters?.[String(chapterNumber)];

  if (!chapter) {
    throw new Error(
      `Chapter ${chapterNumber} was not found in ${normalizedBookCode}.`
    );
  }

  return Object.entries(chapter)
    .filter(([verseNumber]) => /^\d+$/.test(verseNumber))
    .map(([verseNumber, verseData]) => {
      const verseObjects =
        (verseData.verseObjects ?? []) as UsfmVerseObject[];

      const text = extractVerseText(verseObjects)
        .replace(/\s+/g, " ")
        .trim();

      return {
        number: Number(verseNumber),
        text,
      };
    })
    .filter((verse) => verse.text.length > 0);
}

export type BibleSearchResult = {
  bookCode: string;
  bookNameEn: string;
  bookNameUr: string;
  chapter: number;
  verse: number;
  text: string;
};

export function searchBible(
  language: "en" | "ur",
  query: string,
  limit = 50
): BibleSearchResult[] {
  const searchTerm = query.trim().toLocaleLowerCase();

  if (searchTerm.length < 2) {
    return [];
  }

  const results: BibleSearchResult[] = [];

  for (const book of BIBLE_BOOKS) {
    const filePath = getBibleFilePath(language, book.code);

    if (!fs.existsSync(filePath)) {
      continue;
    }

    const usfmText = fs.readFileSync(filePath, "utf8");
    const parsedBible = toJSON(usfmText);

    for (const [chapterNumber, chapterData] of Object.entries(
      parsedBible.chapters ?? {}
    )) {
      if (!/^\d+$/.test(chapterNumber)) continue;

      for (const [verseNumber, verseData] of Object.entries(chapterData)) {
        if (!/^\d+$/.test(verseNumber)) continue;

        const verseObjects =
          (verseData.verseObjects ?? []) as UsfmVerseObject[];

        const text = extractVerseText(verseObjects)
          .replace(/\s+/g, " ")
          .trim();

        if (!text.toLocaleLowerCase().includes(searchTerm)) {
          continue;
        }

        results.push({
          bookCode: book.code,
          bookNameEn: book.nameEn,
          bookNameUr: book.nameUr,
          chapter: Number(chapterNumber),
          verse: Number(verseNumber),
          text,
        });

        if (results.length >= limit) {
          return results;
        }
      }
    }
  }

  return results;
}