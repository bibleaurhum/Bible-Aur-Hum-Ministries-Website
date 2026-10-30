
"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (
    session?.user?.email?.toLowerCase() !==
    "bibleaurhum@gmail.com"
  ) {
    throw new Error("Unauthorized access.");
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createQuestion(formData: FormData) {
  await requireAdmin();

  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const shortAnswer = formData.get("shortAnswer") as string;
  const answer = formData.get("answer") as string;
  const bibleReferences =
    formData.get("bibleReferences")?.toString().trim() || null;
  const youtubeUrl = formData.get("youtubeUrl") as string;
  const categoryId = Number(formData.get("categoryId"));
  const seoTitle = formData.get("seoTitle") as string;
  const seoDescription = formData.get("seoDescription") as string;
  const featured = formData.get("featured") === "on";

  const status = formData.get("status") as
    | "DRAFT"
    | "PUBLISHED"
    | "ARCHIVED";

  const typedTags = (formData.get("newTags")?.toString() || "")
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);

  const selectedTagIds = formData
    .getAll("tags")
    .map((id) => Number(id))
    .filter((id) => Number.isInteger(id) && id > 0);

  const tagIds = new Set(selectedTagIds);

  for (const name of typedTags) {
    const tagSlug = slugify(name);

    if (!tagSlug) continue;

    const tag = await prisma.tag.upsert({
      where: { slug: tagSlug },
      update: {},
      create: {
        name,
        slug: tagSlug,
      },
    });

    tagIds.add(tag.id);
  }

  await prisma.question.create({
    data: {
      title,
      slug,
      shortAnswer,
      answer,
      bibleReferences,
      youtubeUrl: youtubeUrl || null,
      categoryId,
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
      featured,
      status,
      tags: {
        create: [...tagIds].map((tagId) => ({
          tag: {
            connect: { id: tagId },
          },
        })),
      },
    },
  });

  redirect("/admin/questions");
}

export async function deleteQuestion(
  questionId: number,
  _formData: FormData
) {
  await requireAdmin();

  await prisma.question.delete({
    where: {
      id: questionId,
    },
  });

  redirect("/admin/questions");
}
