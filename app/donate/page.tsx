import Link from "next/link";
import { Heart, BookOpen, Globe, ShieldCheck } from "lucide-react";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700 px-4 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
            Support the Ministry
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Help Us Share God&apos;s Word
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
            Your generosity helps Bible Aur Hum Ministries Foundation create
            biblical resources, teach God&apos;s Word, and share the Gospel of
            Jesus Christ with people around the world.
          </p>

          <Link
            href="https://paypal.me/bibleaurhum"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-red-700 sm:w-auto"
          >
            <Heart className="h-6 w-6" />
            Give Through PayPal
          </Link>

          <p className="mt-4 text-sm text-blue-100">
            You will be redirected to PayPal to complete your contribution.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
              Your Support Matters
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Partner With Us in the Gospel
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Every contribution, large or small, can help us continue creating
              and sharing resources that point people to Jesus Christ.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100">
              <BookOpen className="mx-auto h-11 w-11 text-blue-700" />
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Biblical Teaching
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Help us prepare Bible lectures, studies, and educational
                resources.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100">
              <Globe className="mx-auto h-11 w-11 text-blue-700" />
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Sharing the Gospel
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Help us reach Urdu- and English-speaking audiences through
                online ministry.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-100">
              <Heart className="mx-auto h-11 w-11 text-red-600" />
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Serving Others
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Support the ongoing work of producing and sharing faith-based
                resources.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center sm:p-8">
            <ShieldCheck className="mx-auto h-10 w-10 text-blue-700" />
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Giving Through PayPal
            </h3>
            <p className="mt-3 leading-7 text-gray-700">
              PayPal handles the payment process on its own website. Before
              contributing, please review the recipient and amount carefully
              and make sure you are comfortable proceeding.
            </p>
            <Link
              href="https://paypal.me/bibleaurhum"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-800 px-6 py-3 font-semibold text-white transition hover:bg-blue-900 sm:w-auto"
            >
              Continue to PayPal
            </Link>
          </div>

          <p className="mt-10 text-center text-sm leading-6 text-gray-500">
            Thank you for your prayers, encouragement, and support. Your
            partnership is deeply appreciated.
          </p>
        </div>
      </section>
    </main>
  );
}