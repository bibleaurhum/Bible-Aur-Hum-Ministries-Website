import DashboardCard from "@/components/admin/DashboardCard";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const questionsCount = await prisma.question.count();
  const lecturesCount = await prisma.lecture.count();
  const categoriesCount = await prisma.category.count();

  const publishedQuestionsCount = await prisma.question.count({
    where: { status: "PUBLISHED" },
  });

  const publishedLecturesCount = await prisma.lecture.count({
    where: { status: "PUBLISHED" },
  });

  const publishedBibleStudiesCount = await prisma.bibleStudy.count({
    where: { status: "PUBLISHED" },
  });

  const publishedContentCount =
    publishedQuestionsCount +
    publishedLecturesCount +
    publishedBibleStudiesCount;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Overview
        </h2>

        <p className="mt-2 text-gray-500">
          Manage and monitor Bible Aur Hum Ministries.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          title="Questions"
          value={questionsCount}
          description="Total questions"
        />

        <DashboardCard
          title="Lectures"
          value={lecturesCount}
          description="Total lectures"
        />

        <DashboardCard
          title="Categories"
          value={categoriesCount}
          description="Total categories"
        />

        <DashboardCard
          title="Published Content"
          value={publishedContentCount}
          description="Published questions, lectures & Bible studies"
        />
      </div>
    </div>
  );
}