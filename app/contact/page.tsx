
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Bible Aur Hum Ministries
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Have a Bible question, a testimony, or a message for our
            ministry? We would be glad to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Get in Touch
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Bible Aur Hum shares biblical teaching, Christian
            apologetics, Bible studies, and Gospel resources in Urdu
            and English.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">
                Email
              </h3>
              <a
                href="mailto:bibleaurhum@gmail.com"
                className="mt-2 inline-block text-blue-700 hover:underline"
              >
                bibleaurhum@gmail.com
              </a>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-900">
                YouTube
              </h3>
              <p className="mt-2 text-slate-600">
                Watch our Bible lectures and teaching videos.
              </p>
              <a
                href="https://www.youtube.com/@bibleaurhum"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-semibold text-blue-700 hover:underline"
              >
                Visit Bible Aur Hum on YouTube →
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Send Us a Message
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Email us directly with your question or message. Please
            include a subject so we can understand your request.
          </p>

          <a
            href="mailto:bibleaurhum@gmail.com?subject=Bible%20Aur%20Hum%20Website%20Inquiry"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Email Bible Aur Hum
          </a>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Your email application will open so you can write and send
            your message. This button does not submit a message
            directly through the website.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Explore Our Ministry
        </h2>

        <p className="mt-3 text-slate-600">
          Discover biblical answers, studies, and teaching resources.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/questions"
            className="rounded-lg border border-blue-700 px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Bible Questions
          </Link>

          <Link
            href="/bible-study"
            className="rounded-lg border border-blue-700 px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Bible Studies
          </Link>

          <Link
            href="/support"
            className="rounded-lg border border-blue-700 px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Support Our Ministry
          </Link>
        </div>
      </section>
    </main>
  );
}
