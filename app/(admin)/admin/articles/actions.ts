"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createArticle(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const slug = String(formData.get("slug") || "")
    .trim()
    .toLowerCase();

  const shortDescription = String(
    formData.get("shortDescription") || ""
  ).trim();

  const content = String(
    formData.get("content") || ""
  ).trim();

  const featuredImage = String(
    formData.get("featuredImage") || ""
  ).trim();

  const bibleReference = String(
    formData.get("bibleReference") || ""
  ).trim();

  const seoTitle = String(
    formData.get("seoTitle") || ""
  ).trim();

  const seoDescription = String(
    formData.get("seoDescription") || ""
  ).trim();

  const categoryId = Number(
    formData.get("categoryId")
  );

  const status = String(
    formData.get("status") || "DRAFT"
  );

  const featured =
    formData.get("featured") === "on";

  if (!title) {
    throw new Error("Article title is required.");
  }

  if (!slug) {
    throw new Error("Slug is required.");
  }

  if (!categoryId) {
    throw new Error("Category is required.");
  }

  const existingArticle =
    await prisma.article.findUnique({
      where: {
        slug,
      },
    });

  if (existingArticle) {
    throw new Error(
      "An article with this slug already exists."
    );
  }

  await prisma.article.create({
    data: {
      title,
      slug,
      shortDescription:
        shortDescription || null,
      content: content || null,
      featuredImage:
        featuredImage || null,
      bibleReference:
        bibleReference || null,
      seoTitle: seoTitle || null,
      seoDescription:
        seoDescription || null,
      categoryId,
      status: status as any,
      featured,
    },
  });

  redirect("/admin/articles");
}

export async function updateArticle(
  id: number,
  formData: FormData
) {
  const title = String(formData.get("title") || "").trim();

  const slug = String(formData.get("slug") || "")
    .trim()
    .toLowerCase();

  const shortDescription = String(
    formData.get("shortDescription") || ""
  ).trim();

  const content = String(
    formData.get("content") || ""
  ).trim();

  const featuredImage = String(
    formData.get("featuredImage") || ""
  ).trim();

  const bibleReference = String(
    formData.get("bibleReference") || ""
  ).trim();

  const seoTitle = String(
    formData.get("seoTitle") || ""
  ).trim();

  const seoDescription = String(
    formData.get("seoDescription") || ""
  ).trim();

  const categoryId = Number(
    formData.get("categoryId")
  );

  const status = String(
    formData.get("status") || "DRAFT"
  );

  const featured =
    formData.get("featured") === "on";

  if (!title) {
    throw new Error("Article title is required.");
  }

  if (!slug) {
    throw new Error("Slug is required.");
  }

  if (!categoryId) {
    throw new Error("Category is required.");
  }

  const existingArticle =
    await prisma.article.findFirst({
      where: {
        slug,
        NOT: {
          id,
        },
      },
    });

  if (existingArticle) {
    throw new Error(
      "An article with this slug already exists."
    );
  }

  await prisma.article.update({
    where: {
      id,
    },
    data: {
      title,
      slug,
      shortDescription:
        shortDescription || null,
      content: content || null,
      featuredImage:
        featuredImage || null,
      bibleReference:
        bibleReference || null,
      seoTitle: seoTitle || null,
      seoDescription:
        seoDescription || null,
      categoryId,
      status: status as any,
      featured,
    },
  });

  redirect("/admin/articles");
}