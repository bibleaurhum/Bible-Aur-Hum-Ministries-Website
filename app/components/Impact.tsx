import {
  BookOpen,
  PlayCircle,
  Users,
  Globe,
} from "lucide-react";

export default function Impact() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-red-700 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-300 font-semibold">
            Ministry Impact
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-extrabold leading-tight">
            Sharing the Gospel
            <br />
            Around the World
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-blue-100">
            By God's grace, Bible Aur Hum Ministries Foundation is reaching
            thousands of people through faithful biblical teaching,
            discipleship, digital evangelism, and compassionate ministry.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

          {/* Biblical Teachings */}

          <div className="text-center">

            <BookOpen className="mx-auto w-14 h-14 text-yellow-300" />

            <h3 className="mt-6 text-5xl font-extrabold">
              200+
            </h3>

            <p className="mt-3 text-lg text-blue-100">
              Biblical Teachings
            </p>

          </div>

          {/* Gospel Views */}

          <div className="text-center">

            <PlayCircle className="mx-auto w-14 h-14 text-red-300" />

            <h3 className="mt-6 text-5xl font-extrabold">
              200K+
            </h3>

            <p className="mt-3 text-lg text-blue-100">
              Gospel Video Views
            </p>

          </div>

          {/* Community */}

          <div className="text-center">

            <Users className="mx-auto w-14 h-14 text-green-300" />

            <h3 className="mt-6 text-5xl font-extrabold">
              2.5K+
            </h3>

            <p className="mt-3 text-lg text-blue-100">
              YouTube Community
            </p>

          </div>

          {/* Global */}

          <div className="text-center">

            <Globe className="mx-auto w-14 h-14 text-cyan-300" />

            <h3 className="mt-6 text-5xl font-extrabold">
              Global Reach
            </h3>

            <p className="mt-3 text-lg leading-8 text-blue-100">
              Teaching God's Word Across
              <br />
              North America, Europe & Asia
            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="mt-24 border-t border-white/20 pt-14 text-center">

          <p className="text-3xl italic text-yellow-300 leading-relaxed max-w-5xl mx-auto">
            "Go therefore and make disciples of all nations..."
          </p>

          <p className="mt-8 text-2xl leading-10 text-white">
            "پس تم جا کر سب قوموں کو شاگرد بناؤ..."
          </p>

          <p className="mt-8 text-lg font-semibold text-blue-100">
            Matthew 28:19
          </p>

          <p className="mt-10 max-w-4xl mx-auto text-lg leading-9 text-blue-100">
            Through biblical teaching, discipleship, compassion, and digital
            evangelism, Bible Aur Hum Ministries Foundation is committed to
            proclaiming the Gospel of Jesus Christ until every person has the
            opportunity to hear God's Word.
          </p>

        </div>

      </div>

    </section>
  );
}