
import Link from "next/link";

const modules = [
  {
    title: "Module 1: Introduction to Biblical Interpretation",
    description:
      "Understand what biblical interpretation is and why context matters when studying Scripture.",
  },
  {
    title: "Module 2: Historical and Cultural Context",
    description:
      "Explore the historical background, culture, customs, and original audience of biblical books.",
  },
  {
    title: "Module 3: Literary Genres in the Bible",
    description:
      "Learn how to read narrative, poetry, prophecy, parables, letters, and apocalyptic literature.",
  },
  {
    title: "Module 4: Understanding Biblical Context",
    description:
      "Study verses within their paragraphs, chapters, books, and the wider message of Scripture.",
  },
  {
    title: "Module 5: Observation, Interpretation, and Application",
    description:
      "Use a practical method to observe the text, understand its meaning, and apply it responsibly.",
  },
  {
    title: "Module 6: Understanding Difficult Passages",
    description:
      "Develop careful approaches to challenging verses and passages that appear difficult to understand.",
  },
  {
    title: "Module 7: Comparing Scripture with Scripture",
    description:
      "Explore how related biblical passages can help clarify themes and teachings.",
  },
  {
    title: "Module 8: Practical Bible Study",
    description:
      "Apply interpretation principles through guided exercises and personal Bible study.",
  },
];

export default function HowToInterpretTheBiblePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/academy"
            className="mb-8 inline-block text-sm font-medium text-blue-200 transition hover:text-white"
          >
            ← Back to Academy
          </Link>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Bible Aur Hum Academy
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            How to Interpret the Bible
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Learn to study Scripture carefully, understand its original
            context, interpret passages responsibly, and apply biblical
            teaching faithfully to everyday life.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-blue-300/40 px-4 py-2">
              Bible Study
            </span>
            <span className="rounded-full border border-blue-300/40 px-4 py-2">
              Practical Learning
            </span>
            <span className="rounded-full border border-blue-300/40 px-4 py-2">
              8 Proposed Modules
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                About This Course
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                The Bible deserves to be read with care, humility, and
                attention to its context. This course introduces practical
                principles for understanding biblical passages in their
                historical, literary, and theological settings. Students will
                learn to distinguish the meaning of a passage from personal
                assumptions and to apply Scripture thoughtfully.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What You Will Learn
              </h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Understand the importance of context when reading Scripture.",
                  "Recognize different literary genres in the Bible.",
                  "Use observation, interpretation, and application in Bible study.",
                  "Compare related passages carefully and responsibly.",
                  "Approach difficult verses with patience and sound study methods.",
                  "Develop a consistent personal Bible study practice.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-slate-600">
                    <span className="font-bold text-blue-700">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Proposed Course Modules
              </h2>
              <div className="mt-6 space-y-4">
                {modules.map((module, index) => (
                  <article
                    key={module.title}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                      Module {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                      {module.title.replace(/^Module \d+: /, "")}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {module.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-8">
              <h2 className="text-xl font-bold text-slate-900">
                Course Information
              </h2>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm text-slate-500">Course level</dt>
                  <dd className="mt-1 font-semibold">Beginner to Intermediate</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Subject</dt>
                  <dd className="mt-1 font-semibold">Biblical Interpretation</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Curriculum</dt>
                  <dd className="mt-1 font-semibold">8 Proposed Modules</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Enrollment</dt>
                  <dd className="mt-1 font-semibold text-amber-700">
                    Not Yet Open
                  </dd>
                </div>
              </dl>

              <div className="mt-7 rounded-xl bg-amber-50 p-4">
                <p className="font-semibold text-amber-900">
                  Enrollment is not yet open
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-800">
                  This course is being prepared. Please contact the ministry
                  for future enrollment announcements.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-6 block rounded-lg bg-blue-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-800"
              >
                Contact the Ministry
              </Link>

              <Link
                href="/academy"
                className="mt-3 block rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore All Courses
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
