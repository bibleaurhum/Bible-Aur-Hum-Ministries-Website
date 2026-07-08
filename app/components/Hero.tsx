export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl text-center text-white">

          <p className="uppercase tracking-[0.4em] text-yellow-300 font-semibold">
            Bible Aur Hum Ministries Foundation
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
            Proclaiming the Truth
            <br />
            of God's Word
          </h1>

          <p className="mt-8 text-xl md:text-2xl leading-9 text-gray-200">
            Teaching God's Word faithfully, equipping believers with biblical
            truth, and sharing the Gospel of Jesus Christ with the world.
          </p>

          <p className="mt-10 text-2xl md:text-3xl font-semibold text-yellow-300">
            خدا کے کلام کی سچائی کی منادی
          </p>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">

            <button className="rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold hover:bg-red-700 transition">
              Watch Sermons
            </button>

            <button className="rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition">
              Request Prayer
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}