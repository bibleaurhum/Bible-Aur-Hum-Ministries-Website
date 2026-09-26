import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.bibleaurhum.com";

  const [questions, lectures, bibleStudies, articles] =
    await Promise.all([
      prisma.question.findMany({
        where: {
          status: "PUBLISHED",
        },
        select: {
          slug: true,
          updatedAt: true,
        },
      }),

      prisma.lecture.findMany({
        where: {
          status: "PUBLISHED",
        },
        select: {
          slug: true,
          updatedAt: true,
        },
      }),

      prisma.bibleStudy.findMany({
        where: {
          status: "PUBLISHED",
        },
        select: {
          slug: true,
          updatedAt: true,
        },
      }),

      prisma.article.findMany({
        where: {
          status: "PUBLISHED",
        },
        select: {
          slug: true,
          updatedAt: true,
        },
      }),
    ]);

  const questionUrls: MetadataRoute.Sitemap =
    questions.map((question) => ({
      url: `${baseUrl}/questions/${question.slug}`,
      lastModified: question.updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const lectureUrls: MetadataRoute.Sitemap =
    lectures.map((lecture) => ({
      url: `${baseUrl}/lectures/${lecture.slug}`,
      lastModified: lecture.updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const bibleStudyUrls: MetadataRoute.Sitemap =
    bibleStudies.map((study) => ({
      url: `${baseUrl}/bible-study/${study.slug}`,
      lastModified: study.updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const articleUrls: MetadataRoute.Sitemap =
    articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: article.updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/questions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lectures`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bible-study`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sermons`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    ...questionUrls,
    ...lectureUrls,
    ...bibleStudyUrls,
    ...articleUrls,
  ];
}