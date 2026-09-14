export interface Question {
  id: number;

  slug: string;

  question: string;

  category: string;

  subCategory?: string;

  featured: boolean;

  difficulty?: "Beginner" | "Intermediate" | "Advanced";

  language?: "English" | "Urdu";

  readingTime?: string;

  author?: string;

  lastUpdated?: string;

  seoTitle?: string;

  seoDescription?: string;

  keywords?: string[];

  bibleReferences?: string[];

  shortAnswer?: string;

  answer?: string;

  youtube?: string;

  relatedQuestions?: string[];
}