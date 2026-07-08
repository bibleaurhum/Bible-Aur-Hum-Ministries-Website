export default function Prayer() {
  return (
    <section
      id="prayer"
      className="py-24 bg-red-600 text-white"
    >
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <span className="uppercase tracking-[0.3em] font-semibold">
          Prayer Requests
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          We Would Love to Pray for You
        </h2>

        <p className="mt-8 text-lg leading-8 text-red-100">
          No matter what you are facing—fear, sickness, family struggles,
          financial difficulties, or spiritual battles—you are not alone.
          Our ministry believes in the power of prayer, and we are honored to
          stand with you before God.
        </p>

        <div className="mt-12">
          <button className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Submit Prayer Request
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div>
            <h3 className="text-2xl font-bold mb-3">🙏 We Listen</h3>
            <p className="text-red-100">
              Every prayer request is received with love and compassion.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">📖 We Pray</h3>
            <p className="text-red-100">
              Our team prays faithfully, believing God's promises in Scripture.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">❤️ We Care</h3>
            <p className="text-red-100">
              We desire to encourage and strengthen every believer through Christ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}