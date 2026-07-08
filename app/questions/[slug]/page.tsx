import { notFound } from "next/navigation";
import { questions } from "../../data/questions";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params;

  const question = questions.find((q) => q.slug === slug);

  if (!question) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="mx-auto max-w-5xl px-6">

        {/* Category */}

        <p className="uppercase tracking-[0.4em] text-red-600 font-semibold">
          {question.category}
        </p>


        {/* Title */}

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          {question.question}
        </h1>


        {/* Short Answer */}

        <div className="mt-10 rounded-2xl bg-blue-50 p-8 shadow">

          <h2 className="text-2xl font-bold text-blue-700">
            Quick Answer
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            {question.shortAnswer}
          </p>

        </div>


        {/* Full Answer */}

        <div className="mt-10 rounded-2xl bg-white p-10 shadow-lg">

          <h2 className="text-3xl font-bold text-gray-900">
            Biblical Answer
          </h2>


          <div className="mt-6 whitespace-pre-line text-lg leading-9 text-gray-700">
            {question.answer}
          </div>


        </div>


        {/* YouTube */}

        <div className="mt-10 rounded-2xl bg-red-50 p-8">

          <h2 className="text-2xl font-bold">
            Watch Related Teaching
          </h2>


          <a
            href={question.youtube}
            target="_blank"
            className="mt-4 inline-block text-red-600 font-semibold hover:underline"
          >
            Watch on YouTube →
          </a>

        </div>


      </div>

    </main>
  );
}