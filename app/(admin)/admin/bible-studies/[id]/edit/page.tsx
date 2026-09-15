import { prisma } from "@/lib/prisma";
import BibleStudyForm from "@/components/admin/BibleStudyForm";
import { redirect, notFound } from "next/navigation";

type EditBibleStudyPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditBibleStudyPage({
  params,
}: EditBibleStudyPageProps) {
  const { id } = await params;
  const bibleStudyId = Number(id);

  if (Number.isNaN(bibleStudyId)) {
    notFound();
  }

  const [bibleStudy, categories, tags] = await Promise.all([
    prisma.bibleStudy.findUnique({
      where: { id: bibleStudyId },
      include: {
        tags: true,
      },
    }),
    prisma.category.findMany({
      orderBy: { name: "asc" },
    }),
    prisma.tag.findMany({
      orderBy: { name: "asc" },
    }),
  ]);

  if (!bibleStudy) {
    notFound();
  }

  async function updateBibleStudy(formData: FormData) {
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
    const statusValue = String(formData.get("status") ?? "DRAFT");

    const status =
      statusValue === "PUBLISHED" || statusValue === "ARCHIVED"
        ? statusValue
        : "DRAFT";

    const featured = formData.get("featured") === "true";

    const tagIds = formData
      .getAll("tagIds")
      .map((value) => Number(value))
      .filter((value) => !Number.isNaN(value));

    if (!title || !slug || !categoryId) {
      throw new Error("Title, slug, and category are required.");
    }

    await prisma.bibleStudy.update({
      where: { id: bibleStudyId },
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
          deleteMany: {},
          create: tagIds.map((tagId) => ({ tagId })),
        },
      },
    });

    redirect("/admin/bible-studies");
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Edit Bible Study
        </h1>
        <p className="mt-2 text-gray-500">
          Update this Bible study and its publishing settings.
        </p>
      </div>

      <BibleStudyForm
        categories={categories}
        tags={tags}
        action={updateBibleStudy}
        submitLabel="Update Bible Study"
        initialData={{
          title: bibleStudy.title,
          slug: bibleStudy.slug,
          shortDescription: bibleStudy.shortDescription ?? "",
          content: bibleStudy.content ?? "",
          featuredImage: bibleStudy.featuredImage ?? "",
          bibleReference: bibleStudy.bibleReference ?? "",
          seoTitle: bibleStudy.seoTitle ?? "",
          seoDescription: bibleStudy.seoDescription ?? "",
          categoryId: bibleStudy.categoryId,
          status: bibleStudy.status,
          featured: bibleStudy.featured,
          tagIds: bibleStudy.tags.map((tag) => tag.tagId),
        }}
      />
    </div>
  );
}