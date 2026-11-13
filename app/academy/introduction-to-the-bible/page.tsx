
"use client";

import Link from "next/link";
import { useState } from "react";

const content = {
  en: {
    language: "English",
    back: "← Back to Academy",
    academy: "Bible Aur Hum Academy",
    certificate: "CERTIFICATE IN BIBLICAL STUDIES",
    title: "Introduction to the Bible",
    subtitle:
      "Begin your journey through Scripture. Discover the Bible's structure, history, central message, and importance for Christian faith and life.",
    level: "Foundational Level",
    duration: "2 Weeks",
    lessons: "6 Lessons",
    status: "Enrollment Not Yet Open",
    overview: "Module Overview",
    overviewTitle: "Build a Strong Foundation in Scripture",
    overviewText:
      "This module introduces students to the Bible as the foundational text of the Christian faith. Students will explore its structure, historical background, major sections, central message, and relevance to Christian life.",
    overviewText2:
      "Through six carefully organized lessons, learners will develop the basic knowledge and skills needed for further biblical and theological study.",
    glance: "Module at a Glance",
    program: "Certificate Program",
    programValue: "16 Weeks",
    module: "Module",
    moduleValue: "Module 1 of 8",
    length: "Module Duration",
    lengthValue: "2 Weeks",
    languageLabel: "Available Languages",
    languageValue: "English and Urdu",
    audience: "Intended Audience",
    audienceValue: "Bible students and church members",
    objectives: "Learning Objectives",
    objectivesTitle: "What You Will Learn",
    objectivesIntro:
      "By the end of this module, students should be able to:",
    goals: [
      "Explain what the Bible is and why it is important to Christianity.",
      "Describe how the Bible was written, preserved, and transmitted.",
      "Identify the main sections of the Old and New Testaments.",
      "Recognize the major themes of the biblical story.",
      "Understand the concepts of biblical inspiration and authority.",
      "Apply basic principles of responsible Bible study.",
    ],
    curriculum: "Module Curriculum",
    curriculumTitle: "Your Six Lessons",
    curriculumIntro:
      "Study these six lessons in sequence. Each lesson will include video teaching, written notes, Bible references, a knowledge quiz, and reflection questions.",
    lessonNames: [
      {
        title: "What Is the Bible?",
        urdu: "بائبل کیا ہے؟",
        description:
          "Discover the nature, purpose, structure, and central message of the Bible.",
      },
      {
        title: "How the Bible Came to Us",
        urdu: "بائبل ہم تک کیسے پہنچی؟",
        description:
          "Explore the writing, preservation, transmission, and history of the biblical books.",
      },
      {
        title: "Old Testament and New Testament",
        urdu: "عہدِ قدیم اور عہدِ جدید",
        description:
          "Understand the two major divisions of the Christian Bible and their relationship.",
      },
      {
        title: "Inspiration and Authority of Scripture",
        urdu: "کلامِ مقدس کا الہام اور اختیار",
        description:
          "Study what Christians mean when they describe Scripture as inspired and authoritative.",
      },
      {
        title: "Bible Translations, Manuscripts and Canon",
        urdu: "بائبل کے تراجم، مخطوطات اور کینن",
        description:
          "Learn about biblical manuscripts, translations, and the formation of the biblical canon.",
      },
      {
        title: "How to Study and Understand the Bible",
        urdu: "بائبل کا مطالعہ اور سمجھنے کا طریقہ",
        description:
          "Develop practical skills for reading Scripture carefully and understanding passages in context.",
      },
    ],
    resources: "What Each Lesson Will Include",
    resourcesList: [
      "English video lecture",
      "Urdu video lecture",
      "English written study notes",
      "Urdu written study notes",
      "Key Bible references",
      "Knowledge quiz and reflection questions",
    ],
    assessment: "Assessment Plan",
    assessmentText:
      "The planned module assessment will include knowledge quizzes and learning activities. The complete certificate program will also include assignments, a Bible interpretation project, and a final examination.",
    passing: "Planned Certificate Passing Mark",
    passingValue: "60%",
    development: "Course Development in Progress",
    developmentText:
      "This module is currently being developed. Enrollment is not yet open. Lesson materials, assessment arrangements, enrollment dates, and fees will be announced when confirmed.",
    qualification:
      "The planned Bible Aur Hum Academy award is a certificate of completion. It will not be represented as an accredited academic qualification.",
    contact: "Contact Us",
    explore: "Explore Academy",
  },

  ur: {
    language: "اردو",
    back: "← اکیڈمی پر واپس جائیں",
    academy: "بائبل اور ہم اکیڈمی",
    certificate: "سرٹیفکیٹ اِن بائبلیکل اسٹڈیز",
    title: "بائبل کا تعارف",
    subtitle:
      "کلامِ مقدس کے مطالعے کا آغاز کریں۔ بائبل کی ترتیب، تاریخ، مرکزی پیغام اور مسیحی ایمان اور زندگی میں اس کی اہمیت کو سمجھیں۔",
    level: "بنیادی سطح",
    duration: "2 ہفتے",
    lessons: "6 اسباق",
    status: "داخلے ابھی شروع نہیں ہوئے",
    overview: "ماڈیول کا تعارف",
    overviewTitle: "کلامِ مقدس کی مضبوط بنیاد قائم کریں",
    overviewText:
      "یہ ماڈیول طلبہ کو بائبل سے متعارف کراتا ہے، جو مسیحی ایمان کی بنیادی کتاب ہے۔ طلبہ بائبل کی ترتیب، تاریخی پس منظر، اہم حصوں، مرکزی پیغام اور مسیحی زندگی میں اس کی اہمیت کا مطالعہ کریں گے۔",
    overviewText2:
      "چھ منظم اسباق کے ذریعے طلبہ وہ بنیادی علم اور مہارتیں حاصل کریں گے جو مزید بائبلی اور علمِ الٰہیات کے مطالعے کے لیے ضروری ہیں۔",
    glance: "ماڈیول کی تفصیلات",
    program: "سرٹیفکیٹ پروگرام",
    programValue: "16 ہفتے",
    module: "ماڈیول",
    moduleValue: "8 میں سے پہلا ماڈیول",
    length: "ماڈیول کا دورانیہ",
    lengthValue: "2 ہفتے",
    languageLabel: "دستیاب زبانیں",
    languageValue: "انگریزی اور اردو",
    audience: "کن کے لیے؟",
    audienceValue: "بائبل کے طلبہ اور کلیسیا کے اراکین",
    objectives: "تعلیمی مقاصد",
    objectivesTitle: "آپ کیا سیکھیں گے؟",
    objectivesIntro: "اس ماڈیول کے اختتام پر طلبہ اس قابل ہوں گے کہ:",
    goals: [
      "وضاحت کریں کہ بائبل کیا ہے اور مسیحیت میں اس کی کیا اہمیت ہے۔",
      "بیان کریں کہ بائبل کیسے لکھی، محفوظ اور ہم تک منتقل ہوئی۔",
      "عہدِ قدیم اور عہدِ جدید کے اہم حصوں کی شناخت کریں۔",
      "بائبل کی کہانی کے بنیادی موضوعات کو پہچانیں۔",
      "بائبل کے الہام اور اختیار کے تصورات کو سمجھیں۔",
      "بائبل کے ذمہ دارانہ مطالعے کے بنیادی اصول اپنائیں۔",
    ],
    curriculum: "ماڈیول کا نصاب",
    curriculumTitle: "آپ کے چھ اسباق",
    curriculumIntro:
      "ان چھ اسباق کا ترتیب سے مطالعہ کریں۔ ہر سبق میں ویڈیو لیکچر، تحریری نوٹس، بائبل کے حوالہ جات، مختصر کوئز اور غور و فکر کے سوالات شامل ہوں گے۔",
    lessonNames: [
      {
        title: "What Is the Bible?",
        urdu: "بائبل کیا ہے؟",
        description:
          "بائبل کی حقیقت، مقصد، ترتیب اور مرکزی پیغام کو دریافت کریں۔",
      },
      {
        title: "How the Bible Came to Us",
        urdu: "بائبل ہم تک کیسے پہنچی؟",
        description:
          "بائبل کی کتابوں کی تحریر، حفاظت، منتقلی اور تاریخ کا مطالعہ کریں۔",
      },
      {
        title: "Old Testament and New Testament",
        urdu: "عہدِ قدیم اور عہدِ جدید",
        description:
          "مسیحی بائبل کے دو بڑے حصوں اور ان کے باہمی تعلق کو سمجھیں۔",
      },
      {
        title: "Inspiration and Authority of Scripture",
        urdu: "کلامِ مقدس کا الہام اور اختیار",
        description:
          "جانیں کہ مسیحی ایمان میں کلامِ مقدس کو الہامی اور بااختیار کیوں سمجھا جاتا ہے۔",
      },
      {
        title: "Bible Translations, Manuscripts and Canon",
        urdu: "بائبل کے تراجم، مخطوطات اور کینن",
        description:
          "بائبل کے قدیم مخطوطات، تراجم اور بائبلی کینن کی تشکیل کے بارے میں سیکھیں۔",
      },
      {
        title: "How to Study and Understand the Bible",
        urdu: "بائبل کا مطالعہ اور سمجھنے کا طریقہ",
        description:
          "کلامِ مقدس کو غور سے پڑھنے اور آیات کو ان کے سیاق و سباق میں سمجھنے کی عملی مہارتیں حاصل کریں۔",
      },
    ],
    resources: "ہر سبق میں کیا شامل ہوگا؟",
    resourcesList: [
      "انگریزی ویڈیو لیکچر",
      "اردو ویڈیو لیکچر",
      "انگریزی تحریری مطالعاتی نوٹس",
      "اردو تحریری مطالعاتی نوٹس",
      "بائبل کے اہم حوالہ جات",
      "علمی کوئز اور غور و فکر کے سوالات",
    ],
    assessment: "امتحانی طریقۂ کار",
    assessmentText:
      "اس ماڈیول کی مجوزہ جانچ میں علمی کوئز اور تعلیمی سرگرمیاں شامل ہوں گی۔ مکمل سرٹیفکیٹ پروگرام میں اسائنمنٹس، بائبل کی تشریح کا ایک عملی منصوبہ اور آخری امتحان بھی شامل ہوگا۔",
    passing: "سرٹیفکیٹ کے لیے مجوزہ کامیابی کا معیار",
    passingValue: "60%",
    development: "کورس کی تیاری جاری ہے",
    developmentText:
      "اس ماڈیول کی تیاری جاری ہے۔ داخلے ابھی شروع نہیں ہوئے۔ اسباق کا مواد، امتحانی انتظامات، داخلے کی تاریخیں اور فیس کی تفصیلات کی تصدیق کے بعد اعلان کیا جائے گا۔",
    qualification:
      "بائبل اور ہم اکیڈمی کی مجوزہ سند تکمیلِ کورس کا سرٹیفکیٹ ہوگی۔ اسے تسلیم شدہ تعلیمی ڈگری یا ایکریڈیٹڈ تعلیمی سند کے طور پر پیش نہیں کیا جائے گا۔",
    contact: "رابطہ کریں",
    explore: "اکیڈمی دیکھیں",
  },
};

