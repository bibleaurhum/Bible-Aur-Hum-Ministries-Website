import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import QuestionForm from "@/components/admin/QuestionForm";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditQuestionPage({
  params,
}: PageProps) {
  const { id } = await params;

  const questionId = Number(id);

  const question = await prisma.question.findUnique({
    where: {
      id: questionId,
    },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });

  if (!question) {
    return <div>Question not found.</div>;
  }

  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const tags = await prisma.tag.findMany({
    orderBy: {
      name: "asc",
    },
  });

  async function updateQuestion(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const shortAnswer = formData.get("shortAnswer") as string;
    const answer = formData.get("answer") as string;
    const youtubeUrl = formData.get("youtubeUrl") as string;
    const seoTitle = formData.get("seoTitle") as string;
    const seoDescription = formData.get("seoDescription") as string;
    const categoryId = Number(formData.get("categoryId"));
    const featured = formData.get("featured") === "on";

    const status = formData.get("status") as
      | "DRAFT"
      | "PUBLISHED"
      | "ARCHIVED";

    const selectedTags = formData
      .getAll("tags")
      .map((id) => Number(id));

    await prisma.question.update({
      where: {
        id: questionId,
      },
      data: {
        title,
        slug,
        shortAnswer,
        answer,
        youtubeUrl: youtubeUrl || null,
        seoTitle: seoTitle || null,
        seoDescription: seoDescription || null,
        categoryId,
        featured,
        status,

        tags: {
          deleteMany: {},
          create: selectedTags.map((tagId) => ({
            tagId,
          })),
        },
      },
    });

    redirect("/admin/questions");
  }

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Edit Question
        </h1>

        <p className="mt-2 text-gray-500">
          Update your Bible question.
        </p>
      </div>

      <QuestionForm
        question={question}
        categories={categories}
        tags={tags}
        action={updateQuestion}
        submitLabel="Update Question"
      />
    </div>
  );
}