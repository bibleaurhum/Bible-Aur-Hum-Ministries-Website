import { prisma } from "@/lib/prisma";
import BibleStudyForm from "@/components/admin/BibleStudyForm";
import { redirect } from "next/navigation";

export default async function NewBibleStudyPage() {
  const [categories, tags] = await Promise.all([
    prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    }),
    prisma.tag.findMany({
      orderBy: {
        name: "asc",
      },
    }),
  ]);

  async function createBibleStudy(formData: FormData) {
    "use server";

    const title = String(formData.get("title") ?? "").trim();
    const slug = String(formData.get("slug") ?? "").trim();
    const shortDescription = String(
      formData.get("shortDescription") ?? ""
    ).trim();
    const content = String(formData.get("content") ?? "").trim();
    const featuredImage = String(
      formData.get("featuredImage") ?? ""
    ).trim();
    const bibleReference = String(
      formData.get("bibleReference") ?? ""
    ).trim();
    const seoTitle = String(formData.get("seoTitle") ?? "").trim();
    const seoDescription = String(
      formData.get("seoDescription") ?? ""
    ).trim();

    const categoryId = Number(formData.get("categoryId"));

    const statusValue = String(
      formData.get("status") ?? "DRAFT"
    );

    const status =
      statusValue === "PUBLISHED" ||
      statusValue === "ARCHIVED"
        ? statusValue
        : "DRAFT";

    const featured = formData.get("featured") === "true";

    const tagIds = formData
      .getAll("tagIds")
      .map((value) => Number(value))
      .filter((value) => !Number.isNaN(value));

    if (!title || !slug || !categoryId) {
      throw new Error(
        "Title, slug, and category are required."
      );
    }

    const bibleStudy = await prisma.bibleStudy.create({
      data: {
        title,
        slug,
        shortDescription: shortDescription || null,
        content: content || null,
        featuredImage: featuredImage || null,
        bibleReference: bibleReference || null,
        seoTitle: seoTitle || null,
        seoDescription: seoDescription || null,
        categoryId,
        status,
        featured,
        tags: {
          create: tagIds.map((tagId) => ({
            tagId,
          })),
        },
      },
    });

    redirect(`/admin/bible-studies/${bibleStudy.id}/edit`);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          New Bible Study
        </h1>

        <p className="mt-2 text-gray-500">
          Create a new Bible study and biblical teaching resource.
        </p>
      </div>

      <BibleStudyForm
        categories={categories}
        tags={tags}
        action={createBibleStudy}
        submitLabel="Create Bible Study"
      />
    </div>
  );
}