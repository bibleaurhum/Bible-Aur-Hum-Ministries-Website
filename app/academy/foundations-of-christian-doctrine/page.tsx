
import Link from "next/link";

const modules = [
  {
    number: "01",
    title: "Understanding Christian Doctrine",
    description:
      "Learn what Christian doctrine means and why biblical teaching matters for Christian faith and life.",
  },
  {
  number: "02",
  title: "The Nature of God",
    description:
      "Explore God's character, attributes, and the biblical foundations of Christian belief in one God.",
  },
  {
    number: "03",
    title: "The Trinity",
    description:
      "Study the Christian understanding of the Father, the Son, and the Holy Spirit.",
  },
  {
    number: "04",
    title: "The Person of Jesus Christ",
    description:
      "Examine the identity, humanity, divinity, and mission of Jesus Christ through Scripture.",
  },
  {
    number: "05",
    title: "Sin, Grace, and Salvation",
    description:
      "Explore biblical teachings about sin, grace, faith, repentance, redemption, and salvation.",
  },
  {
    number: "06",
    title: "The Holy Spirit",
    description:
      "Learn about the work of the Holy Spirit and spiritual growth in the Christian life.",
  },
  {
    number: "07",
    title: "The Church and Its Mission",
    description:
      "Study the biblical purpose of the Church, Christian fellowship, worship, and service.",
  },
  {
    number: "08",
    title: "Christian Hope and Eternal Life",
    description:
      "Explore biblical teachings about resurrection, eternal life, and Christian hope.",
  },
];

export default function FoundationsOfChristianDoctrinePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/academy"
            className="mb-10 inline-flex text-sm font-semibold text-blue-200 transition hover:text-white"
          >
            ← Back to Academy
          </Link>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
            Bible Aur Hum Academy · Course 02
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Foundations of Christian Doctrine
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Explore the central beliefs of Christianity through a structured
            introduction to biblical teaching about God, Jesus Christ,
            salvation, the Holy Spirit, and the Church.
          </p>

          <div className="mt-9 inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-5 py-3 text-sm font-semibold text-amber-200">
            Planned Course — Enrollment Not Yet Open
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              About This Course
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              This planned course introduces learners to foundational
              Christian doctrines and the biblical passages used to understand
              them. Students will explore important Christian beliefs and
              learn to examine Scripture thoughtfully and in context.
            </p>

            <h2 className="mt-12 text-3xl font-bold tracking-tight">
              What You Will Learn
            </h2>

            <ul className="mt-6 space-y-4 text-slate-600">
              <li>
                Understand the meaning and importance of Christian doctrine.
              </li>
              <li>
                Explore biblical teaching about God and the Trinity.
              </li>
              <li>
                Examine the person and work of Jesus Christ.
              </li>
              <li>
                Understand Christian teachings about sin, grace, and salvation.
              </li>
              <li>
                Explore the Holy Spirit and the mission of the Church.
              </li>
              <li>
                Read and discuss relevant Bible passages in context.
              </li>
            </ul>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h2 className="text-xl font-bold">Course Information</h2>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-500">Course level</p>
                <p className="mt-1 font-semibold">Introductory</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Planned modules</p>
                <p className="mt-1 font-semibold">8 modules</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Enrollment status</p>
                <p className="mt-1 font-semibold text-amber-700">
                  Not yet open
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Course materials</p>
                <p className="mt-1 font-semibold">To be announced</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-800 px-5 py-3 font-semibold text-white transition hover:bg-blue-900"
            >
              Contact Us
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            Planned Curriculum
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Course Modules
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            These modules outline the proposed course structure. Lessons,
            resources, and availability will be announced when they are ready.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {modules.map((module) => (
              <article
                key={module.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md"
              >
                <p className="text-sm font-bold tracking-widest text-blue-700">
                  MODULE {module.number}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {module.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-blue-950 px-8 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold">
            Grow in Your Understanding of Scripture
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Bible Aur Hum Academy aims to help learners explore Christian
            teaching, study the Bible, and grow in their understanding of
            the Christian faith.
          </p>

          <Link
            href="/academy"
            className="mt-8 inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
          >
            Explore All Courses
          </Link>
        </div>
      </section>
    </main>
  );
}
