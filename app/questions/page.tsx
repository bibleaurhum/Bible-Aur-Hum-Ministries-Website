import Link from "next/link";
import { questions } from "../data/questions";

export default function QuestionsPage() {
  const categories = [...new Set(questions.map((q) => q.category))].map(
    (category) => ({
      title: category,
      total: questions.filter((q) => q.category === category).length,
      questions: questions
        .filter((q) => q.category === category)
        .slice(0, 5),
    })
  );

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.4em] text-red-600">
            Bible Question Library
          </p>

          <h1 className="mt-4 text-5xl font-bold text-gray-900">
            Find Biblical Answers
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            Explore carefully researched biblical answers covering
            Christianity, Theology, Apologetics, Science, History,
            Philosophy, Islam, Christian Living, and much more.
          </p>

        </div>

        {/* Total */}

        <div className="mt-12 text-center">

          <div className="inline-block rounded-xl bg-blue-700 px-8 py-4 text-white shadow-lg">

            <h2 className="text-3xl font-bold">
              {questions.length}
            </h2>

            <p className="mt-2">
              Total Questions
            </p>

          </div>

        </div>

        {/* Categories */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <h2 className="text-2xl font-bold text-blue-700">
                {item.title}
              </h2>

              <p className="mt-2 text-gray-500">
                {item.total} Questions
              </p>

              <ul className="mt-6 space-y-3">

                {item.questions.map((question) => (

                  <li key={question.id}>

                    <Link
                      href={`/questions/${question.slug}`}
                      className="text-gray-700 transition hover:text-red-600"
                    >
                      • {question.question}
                    </Link>

                  </li>

                ))}

              </ul>

              <button className="mt-8 rounded-lg bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800">
                View All →
              </button>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}