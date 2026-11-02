
import { NextResponse } from "next/server";
import { getBibleChapter } from "@/lib/bible/reader";
import { BIBLE_BOOKS } from "@/lib/bible/books";

type RouteContext = {
  params: Promise<{
    language: string;
    book: string;
    chapter: string;
  }>;
};

export async function GET(
  _request: Request,
  { params }: RouteContext
) {
  try {
    const { language, book, chapter } = await params;

    if (language !== "en" && language !== "ur") {
      return NextResponse.json(
        { error: "Invalid Bible language." },
        { status: 400 }
      );
    }

    const selectedBook = BIBLE_BOOKS.find(
      (item) => item.code === book
    );

    if (!selectedBook) {
      return NextResponse.json(
        { error: "Invalid Bible book." },
        { status: 404 }
      );
    }

    const chapterNumber = Number(chapter);

    if (
      !Number.isInteger(chapterNumber) ||
      chapterNumber < 1 ||
      chapterNumber > selectedBook.chapters
    ) {
      return NextResponse.json(
        { error: "Invalid chapter number." },
        { status: 400 }
      );
    }

    const verses = getBibleChapter(
      language,
      book,
      chapterNumber
    );

    return NextResponse.json(verses);
  } catch (error) {
    console.error("Bible chapter API error:", error);

    return NextResponse.json(
      { error: "Unable to load Bible chapter." },
      { status: 500 }
    );
  }
}
