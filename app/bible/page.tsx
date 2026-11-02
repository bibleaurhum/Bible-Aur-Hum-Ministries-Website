
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BibleReader from "./BibleReader";
import { getBibleChapter } from "@/lib/bible/reader";

export const metadata: Metadata = {
  title: "Online Bible",
  description:
    "Read the Holy Bible in English and Urdu. Explore all 66 books and chapters with Bible Aur Hum Ministries.",
  alternates: {
    canonical: "/bible",
  },
};

export default function BiblePage() {
  const initialVerses = getBibleChapter("en", "GEN", 1);

  return (
    <>
      <Header />

      <BibleReader
        initialLanguage="en"
        initialBook="GEN"
        initialChapter={1}
        initialVerses={initialVerses}
      />

      <Footer />
    </>
  );
}
