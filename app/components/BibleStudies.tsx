import Image from "next/image";

export default function BibleStudies() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-700">
            Bible Studies
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Deep biblical teachings to help you grow in your knowledge of
            God's Word.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <Image
              src="/images/about.png"
              alt="Genesis Bible Study"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                The Book of Genesis
              </h3>

              <p className="text-gray-600 mb-5">
                Discover God's creation, the beginning of humanity, and His
                eternal plan revealed in Genesis.
              </p>

              <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <Image
              src="/images/about.png"
              alt="Who Created Satan"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                Who Created Satan?
              </h3>

              <p className="text-gray-600 mb-5">
                Explore the biblical answer to one of the most challenging
                theological questions.
              </p>

              <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <Image
              src="/images/about.png"
              alt="Why Do Angels Have Wings?"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                Why Do Angels Have Wings?
              </h3>

              <p className="text-gray-600 mb-5">
                Learn what Scripture teaches about angels, their purpose,
                and their ministry.
              </p>

              <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
                Read More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}