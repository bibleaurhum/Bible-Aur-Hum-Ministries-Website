
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

export async function createTag(formData: FormData) {
  await requireAdmin();

  const name = formData.get("name")?.toString().trim() || "";

  if (!name) {
    throw new Error("Tag name is required.");
  }

  const slug = slugify(name);

  const existing = await prisma.tag.findFirst({
    where: {
      OR: [{ name }, { slug }],
    },
  });

  if (existing) {
    throw new Error("This tag already exists.");
  }

  await prisma.tag.create({
    data: {
      name,
      slug,
    },
  });

  redirect("/admin/tags");
}

export async function updateTag(id: number, formData: FormData) {
  await requireAdmin();

  const name = formData.get("name")?.toString().trim() || "";

  if (!name) {
    throw new Error("Tag name is required.");
  }

  const slug = slugify(name);

  const existing = await prisma.tag.findFirst({
    where: {
      id: { not: id },
      OR: [{ name }, { slug }],
    },
  });

  if (existing) {
    throw new Error("Another tag with this name already exists.");
  }

  await prisma.tag.update({
    where: { id },
    data: {
      name,
      slug,
    },
  });

  redirect("/admin/tags");
}

export async function deleteTag(id: number) {
  await requireAdmin();

  await prisma.tag.delete({
    where: { id },
  });

  redirect("/admin/tags");
}
