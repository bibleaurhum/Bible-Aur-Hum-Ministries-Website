import { BookOpen, HeartHandshake, Users, Video } from "lucide-react";

const ministries = [
  {
    title: "Biblical Teaching",
    description:
      "Teaching God's Word verse by verse with sound doctrine, historical context, and practical application to strengthen believers in Christ.",
    icon: BookOpen,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Prayer & Spiritual Care",
    description:
      "Standing together in prayer, encouraging hearts, and believing God for healing, restoration, guidance, and spiritual growth.",
    icon: HeartHandshake,
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    title: "Evangelism & Outreach",
    description:
      "Sharing the Gospel of Jesus Christ through love, compassion, discipleship, and faithful service to transform lives.",
    icon: Users,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Digital Media Ministry",
    description:
      "Reaching the world through sermons, Bible studies, Christian teachings, podcasts, videos, and online resources that proclaim the hope of Jesus Christ.",
    icon: Video,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

export default function Ministries() {
  return (
    <section
      id="ministries"
      className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-[0.3em]">
            Our Ministries
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Equipping the Church • Reaching the Lost • Glorifying Christ
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            At <strong>Bible Aur Hum Ministries</strong>, everything we do is
            centered on Jesus Christ and His Word. Through biblical teaching,
            prayer, discipleship, evangelism, and digital media, we are committed
            to helping people know God, grow in faith, and faithfully live out
            the Gospel.
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore Our Ministry
          </button>
        </div>

        {/* Ministry Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ministries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-white dark:bg-gray-800 rounded-3xl p-8 border-t-4 border-blue-600 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-8 h-8 ${item.color}`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}