
import Link from "next/link";

const pathways = [
  {
    number: "01",
    title: "Certificate Programs",
    level: "Foundational Education",
    duration: "Short-term structured courses",
    description:
      "Build a strong foundation in biblical knowledge, Christian beliefs, Scripture interpretation, and Christian living.",
    subjects: [
      "Certificate in Biblical Studies",
      "Certificate in Christian Theology",
      "Certificate in Christian Apologetics",
    ],
    style: "border-blue-200 bg-blue-50",
  },
  {
    number: "02",
    title: "Diploma Programs",
    level: "Advanced Studies",
    duration: "Extended academic programs",
    description:
      "Develop deeper theological understanding and practical ministry skills through structured and comprehensive studies.",
    subjects: [
      "Diploma in Biblical Studies",
      "Diploma in Christian Theology",
      "Diploma in Christian Ministry",
    ],
    style: "border-amber-200 bg-amber-50",
  },
  {
    number: "03",
    title: "Degree Pathways",
    level: "Higher Education",
    duration: "Subject to institutional arrangements",
    description:
      "Explore future opportunities for advanced theological education through appropriately authorized and recognized academic institutions.",
    subjects: [
      "Undergraduate-level theological studies",
      "Advanced biblical and theological education",
      "Future institutional partnerships",
    ],
    style: "border-indigo-200 bg-indigo-50",
  },
];

const courses = [
  {
    number: "01",
    title: "Introduction to the Bible",
    description:
      "Explore the structure of the Bible, its major themes, key people, historical background, and central message.",
    level: "Beginner",
    href: "/academy/introduction-to-the-bible",
  },
  {
    number: "02",
    title: "Foundations of Christian Doctrine",
    description:
      "Study foundational Christian beliefs, including God, Jesus Christ, salvation, the Holy Spirit, and the Church.",
    level: "Beginner",
    href: "/academy/foundations-of-christian-doctrine",
  },
  {
    number: "03",
    title: "How to Interpret the Bible",
    description:
      "Learn to examine biblical context, literary genres, historical background, and Scripture passages responsibly.",
    level: "Beginner to Intermediate",
    href: "/academy/how-to-interpret-the-bible",
  },
  {
    number: "04",
    title: "Christian Apologetics",
    description:
      "Explore how to explain and defend Christian beliefs through biblical study, reasoned arguments, and respectful dialogue.",
    level: "Intermediate",
    href: "/academy/christian-apologetics",
  },
  {
    number: "05",
    title: "Life and Teachings of Jesus Christ",
    description:
      "Study the life, ministry, parables, miracles, death, and resurrection of Jesus Christ through the Gospels.",
    level: "Beginner",
    href: "/academy/life-and-teachings-of-jesus-christ",
  },
  {
    number: "06",
    title: "Christian Ministry and Leadership",
    description:
      "Explore servant leadership, Christian character, pastoral responsibilities, teaching, and practical ministry.",
    level: "Intermediate",
    href: "/academy/christian-ministry-and-leadership",
  },
];

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Bible Aur Hum Ministries
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Bible Aur Hum Academy
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Discover the Scriptures, deepen your understanding of Christian
            faith, and prepare for meaningful service through structured
            biblical and theological education.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#pathways"
              className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition hover:bg-amber-300"
            >
              Explore Programs
            </a>

            <a
              href="#courses"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Courses
            </a>
          </div>

          <div className="mt-14 grid max-w-3xl gap-6 border-t border-white/20 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-amber-300">English</p>
              <p className="mt-1 text-sm text-blue-100">Learning resources</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-300">Urdu</p>
              <p className="mt-1 text-sm text-blue-100">Learning resources</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-300">Online</p>
              <p className="mt-1 text-sm text-blue-100">Planned learning format</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Our Vision
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Learn the Word. Live the Word. Serve the World.
            </h2>
          </div>

          <p className="text-lg leading-8 text-gray-600">
            Bible Aur Hum Academy aims to serve Bible students, church
            members, pastors, teachers, and ministry leaders. Our vision is
            to make structured Christian education accessible through
            biblical teaching, theological study, practical learning, and
            responsible interpretation of Scripture.
          </p>
        </div>
      </section>

      {/* Educational Pathways */}
      <section id="pathways" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Educational Pathways
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Choose Your Academic Path
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our long-term educational vision includes foundational
              certificates, advanced diploma programs, and future degree
              pathways through appropriate institutional arrangements.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {pathways.map((pathway) => (
              <article
                key={pathway.number}
                className={`rounded-2xl border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${pathway.style}`}
              >
                <p className="text-sm font-bold tracking-widest text-blue-700">
                  {pathway.number}
                </p>

                <h3 className="mt-5 text-2xl font-bold">
                  {pathway.title}
                </h3>

                <p className="mt-3 font-semibold text-blue-800">
                  {pathway.level}
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  {pathway.duration}
                </p>

                <p className="mt-5 leading-7 text-gray-700">
                  {pathway.description}
                </p>

                <div className="mt-6 border-t border-gray-300/70 pt-5">
                  <p className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-700">
                    Planned Areas of Study
                  </p>

                  <ul className="space-y-3">
                    {pathway.subjects.map((subject) => (
                      <li
                        key={subject}
                        className="flex items-start gap-2 text-sm leading-6 text-gray-700"
                      >
                        <span className="font-bold text-blue-700">✓</span>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-semibold text-amber-900">
              Academic Development Notice
            </p>

            <p className="mt-2 text-sm leading-6 text-amber-800">
              These educational pathways are under development. Enrollment,
              admission requirements, program duration, fees, and award
              arrangements will be announced only when formally established.
              A Bible Aur Hum certificate of completion will not be presented
              as an accredited academic qualification. Degree pathways will
              depend on appropriate institutional authorization and
              recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Course Catalogue
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Explore Our Planned Courses
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              These subjects form part of our planned biblical and theological
              curriculum. Individual course materials and enrollment
              information will be published as they become available.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.number}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-bold tracking-widest text-blue-700">
                  COURSE {course.number}
                </p>

                <h3 className="mt-5 text-xl font-bold">
                  {course.title}
                </h3>

                <p className="mt-4 flex-grow leading-7 text-gray-600">
                  {course.description}
                </p>

                <p className="mt-6 inline-block self-start rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                  {course.level}
                </p>

                <Link
                  href={course.href}
                  className="mt-6 inline-flex items-center font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Explore Course →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Learn */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          <article className="rounded-2xl bg-blue-50 p-8 sm:p-10">
            <h2 className="text-2xl font-bold">
              Who Can Study With Us?
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-gray-700">
              <li>• Bible students and church members</li>
              <li>• Pastors and ministry leaders</li>
              <li>• Sunday school teachers and Bible educators</li>
              <li>• Christians interested in theology and apologetics</li>
              <li>• Anyone seeking a deeper understanding of Scripture</li>
            </ul>
          </article>

          <article className="rounded-2xl bg-amber-50 p-8 sm:p-10">
            <h2 className="text-2xl font-bold">
              Our Learning Approach
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-gray-700">
              <li>• Structured biblical lessons</li>
              <li>• English and Urdu learning resources</li>
              <li>• Recorded video teaching</li>
              <li>• Written study notes and Bible references</li>
              <li>• Quizzes, assignments, and assessments</li>
              <li>• Practical application of biblical principles</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Enquiries */}
      <section id="enquiries" className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-widest text-amber-300">
            Bible Aur Hum Academy
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Grow in Knowledge. Strengthen Your Faith.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            We are developing educational opportunities for people who
            desire to study the Bible, understand Christian doctrine, and
            serve others through biblical knowledge.
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
