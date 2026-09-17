"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createLecture(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const slug = String(formData.get("slug") || "").trim().toLowerCase();
  const shortDescription = String(formData.get("shortDescription") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const youtubeId = String(formData.get("youtubeId") || "").trim();
  const thumbnail = String(formData.get("thumbnail") || "").trim();
  const duration = String(formData.get("duration") || "").trim();
  const speaker = String(formData.get("speaker") || "").trim();
  const bibleReference = String(formData.get("bibleReference") || "").trim();
  const seoTitle = String(formData.get("seoTitle") || "").trim();
  const seoDescription = String(formData.get("seoDescription") || "").trim();
  const categoryId = Number(formData.get("categoryId"));
  const status = String(formData.get("status") || "DRAFT");
  const featured = formData.get("featured") === "on";

  if (!title) throw new Error("Lecture title is required.");
  if (!slug) throw new Error("Slug is required.");
  if (!youtubeId) throw new Error("YouTube ID is required.");
  if (!categoryId) throw new Error("Category is required.");

  const existingLecture = await prisma.lecture.findUnique({
    where: { slug },
  });

  if (existingLecture) {
    throw new Error("A lecture with this slug already exists.");
  }

  await prisma.lecture.create({
    data: {
      title,
      slug,
      shortDescription: shortDescription || null,
      content: content || null,
      youtubeId,
      thumbnail: thumbnail || null,
      duration: duration || null,
      speaker: speaker || null,
      bibleReference: bibleReference || null,
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
      categoryId,
      status: status as any,
      featured,
    },
  });

  redirect("/admin/lectures");
}

export async function updateLecture(
  id: number,
  formData: FormData
) {
  const title = String(formData.get("title") || "").trim();
  const slug = String(formData.get("slug") || "").trim().toLowerCase();
  const shortDescription = String(formData.get("shortDescription") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const youtubeId = String(formData.get("youtubeId") || "").trim();
  const thumbnail = String(formData.get("thumbnail") || "").trim();
  const duration = String(formData.get("duration") || "").trim();
  const speaker = String(formData.get("speaker") || "").trim();
  const bibleReference = String(formData.get("bibleReference") || "").trim();
  const seoTitle = String(formData.get("seoTitle") || "").trim();
  const seoDescription = String(formData.get("seoDescription") || "").trim();
  const categoryId = Number(formData.get("categoryId"));
  const status = String(formData.get("status") || "DRAFT");
  const featured = formData.get("featured") === "on";

  if (!title) throw new Error("Lecture title is required.");
  if (!slug) throw new Error("Slug is required.");
  if (!youtubeId) throw new Error("YouTube ID is required.");
  if (!categoryId) throw new Error("Category is required.");

  const existingLecture = await prisma.lecture.findFirst({
    where: {
      slug,
      NOT: {
        id,
      },
    },
  });

  if (existingLecture) {
    throw new Error("A lecture with this slug already exists.");
  }

  await prisma.lecture.update({
    where: {
      id,
    },
    data: {
      title,
      slug,
      shortDescription: shortDescription || null,
      content: content || null,
      youtubeId,
      thumbnail: thumbnail || null,
      duration: duration || null,
      speaker: speaker || null,
      bibleReference: bibleReference || null,
      seoTitle: seoTitle || null,
      seoDescription: seoDescription || null,
      categoryId,
      status: status as any,
      featured,
    },
  });

  redirect("/admin/lectures");
}
