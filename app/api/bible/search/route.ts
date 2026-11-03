
import { NextResponse } from "next/server";
import { searchBible } from "@/lib/bible/reader";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const language = searchParams.get("language");
    const query = searchParams.get("q")?.trim() ?? "";
    const limit = Number(searchParams.get("limit") ?? 50);

    if (language !== "en" && language !== "ur") {
      return NextResponse.json(
        { error: "Invalid Bible language." },
        { status: 400 }
      );
    }

    if (query.length < 2) {
      return NextResponse.json(
        { error: "Please enter at least 2 characters." },
        { status: 400 }
      );
    }

    if (query.length > 100) {
      return NextResponse.json(
        { error: "Search query is too long." },
        { status: 400 }
      );
    }

    if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
      return NextResponse.json(
        { error: "Invalid result limit." },
        { status: 400 }
      );
    }

    const results = searchBible(
      language,
      query,
      limit
    );

    return NextResponse.json({
      query,
      language,
      count: results.length,
      results,
    });
  } catch (error) {
    console.error("Bible search API error:", error);

    return NextResponse.json(
      { error: "Unable to search the Bible." },
      { status: 500 }
    );
  }
}
