import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const category = await prisma.category.findUnique({
    where: {
      slug,
    },
  });

  if (!category) {
    return {
      title: "Category Not Found | Bible Aur Hum",
      description: "This Bible question category could not be found.",
    };
  }

  return {
    title: `${category.name} Bible Questions | Bible Aur Hum`,
    description:
      category.description ||
      `Explore biblical questions and answers about ${category.name}.`,
  };
}
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = await prisma.category.findUnique({
    where: {
      slug,
    },
    include: {
      questions: {
        where: {
          status: "PUBLISHED",
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!category) {
  notFound();
}
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-semibold uppercase tracking-[0.4em] text-red-600">
          Category
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          {category.name}
        </h1>

        {category.description && (
          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            {category.description}
          </p>
        )}

        <div className="mt-12 space-y-6">
          {category.questions.map((question) => (
            <Link
              key={question.id}
              href={`/questions/${question.slug}`}
              className="block rounded-2xl bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-blue-700">
                {question.title}
              </h2>

              <p className="mt-4 text-gray-600">
                {question.shortAnswer}
              </p>

              <span className="mt-6 inline-block font-semibold text-red-600">
                Read Full Answer →
              </span>
            </Link>
          ))}

          {category.questions.length === 0 && (
            <div className="rounded-xl bg-white p-10 text-center shadow">
              <h2 className="text-2xl font-bold">
                No questions found
              </h2>

              <p className="mt-4 text-gray-600">
                There are no published questions in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}