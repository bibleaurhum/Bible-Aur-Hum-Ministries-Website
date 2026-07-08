import {
  BookOpen,
  Cross,
  CircleHelp,
  Shield,
  Flame,
  Church,
  Clock3,
  HeartHandshake,
} from "lucide-react";

const categories = [
  {
    title: "Bible Study",
    icon: BookOpen,
    color: "text-blue-700",
    bg: "bg-blue-50",
    desc: "Verse-by-verse Bible teaching and in-depth study.",
  },
  {
    title: "Jesus Christ",
    icon: Cross,
    color: "text-red-600",
    bg: "bg-red-50",
    desc: "The life, ministry, death and resurrection of Christ.",
  },
  {
    title: "Difficult Questions",
    icon: CircleHelp,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    desc: "Biblical answers to challenging questions.",
  },
  {
    title: "Spiritual Warfare",
    icon: Shield,
    color: "text-purple-700",
    bg: "bg-purple-50",
    desc: "Satan, demons, temptation and spiritual victory.",
  },
  {
    title: "Holy Spirit",
    icon: Flame,
    color: "text-orange-600",
    bg: "bg-orange-50",
    desc: "Understanding the work of the Holy Spirit.",
  },
  {
    title: "Church History",
    icon: Church,
    color: "text-green-700",
    bg: "bg-green-50",
    desc: "Learn from the history of Christianity.",
  },
  {
    title: "End Times",
    icon: Clock3,
    color: "text-indigo-700",
    bg: "bg-indigo-50",
    desc: "Biblical prophecy and the return of Christ.",
  },
  {
    title: "Christian Living",
    icon: HeartHandshake,
    color: "text-pink-600",
    bg: "bg-pink-50",
    desc: "Growing daily in faith and obedience.",
  },
];

export default function LearningCenter() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-red-600 font-semibold">
            Bible Learning Center
          </p>

          <h2 className="mt-5 text-5xl font-extrabold text-gray-900">
            Learn God's Word
            <br />
            One Topic at a Time
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-gray-600">
            Explore carefully organized biblical teaching designed to
            strengthen your faith, answer difficult questions,
            and help you grow in Christ.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`${item.bg} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer`}
              >
                <Icon className={`w-14 h-14 ${item.color}`} />

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {item.desc}
                </p>

                <p className="mt-6 font-semibold text-blue-700">
                  Explore →
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}