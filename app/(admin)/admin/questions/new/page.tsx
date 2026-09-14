import QuestionForm from "@/components/admin/QuestionForm";
import { prisma } from "@/lib/prisma";
import { createQuestion } from "./actions";

export default async function NewQuestionPage() {
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
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          New Question
        </h1>

        <p className="mt-2 text-gray-500">
          Create a new Bible question.
        </p>
      </div>

      <QuestionForm
  categories={categories}
  tags={tags}
  action={createQuestion}
  submitLabel="Save Question"
/>
    </div>
  );
}