
import Link from "next/link";

const modules = [
  {
    title: "Introduction to Christian Apologetics",
    description:
      "Learn what Christian apologetics means and how to explain the reasons for Christian belief with clarity and respect.",
  },
  {
    title: "The Existence of God",
    description:
      "Explore philosophical arguments for God's existence, including cosmological, moral, and design arguments.",
  },
  {
    title: "The Reliability of the Bible",
    description:
      "Examine biblical manuscripts, historical evidence, textual transmission, and the formation of the biblical canon.",
  },
  {
    title: "The Identity of Jesus Christ",
    description:
      "Study the historical Jesus, His teachings, His claims, and the biblical evidence concerning His identity.",
  },
  {
    title: "The Resurrection of Jesus",
    description:
      "Consider the central claims of the resurrection and the historical arguments Christians present in its support.",
  },
  {
    title: "The Problem of Evil and Suffering",
    description:
      "Understand common questions about evil, suffering, human freedom, and God's goodness.",
  },
  {
    title: "Responding to Difficult Questions",
    description:
      "Develop thoughtful ways to discuss challenging objections to Christianity without hostility or misrepresentation.",
  },
  {
    title: "Sharing Your Faith with Wisdom",
    description:
      "Practice listening carefully, answering respectfully, and presenting Christian beliefs clearly in conversation.",
  },
];

export default function ChristianApologeticsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-20 text-white">
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
            Christian Apologetics
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Explore the reasons for Christian faith, examine important
            questions about the Bible and Jesus Christ, and learn to explain
            Christian beliefs with knowledge, humility, and respect.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-blue-300/40 px-4 py-2">
              Faith and Reason
            </span>
            <span className="rounded-full border border-blue-300/40 px-4 py-2">
              Biblical Evidence
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
                Christian apologetics is the study and communication of reasons
                for Christian belief. This proposed course introduces students
                to major questions about God's existence, the Bible, Jesus
                Christ, the resurrection, and the problem of suffering. It aims
                to help learners evaluate arguments carefully, understand
                different viewpoints fairly, and communicate their faith with
                patience and respect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What You Will Learn
              </h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Explain the purpose and basic methods of Christian apologetics.",
                  "Understand major philosophical arguments concerning God's existence.",
                  "Explore historical and textual questions about the Bible.",
                  "Examine the historical claims concerning Jesus and His resurrection.",
                  "Discuss the problem of evil and suffering thoughtfully.",
                  "Respond to questions about Christianity with clarity and respect.",
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
                      {module.title}
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
                  <dd className="mt-1 font-semibold">
                    Beginner to Intermediate
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Subject</dt>
                  <dd className="mt-1 font-semibold">
                    Christian Apologetics
                  </dd>
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
                  This course is being prepared. Contact the ministry for
                  future enrollment announcements.
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
