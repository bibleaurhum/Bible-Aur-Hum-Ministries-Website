"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createQuestion(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const shortAnswer = formData.get("shortAnswer") as string;
  const answer = formData.get("answer") as string;
  const youtubeUrl = formData.get("youtubeUrl") as string;
  const categoryId = Number(formData.get("categoryId"));
  const seoTitle = formData.get("seoTitle") as string;
  const seoDescription = formData.get("seoDescription") as string;
  const featured = formData.get("featured") === "on";

  const status = formData.get("status") as
    | "DRAFT"
    | "PUBLISHED"
    | "ARCHIVED";

  const tags = formData
    .getAll("tags")
    .map((id) => Number(id));

  await prisma.question.create({
    data: {
      title,
      slug,
      shortAnswer,
      answer,
      youtubeUrl: youtubeUrl || null,
      categoryId,
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
      featured,
      status,

      tags: {
        create: tags.map((tagId) => ({
          tag: {
            connect: {
              id: tagId,
            },
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
  await prisma.question.delete({
    where: {
      id: questionId,
    },
  });

  redirect("/admin/questions");
}