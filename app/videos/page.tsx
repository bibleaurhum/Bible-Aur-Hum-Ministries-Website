import Image from "next/image";

export default function VideosPage() {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[500px] bg-gradient-to-r from-blue-900 via-blue-700 to-red-700">

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex h-full items-center justify-center px-6">

          <div className="text-center text-white">

            <p className="uppercase tracking-[0.4em] text-yellow-300 font-semibold">
              Video Library
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
              Biblical Teaching
              <br />
              Video Collection
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-200 leading-9">
              Explore Christ-centered biblical teaching, apologetics,
              theology, Bible studies, and life-changing sermons designed
              to strengthen your faith and deepen your understanding of
              God's Word.
            </p>

          </div>

        </div>

      </section>

      {/* ================= FEATURED TEACHING ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-red-600 font-semibold">
              Featured Teaching
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              Watch Our Latest Biblical Teaching
            </h2>

            <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>

          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Featured Image */}

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">

              <Image
                src="/images/featured-video.jpg"
                alt="Featured Teaching"
                width={800}
                height={450}
                className="w-full h-auto"
                priority
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-black/30"></div>

              {/* Play Button */}

              <div className="absolute inset-0 flex items-center justify-center">

                <a
                  href="https://www.youtube.com/@bibleaurhum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 w-24 h-24 rounded-full flex items-center justify-center text-white text-5xl shadow-2xl transition duration-300"
                >
                  ▶
                </a>

              </div>

            </div>

            {/* Right Content */}

            <div>

              <h3 className="text-4xl font-bold text-blue-700 leading-tight">
                Discover God's Truth Through Scripture
              </h3>

              <p className="mt-8 text-lg text-gray-700 leading-9">
                Every teaching is prepared with prayer, careful biblical study,
                historical research, and a passion to glorify Jesus Christ.
                Our mission is to strengthen believers, answer difficult
                biblical questions, defend the Christian faith, and proclaim
                the Gospel with truth, love, and biblical accuracy.
              </p>

              <a
                href="https://www.youtube.com/@bibleaurhum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300"
              >
                Visit Our YouTube Channel
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}