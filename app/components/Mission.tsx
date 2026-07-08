import { BookOpen, Heart, Globe, HandHelping } from "lucide-react";

export default function Mission() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.4em] text-red-600 font-semibold">
            Our Mission
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold text-gray-900">
            Teaching the Word.
            <br />
            Serving People.
            <br />
            Transforming Lives.
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-gray-600">
            Bible Aur Hum Ministries Foundation exists to glorify Jesus Christ
            through faithful biblical teaching, discipleship, compassionate
            service, and proclaiming the Gospel to people around the world.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-2xl bg-blue-50 p-8 shadow-lg hover:shadow-xl transition">

            <BookOpen className="w-12 h-12 text-blue-700" />

            <h3 className="mt-6 text-2xl font-bold">
              Biblical Teaching
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Teaching God's Word faithfully with historical,
              cultural and biblical understanding.
            </p>

          </div>

          <div className="rounded-2xl bg-red-50 p-8 shadow-lg hover:shadow-xl transition">

            <Heart className="w-12 h-12 text-red-600" />

            <h3 className="mt-6 text-2xl font-bold">
              Compassion
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Demonstrating Christ's love through prayer,
              encouragement and practical service.
            </p>

          </div>

          <div className="rounded-2xl bg-yellow-50 p-8 shadow-lg hover:shadow-xl transition">

            <Globe className="w-12 h-12 text-yellow-600" />

            <h3 className="mt-6 text-2xl font-bold">
              Global Mission
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Reaching Urdu and English speaking communities
              with the Gospel of Jesus Christ.
            </p>

          </div>

          <div className="rounded-2xl bg-green-50 p-8 shadow-lg hover:shadow-xl transition">

            <HandHelping className="w-12 h-12 text-green-600" />

            <h3 className="mt-6 text-2xl font-bold">
              Service
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              Serving people with humility,
              integrity, generosity and the love of Christ.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}