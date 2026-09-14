"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createLecture(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const slug = String(formData.get("slug") || "").trim().toLowerCase();
  const shortDescription = String(formData.get("shortDescription") || "").trim();
  const youtubeId = String(formData.get("youtubeId") || "").trim();
  const categoryId = Number(formData.get("categoryId"));

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
      youtubeId,
      categoryId,
      status: "DRAFT",
      featured: false,
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
  const youtubeId = String(formData.get("youtubeId") || "").trim();
  const categoryId = Number(formData.get("categoryId"));
  const status = String(formData.get("status"));
  const featured = formData.get("featured") === "on";

  await prisma.lecture.update({
    where: {
      id,
    },
    data: {
      title,
      slug,
      shortDescription: shortDescription || null,
      youtubeId,
      categoryId,
      status: status as any,
      featured,
    },
  });

  redirect("/admin/lectures");
}