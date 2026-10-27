
import Link from "next/link";

const programs = [
  {
    number: "01",
    title: "Certificate Programs",
    description:
      "Study biblical foundations, Christian doctrine, Bible interpretation, and Christian apologetics through structured learning.",
    label: "Short courses",
  },
  {
    number: "02",
    title: "Diploma Programs",
    description:
      "Explore more in-depth biblical studies, theology, ministry leadership, and practical Christian service.",
    label: "Advanced study",
  },
  {
    number: "03",
    title: "Degree Pathways",
    description:
      "Explore opportunities for formal theological education through appropriately authorized and recognized educational institutions.",
    label: "Further education",
  },
];

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Bible Aur Hum Ministries
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Bible Aur Hum Academy
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Grow in biblical knowledge, strengthen your faith, and prepare
            for meaningful service through structured Christian education.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#programs"
              className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition hover:bg-amber-300"
            >
              Explore Programs
            </a>

            <a
              href="#enquiries"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Enquire About Study
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Our vision
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Learn the Word. Live the Word. Serve the World.
            </h2>
          </div>

          <p className="text-lg leading-8 text-gray-600">
            The Academy is being developed to serve Bible students, church
            members, pastors, teachers, and ministry leaders. Our goal is to
            provide accessible learning that helps people understand Scripture
            and apply biblical principles in everyday life and ministry.
          </p>
        </div>
      </section>

      <section id="programs" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Educational pathways
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Choose Your Learning Path
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Explore the educational pathways we plan to develop. Availability,
              admission requirements, fees, and recognition will be published
              when each program is formally established.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.number}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-bold tracking-widest text-blue-700">
                  {program.number}
                </p>

                <h3 className="mt-5 text-2xl font-bold">
                  {program.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {program.description}
                </p>

                <p className="mt-6 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                  {program.label}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-6 text-gray-500">
            Certificates of completion, diplomas, and academic degrees are
            different qualifications. Any future award or degree pathway will
            be described accurately according to the applicable authorization
            and recognition arrangements.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <article className="rounded-2xl bg-blue-50 p-8 sm:p-10">
            <h2 className="text-2xl font-bold">Who Can Learn?</h2>

            <ul className="mt-5 space-y-3 leading-7 text-gray-700">
              <li>• Bible students and church members</li>
              <li>• Pastors and ministry leaders</li>
              <li>• Sunday school teachers and Bible educators</li>
              <li>• Christians interested in theology and apologetics</li>
            </ul>
          </article>

          <article className="rounded-2xl bg-amber-50 p-8 sm:p-10">
            <h2 className="text-2xl font-bold">What Comes Next?</h2>

            <p className="mt-4 leading-7 text-gray-700">
              We plan to develop course materials, lessons, assessments,
              enrollment procedures, and student support in stages. Program
              announcements will appear here as details are confirmed.
            </p>
          </article>
        </div>
      </section>

      <section id="enquiries" className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Interested in Studying With Us?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Contact Bible Aur Hum Ministries to express your interest in future
            educational programs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition hover:bg-amber-300"
            >
              Contact Us
            </Link>

            <Link
              href="/"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
