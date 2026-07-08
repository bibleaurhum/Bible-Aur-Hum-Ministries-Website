import {
  Heart,
  Globe,
  Camera,
  Link,
} from "lucide-react";

export default function SupportOptions() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.4em] text-red-600 font-semibold">
            Ways to Support
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Join Hands With The Ministry
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* PayPal */}
          <a
            href="https://paypal.me/bibleaurhum"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-blue-50 rounded-2xl text-center shadow hover:shadow-xl transition"
          >
            <Heart className="mx-auto w-12 h-12 text-red-600" />
            <h3 className="mt-6 text-xl font-bold">Support via PayPal</h3>
            <p className="mt-3 text-gray-600">
              Partner financially to help spread the Gospel globally.
            </p>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@bibleaurhum"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-red-50 rounded-2xl text-center shadow hover:shadow-xl transition"
          >
            <Link className="mx-auto w-12 h-12 text-red-600" />
            <h3 className="mt-6 text-xl font-bold">YouTube Ministry</h3>
            <p className="mt-3 text-gray-600">
              Watch, subscribe, and share biblical teachings.
            </p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61590791038308"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-blue-50 rounded-2xl text-center shadow hover:shadow-xl transition"
          >
            <Globe className="mx-auto w-12 h-12 text-blue-600" />
            <h3 className="mt-6 text-xl font-bold">Facebook Community</h3>
            <p className="mt-3 text-gray-600">
              Stay connected and share ministry updates.
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/bible.aurhum/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-pink-50 rounded-2xl text-center shadow hover:shadow-xl transition"
          >
            <Camera className="mx-auto w-12 h-12 text-pink-600" />
            <h3 className="mt-6 text-xl font-bold">Instagram</h3>
            <p className="mt-3 text-gray-600">
              Visual ministry moments and inspiration.
            </p>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/BibleAurHum"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-gray-50 rounded-2xl text-center shadow hover:shadow-xl transition"
          >
            <Link className="mx-auto w-12 h-12 text-black" />
            <h3 className="mt-6 text-xl font-bold">X (Twitter)</h3>
            <p className="mt-3 text-gray-600">
              Daily thoughts and ministry updates.
            </p>
          </a>

          {/* Prayer */}
          <div className="p-8 bg-green-50 rounded-2xl text-center shadow">
            <Heart className="mx-auto w-12 h-12 text-green-600" />
            <h3 className="mt-6 text-xl font-bold">Prayer Support</h3>
            <p className="mt-3 text-gray-600">
              Even if you cannot give, you can still support through prayer.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}