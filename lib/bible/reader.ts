import "server-only";

import fs from "node:fs";
import path from "node:path";
import { toJSON } from "usfm-js";

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
  ur: path.join(process.cwd(), "data", "bible", "ur", "usfm"),
  en: path.join(process.cwd(), "data", "bible", "en", "usfm"),
};

const BIBLE_FILE_SUFFIXES: Record<"en" | "ur", string> = {
  en: "engwebp",
  ur: "urdoucv",
};

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
  const suffix = BIBLE_FILE_SUFFIXES[language];

  if (!Number.isInteger(chapterNumber) || chapterNumber < 1) {
    throw new Error("Invalid Bible chapter number.");
  }

  const matchingFiles = fs
    .readdirSync(BIBLE_DIRECTORIES[language])
    .filter((file) => file.endsWith(`${suffix}.usfm`));

  const fileName = matchingFiles.find((file) =>
    file.includes(`-${normalizedBookCode}${suffix}.usfm`)
  );

  if (!fileName) {
    throw new Error(
      `Bible book not found: ${normalizedBookCode} (${language}).`
    );
  }

  const filePath = path.join(BIBLE_DIRECTORIES[language], fileName);
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