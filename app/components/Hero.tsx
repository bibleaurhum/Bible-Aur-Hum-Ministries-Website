import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[780px] items-center justify-center bg-[length:auto_100%] bg-left py-12 sm:min-h-[750px] sm:bg-cover sm:bg-center sm:py-16 lg:h-screen lg:min-h-[750px] lg:py-0"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-5xl text-center text-white">
          <p className="mx-auto max-w-3xl text-sm font-semibold uppercase leading-relaxed tracking-[0.2em] text-yellow-300 sm:text-base sm:tracking-[0.4em]">
            Bible Aur Hum Ministries Foundation
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
            Proclaiming the Truth
            <br />
            of God&apos;s Word
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-200 sm:mt-8 sm:text-xl sm:leading-9 md:text-2xl">
            Teaching God&apos;s Word faithfully, equipping believers with biblical
            truth, and sharing the Gospel of Jesus Christ with the world.
          </p>

          <p className="mt-7 text-xl font-semibold leading-relaxed text-yellow-300 sm:mt-10 sm:text-2xl md:text-3xl">
            خدا کے کلام کی سچائی کی منادی
          </p>

          <div className="mx-auto mt-5 flex w-full max-w-md flex-col justify-center gap-3 sm:mt-14 sm:max-w-none sm:flex-row sm:gap-5">
            <Link
              href="/lectures"
              className="rounded-xl bg-red-600 px-8 py-4 text-center text-lg font-semibold transition hover:bg-red-700"
            >
              Watch Sermons
            </Link>

            <Link
              href="/prayer"
              className="rounded-xl border-2 border-white px-8 py-4 text-center text-lg font-semibold transition hover:bg-white hover:text-black"
            >
              Request Prayer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}