import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { toJSON } from "usfm-js";

const require = createRequire(import.meta.url);
const { getBibleChapter } = require("../lib/bible/reader.ts");

const languages = ["en", "ur"];

for (const language of languages) {
  const suffix = language === "en" ? "engwebp" : "urdoucv";

  const directory = path.join(
    process.cwd(),
    "data",
    "bible",
    language,
    "usfm"
  );

  const files = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(`${suffix}.usfm`))
    .filter((file) => !file.includes("-FRT") && !file.includes("-GLO"));

  let totalChapters = 0;
  let passedChapters = 0;
  const failed = [];

  for (const file of files) {
    const filePath = path.join(directory, file);
    const usfmText = fs.readFileSync(filePath, "utf8");
    const parsedBible = toJSON(usfmText);

    const chapterNumbers = Object.keys(parsedBible.chapters ?? {})
      .filter((number) => /^\d+$/.test(number))
      .map(Number)
      .sort((a, b) => a - b);

    const bookCode = file
      .slice(file.indexOf("-") + 1)
      .replace(`${suffix}.usfm`, "");

    for (const chapterNumber of chapterNumbers) {
      totalChapters++;

      try {
        const verses = getBibleChapter(
          language,
          bookCode,
          chapterNumber
        );

        if (verses.length === 0) {
          failed.push(`${bookCode} chapter ${chapterNumber}: no verses`);
        } else {
          passedChapters++;
        }
      } catch (error) {
        failed.push(
          `${bookCode} chapter ${chapterNumber}: ${error.message}`
        );
      }
    }
  }

  console.log(`\n${language.toUpperCase()} BIBLE`);
  console.log(`Books checked: ${files.length}`);
  console.log(`Chapters checked: ${totalChapters}`);
  console.log(`Chapters passed: ${passedChapters}`);
  console.log(`Chapters failed: ${failed.length}`);

  if (failed.length > 0) {
    console.log("\nProblems:");
    failed.forEach((problem) => console.log(`- ${problem}`));
  }
}