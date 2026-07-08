import { BookOpen, Video, Globe, Heart } from "lucide-react";

export default function SupportCards() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-red-600 font-semibold">
            Where Your Gift Goes
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Impact Through Your Support
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <BookOpen className="mx-auto w-12 h-12 text-blue-700" />
            <h3 className="mt-6 text-xl font-bold">Biblical Teaching</h3>
            <p className="mt-4 text-gray-600">
              Helping believers understand God's Word through clear, biblical teaching and study.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <Video className="mx-auto w-12 h-12 text-red-600" />
            <h3 className="mt-6 text-xl font-bold">Digital Evangelism</h3>
            <p className="mt-4 text-gray-600">
              Creating videos and content that answer biblical questions and reach the world.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <Heart className="mx-auto w-12 h-12 text-pink-600" />
            <h3 className="mt-6 text-xl font-bold">Compassion Ministry</h3>
            <p className="mt-4 text-gray-600">
              Supporting the poor, widows, orphans, and future mission work as God provides.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <Globe className="mx-auto w-12 h-12 text-green-600" />
            <h3 className="mt-6 text-xl font-bold">Global Mission</h3>
            <p className="mt-4 text-gray-600">
              Sharing the Gospel across Pakistan, USA, Canada, Europe, and beyond.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}