import Link from "next/link";

export default function SupportHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-800 to-red-700 text-white">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Decorative Circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">

        <p className="uppercase tracking-[0.4em] text-yellow-300 font-semibold">
          Support The Ministry
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
          Become A
          <br />
          Ministry Partner
        </h1>

        <p className="mt-10 max-w-4xl mx-auto text-xl leading-9 text-blue-100">

          Your partnership enables us to proclaim the Gospel of Jesus Christ,
          answer difficult biblical questions, strengthen believers,
          produce biblical teaching, and prepare for future ministries that
          serve the poor, widows, orphans, schools, and hospitals.

        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          <Link
            href="https://paypal.me/bibleaurhum"
            target="_blank"
            className="rounded-xl bg-yellow-400 px-10 py-5 text-xl font-bold text-black transition hover:bg-yellow-300"
          >
            ❤️ Support via PayPal
          </Link>

          <Link
            href="https://www.youtube.com/@bibleaurhum"
            target="_blank"
            className="rounded-xl border-2 border-white px-10 py-5 text-xl font-semibold transition hover:bg-white hover:text-blue-900"
          >
            ▶ Visit YouTube
          </Link>

        </div>

      </div>

    </section>
  );
}