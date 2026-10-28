
import Link from "next/link";

const modules = [
  {
    title: "Biblical Foundations of Christian Ministry",
    description:
      "Explore the biblical purpose of ministry, Christian service, and the responsibility of serving God's people.",
  },
  {
    title: "The Character of a Christian Leader",
    description:
      "Study biblical principles of integrity, humility, faithfulness, and spiritual maturity in leadership.",
  },
  {
    title: "Servant Leadership in the Example of Jesus",
    description:
      "Learn how Jesus demonstrated servant leadership through compassion, sacrifice, teaching, and service.",
  },
  {
    title: "Understanding Spiritual Gifts and Calling",
    description:
      "Consider biblical teaching about spiritual gifts, calling, and the contribution of different members of the church.",
  },
  {
    title: "Communication and Teaching Scripture",
    description:
      "Develop foundational skills for communicating biblical truth clearly, accurately, and responsibly.",
  },
  {
    title: "Pastoral Care and Discipleship",
    description:
      "Explore principles of encouraging believers, supporting spiritual growth, and caring for people with wisdom.",
  },
  {
    title: "Church Administration and Teamwork",
    description:
      "Understand basic principles of organization, collaboration, accountability, and responsible ministry planning.",
  },
  {
    title: "Ethics, Accountability, and Mission",
    description:
      "Examine ethical responsibilities, safeguarding, accountability, and the church's mission to serve others.",
  },
];

export default function ChristianMinistryAndLeadershipPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="bg-gradient-to-br from-emerald-950 via-teal-900 to-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/academy"
            className="mb-8 inline-block text-sm font-medium text-emerald-200 transition hover:text-white"
          >
            ← Back to Academy
          </Link>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Bible Aur Hum Academy
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Christian Ministry and Leadership
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-100">
            Explore biblical principles of Christian service, servant
            leadership, discipleship, pastoral care, and responsible ministry.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-emerald-300/40 px-4 py-2">
              Christian Service
            </span>
            <span className="rounded-full border border-emerald-300/40 px-4 py-2">
              Biblical Leadership
            </span>
            <span className="rounded-full border border-emerald-300/40 px-4 py-2">
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
                This proposed course introduces foundational biblical
                principles for Christian ministry and leadership. Students
                will consider the character of a Christian leader, the example
                of Jesus, spiritual gifts, discipleship, pastoral care,
                communication, teamwork, and accountability. The aim is to
                encourage faithful, humble, and responsible service within the
                church and the wider community.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What You Will Learn
              </h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Explain biblical foundations for Christian ministry.",
                  "Recognize qualities of character associated with Christian leadership.",
                  "Apply principles of servant leadership from the example of Jesus.",
                  "Understand spiritual gifts, calling, and collaborative service.",
                  "Develop foundational communication and discipleship skills.",
                  "Recognize the importance of ethics, accountability, and responsible care.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-slate-600">
                    <span className="font-bold text-emerald-700">✓</span>
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
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
                    Christian Ministry and Leadership
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
                className="mt-6 block rounded-lg bg-emerald-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
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
