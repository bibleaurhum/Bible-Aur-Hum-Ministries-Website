
import Link from "next/link";

const modules = [
  {
    number: "01",
    title: "What Is the Bible?",
    description:
      "Discover the purpose, structure, and central message of the Bible.",
  },
  {
    number: "02",
    title: "The Old Testament",
    description:
      "Explore the Law, historical books, poetry, wisdom literature, and prophets.",
  },
  {
    number: "03",
    title: "The New Testament",
    description:
      "Learn about the Gospels, the life of Jesus, the early Church, and the letters.",
  },
  {
    number: "04",
    title: "The Story of the Bible",
    description:
      "Trace the major themes of creation, humanity, covenant, redemption, and restoration.",
  },
  {
    number: "05",
    title: "How to Read Scripture",
    description:
      "Practice reading biblical passages in their literary, historical, and immediate context.",
  },
  {
    number: "06",
    title: "Applying Biblical Teaching",
    description:
      "Reflect on how biblical principles can shape faith, character, relationships, and service.",
  },
];

export default function IntroductionToTheBiblePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/academy"
            className="inline-flex items-center text-sm font-semibold text-blue-200 transition hover:text-white"
          >
            ← Back to Academy
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Bible Aur Hum Academy
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Introduction to the Bible
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Begin your journey through Scripture. Explore the Bible&apos;s
            structure, major themes, central message, and practical importance
            for Christian faith and life.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              Beginner level
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              6 planned modules
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              Enrollment not open
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Course overview
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Build a strong foundation in Scripture
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              This planned introductory course is designed for Bible students,
              church members, and anyone who wants to understand how the Bible
              is organized and how its major themes connect. It introduces
              important biblical sections and encourages careful, context-aware
              reading rather than relying on isolated verses.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              The course outline is a proposed learning plan. Lessons,
              assessments, study materials, duration, and admission details
              will be confirmed before enrollment opens.
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-7">
            <h2 className="text-xl font-bold">Course at a glance</h2>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-gray-500">Learning level</dt>
                <dd className="mt-1 font-semibold">Beginner</dd>
              </div>

              <div>
                <dt className="text-sm text-gray-500">Planned modules</dt>
                <dd className="mt-1 font-semibold">6 modules</dd>
              </div>

              <div>
                <dt className="text-sm text-gray-500">Intended audience</dt>
                <dd className="mt-1 font-semibold">
                  Bible students and church members
                </dd>
              </div>

              <div>
                <dt className="text-sm text-gray-500">Enrollment status</dt>
                <dd className="mt-1 font-semibold text-amber-700">
                  Not yet open
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Learning goals
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What you will explore
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            By the end of the planned course, learners should be better
            prepared to:
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Describe the Bible's overall structure.",
              "Identify major sections of the Old and New Testaments.",
              "Recognize key themes across the biblical story.",
              "Read passages with attention to context.",
              "Connect biblical teaching with Christian life.",
              "Develop a foundation for further Bible study.",
            ].map((goal) => (
              <li
                key={goal}
                className="flex gap-3 rounded-xl border border-gray-200 bg-white p-5 leading-7"
              >
                <span className="font-bold text-blue-700">✓</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Proposed curriculum
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Explore the six modules
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            These modules outline the topics planned for this course. Full
            lessons and study resources will be added as they are developed.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {modules.map((module) => (
              <article
                key={module.number}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md sm:p-8"
              >
                <p className="text-sm font-bold tracking-widest text-blue-700">
                  MODULE {module.number}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {module.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-amber-200 bg-amber-50 p-7 sm:p-10">
          <h2 className="text-2xl font-bold text-amber-950">
            Course development in progress
          </h2>

          <p className="mt-4 leading-7 text-amber-900">
            This course is planned and is not currently accepting students.
            Enrollment dates, fees, course materials, assessments, and any
            certificate arrangements will be announced only after they are
            confirmed.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-900"
            >
              Contact Us
            </Link>

            <Link
              href="/academy"
              className="rounded-lg border border-amber-300 px-6 py-3 font-semibold text-amber-950 transition hover:bg-amber-100"
            >
              Explore Academy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
