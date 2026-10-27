
import Link from "next/link";

const opportunityTypes = [
  {
    number: "01",
    title: "Church & Ministry Jobs",
    description:
      "Discover future opportunities in churches, Christian ministries, missions, and faith-based organizations.",
    examples: ["Pastoral ministry", "Mission work", "Church administration"],
  },
  {
    number: "02",
    title: "Teaching & Education",
    description:
      "Explore opportunities in Bible teaching, Christian education, tutoring, and educational support.",
    examples: ["Bible teaching", "Christian education", "Student support"],
  },
  {
    number: "03",
    title: "Media & Communications",
    description:
      "Find opportunities related to Christian media, video production, communications, and digital content.",
    examples: ["Video production", "Content creation", "Communications"],
  },
  {
    number: "04",
    title: "General Employment",
    description:
      "Explore general employment opportunities across different professional fields and industries.",
    examples: ["Administration", "Customer service", "Other professions"],
  },
];

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Bible Aur Hum Ministries
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Job Opportunities
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Explore career opportunities in Christian ministry, education,
            media, administration, and other professional fields.
          </p>

          <a
            href="#opportunities"
            className="mt-9 inline-block rounded-lg bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition hover:bg-amber-300"
          >
            Explore Opportunity Areas
          </a>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Careers & service
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Connecting People With Opportunities
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our goal is to help visitors discover relevant employment and
            service opportunities. Listings will be added as suitable
            opportunities are identified and verified.
          </p>
        </div>
      </section>

      <section id="opportunities" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Explore Opportunity Areas
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            These categories describe the types of opportunities we plan to
            feature. They are not current vacancies.
          </p>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {opportunityTypes.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-bold tracking-widest text-blue-700">
                  {item.number}
                </p>

                <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

                <ul className="mt-5 space-y-2 text-gray-700">
                  {item.examples.map((example) => (
                    <li key={example}>• {example}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <article className="rounded-2xl bg-blue-50 p-8 sm:p-10">
            <h2 className="text-2xl font-bold">For Job Seekers</h2>

            <p className="mt-4 leading-7 text-gray-700">
              When vacancies are published, each listing should include the
              employer, job location, requirements, application method, and
              deadline whenever that information is available.
            </p>
          </article>

          <article className="rounded-2xl bg-amber-50 p-8 sm:p-10">
            <h2 className="text-2xl font-bold">For Employers</h2>

            <p className="mt-4 leading-7 text-gray-700">
              Churches, ministries, organizations, and employers can contact
              us to enquire about submitting opportunities for review.
              Publication will depend on verification and available details.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Have an Enquiry?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Contact Bible Aur Hum Ministries with questions about future job
            listings or submitting an opportunity.
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
