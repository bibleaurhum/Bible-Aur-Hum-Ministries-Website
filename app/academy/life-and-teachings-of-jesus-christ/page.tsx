
import Link from "next/link";

const modules = [
  {
    title: "Module 1: The World and Background of Jesus",
    description:
      "Explore the historical, cultural, and religious setting of first-century Judea and Galilee.",
  },
  {
    title: "Module 2: The Birth and Early Life of Jesus",
    description:
      "Study the Gospel accounts of Jesus' birth, childhood, and preparation for His public ministry.",
  },
  {
    title: "Module 3: The Baptism and Public Ministry of Jesus",
    description:
      "Examine the beginning of Jesus' ministry, His message, His disciples, and His mission.",
  },
  {
    title: "Module 4: The Teachings and Parables of Jesus",
    description:
      "Explore the Sermon on the Mount, the parables, and Jesus' teaching about God's Kingdom.",
  },
  {
    title: "Module 5: The Miracles and Compassion of Jesus",
    description:
      "Study Gospel accounts of healing, deliverance, nature miracles, and Jesus' care for people.",
  },
  {
    title: "Module 6: The Identity and Claims of Jesus",
    description:
      "Examine the titles, actions, and claims associated with Jesus in the four Gospels.",
  },
  {
    title: "Module 7: The Cross and Resurrection",
    description:
      "Explore the Gospel narratives of Jesus' final days, crucifixion, burial, and resurrection.",
  },
  {
    title: "Module 8: Following the Example of Jesus",
    description:
      "Consider how Jesus' character, love, humility, prayer, and service inform Christian discipleship.",
  },
];

export default function LifeAndTeachingsOfJesusChristPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="bg-gradient-to-br from-amber-950 via-orange-900 to-red-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/academy"
            className="mb-8 inline-block text-sm font-medium text-orange-200 transition hover:text-white"
          >
            ← Back to Academy
          </Link>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-200">
            Bible Aur Hum Academy
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Life and Teachings of Jesus Christ
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            Discover the life, ministry, teachings, miracles, death, and
            resurrection of Jesus Christ through a guided study of the four
            Gospels.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-orange-300/40 px-4 py-2">
              Gospel Studies
            </span>
            <span className="rounded-full border border-orange-300/40 px-4 py-2">
              Life of Christ
            </span>
            <span className="rounded-full border border-orange-300/40 px-4 py-2">
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
                This proposed course introduces students to the life and
                teachings of Jesus Christ as presented in Matthew, Mark, Luke,
                and John. Through a guided study of the Gospel narratives,
                students will explore Jesus' historical setting, public
                ministry, parables, miracles, identity, crucifixion, and
                resurrection. The course also considers how His example shapes
                Christian faith and daily discipleship.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What You Will Learn
              </h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Understand the historical and cultural setting of Jesus' ministry.",
                  "Explore the central themes of the four Gospels.",
                  "Explain important teachings and parables of Jesus.",
                  "Study Gospel accounts of Jesus' miracles and compassion.",
                  "Examine the Christian understanding of Jesus' death and resurrection.",
                  "Reflect on how Jesus' example informs Christian discipleship.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-slate-600">
                    <span className="font-bold text-orange-700">✓</span>
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-orange-700">
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
                  <dd className="mt-1 font-semibold">
                    Beginner to Intermediate
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">Subject</dt>
                  <dd className="mt-1 font-semibold">Gospel Studies</dd>
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
                className="mt-6 block rounded-lg bg-orange-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-800"
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
