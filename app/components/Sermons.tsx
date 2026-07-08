import { PlayCircle } from "lucide-react";

const sermons = [
  {
    title: "Who Created Satan?",
    description:
      "A biblical study answering one of the most difficult questions about Satan, pride, free will, and God's goodness.",
    date: "Latest Teaching",
  },
  {
    title: "Can Angels Sin?",
    description:
      "Discover what the Bible teaches about angels, their purpose, rebellion, and their role in God's eternal plan.",
    date: "Bible Study",
  },
  {
    title: "Why Do Angels Have Wings?",
    description:
      "A deep biblical and historical explanation of cherubim, seraphim, and the symbolism of their wings.",
    date: "Featured Message",
  },
];

export default function Sermons() {
  return (
    <section
      id="sermons"
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-[0.3em] font-semibold">
            Latest Sermons
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Grow in the Knowledge of God's Word
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Explore powerful biblical teachings designed to strengthen your faith,
            answer difficult questions, and help you walk closely with Jesus Christ.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {sermons.map((sermon) => (
            <div
              key={sermon.title}
              className="rounded-3xl bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <div className="h-52 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white" />
              </div>

              <div className="p-8">
                <span className="text-sm font-semibold text-red-600">
                  {sermon.date}
                </span>

                <h3 className="text-2xl font-bold mt-3 text-gray-900 dark:text-white">
                  {sermon.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
                  {sermon.description}
                </p>

                <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}