import Image from "next/image";
import Link from "next/link";

export default function Founder() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.4em] text-red-600 font-semibold">
            Meet The Founder
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-extrabold text-gray-900">
            A Life Called
            <br />
            To God's Word
          </h2>

          <div className="w-28 h-1 bg-red-600 mx-auto mt-7 rounded-full"></div>

        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE - IMAGE */}
          <div className="space-y-6">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/images/founder.jpg"
                alt="Yousaf Shahid"
                width={700}
                height={850}
                className="w-full h-auto object-cover"
                priority
              />

            </div>

            {/* 2. Identity line under photo */}
            <p className="text-center text-gray-600 italic text-lg leading-8 px-4">
              "I was born into a Christian family where the Bible was not merely read—it was lived."
            </p>

          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="space-y-10">

            {/* Name */}
            <div>
              <p className="uppercase tracking-[0.3em] text-red-600 font-semibold">
                Founder & Bible Teacher
              </p>

              <h3 className="mt-3 text-5xl font-bold text-blue-800">
                Yousaf Shahid
              </h3>
            </div>

            {/* 1. Short powerful quote */}
            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-xl shadow-sm">

              <p className="text-2xl font-semibold text-blue-900 leading-9 italic">
                "Don't just read the Bible. Let the Bible rewrite you."
              </p>

            </div>

            {/* Life story summary (can expand later) */}
            <p className="text-lg leading-9 text-gray-700">

              Raised in a Christ-centered family, I developed a deep love for Scripture from an early age.
              My late father, <strong>Rev. Rafiq Masih</strong>, was a faithful pastor whose life of humility,
              service, and devotion to God's Word shaped my spiritual journey.

              <br /><br />

              From childhood, I asked difficult questions about the Bible and sought answers through study,
              reason, and prayer. My background in science, mathematics, philosophy, and comparative religion
              has helped me engage deeply with Scripture and communicate biblical truth clearly.

            </p>

            {/* 3. Deep theological message */}
            <div className="border-l-4 border-red-600 pl-6 italic text-lg text-gray-800 leading-9">

              "Do not merely travel through the Bible. Allow the Bible to travel through you. When God's Word
              fills your heart, it unlocks what human wisdom never could. The finite mind cannot fully
              comprehend the Infinite God, but through His Spirit and His Word, He reveals Himself to those
              who seek Him."

            </div>

            {/* Final mission statement */}
            <div className="bg-gray-100 p-6 rounded-xl">

              <p className="text-gray-800 text-lg leading-8 font-medium text-center">

                "We do not exist to build an audience; we exist to build disciples. We do not seek popularity;
                we seek faithfulness. We do not preach ourselves; we proclaim Jesus Christ and His living Word."

              </p>

            </div>

            {/* Button */}
            <div className="pt-4">

              <Link
                href="/founder"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
              >
                Read Full Story →
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}