export default function IntroductionToTheBiblePage() {
  const [language, setLanguage] = useState<"en" | "ur">("en");
  const t = content[language];
  const isUrdu = language === "ur";

  return (
    <main
      dir={isUrdu ? "rtl" : "ltr"}
      lang={isUrdu ? "ur" : "en"}
      className="min-h-screen bg-white text-gray-900"
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl">

          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/academy"
              className="inline-flex items-center text-sm font-semibold text-blue-200 transition hover:text-white"
            >
              {t.back}
            </Link>

            <div className="flex gap-2 rounded-full border border-white/20 bg-white/10 p-1">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  !isUrdu
                    ? "bg-amber-400 text-blue-950"
                    : "text-white hover:bg-white/10"
                }`}
              >
                English
              </button>

              <button
                type="button"
                onClick={() => setLanguage("ur")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isUrdu
                    ? "bg-amber-400 text-blue-950"
                    : "text-white hover:bg-white/10"
                }`}
              >
                اردو
              </button>
            </div>
          </div>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            {t.academy}
          </p>

          <p className="mt-5 text-sm font-bold tracking-wider text-blue-200">
            {t.certificate}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            {t.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[t.level, t.duration, t.lessons, t.status].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="font-semibold uppercase tracking-widest text-blue-700">
              {t.overview}
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {t.overviewTitle}
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              {t.overviewText}
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              {t.overviewText2}
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-7">
            <h2 className="text-xl font-bold">{t.glance}</h2>

            <dl className="mt-6 space-y-5">
              {[
                [t.program, t.programValue],
                [t.module, t.moduleValue],
                [t.length, t.lengthValue],
                [t.languageLabel, t.languageValue],
                [t.audience, t.audienceValue],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm text-gray-500">{label}</dt>
                  <dd className="mt-1 font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="bg-gray-50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold uppercase tracking-widest text-blue-700">
            {t.objectives}
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {t.objectivesTitle}
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {t.objectivesIntro}
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.goals.map((goal) => (
              <li
                key={goal}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 leading-7"
              >
                <span className="font-bold text-blue-700">✓</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lessons */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold uppercase tracking-widest text-blue-700">
            {t.curriculum}
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {t.curriculumTitle}
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            {t.curriculumIntro}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {t.lessonNames.map((lesson, index) => (
              <article
                key={lesson.urdu}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <p className="text-sm font-bold tracking-widest text-blue-700">
                  {isUrdu ? `سبق ${index + 1}` : `LESSON ${String(index + 1).padStart(2, "0")}`}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {isUrdu ? lesson.urdu : lesson.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {lesson.description}
                </p>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <span className="text-sm font-medium text-amber-700">
                    {isUrdu ? "تیاری جاری ہے" : "Lesson in development"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson Resources */}
      <section className="bg-gray-50 px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">

          <div>
            <p className="font-semibold uppercase tracking-widest text-blue-700">
              {t.resources}
            </p>

            <ul className="mt-6 space-y-4">
              {t.resourcesList.map((resource) => (
                <li key={resource} className="flex items-start gap-3 leading-7">
                  <span className="font-bold text-blue-700">✓</span>
                  <span>{resource}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <h2 className="text-2xl font-bold">{t.assessment}</h2>

            <p className="mt-4 leading-7 text-gray-600">
              {t.assessmentText}
            </p>

            <div className="mt-6 border-t border-gray-200 pt-5">
              <p className="text-sm text-gray-500">{t.passing}</p>
              <p className="mt-2 text-3xl font-bold text-blue-800">
                {t.passingValue}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Notice */}
      <section className="px-6 pb-20 pt-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-amber-200 bg-amber-50 p-7 sm:p-10">
          <h2 className="text-2xl font-bold text-amber-950">
            {t.development}
          </h2>

          <p className="mt-4 leading-7 text-amber-900">
            {t.developmentText}
          </p>

          <p className="mt-4 text-sm leading-7 text-amber-900">
            {t.qualification}
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-900"
            >
              {t.contact}
            </Link>

            <Link
              href="/academy"
              className="rounded-lg border border-amber-300 px-6 py-3 font-semibold text-amber-950 transition hover:bg-amber-100"
            >
              {t.explore}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
