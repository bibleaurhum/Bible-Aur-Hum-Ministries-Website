import { Quote } from "lucide-react";

const testimonies = [
  {
    name: "Sarah",
    country: "Pakistan",
    testimony:
      "Through Bible Aur Hum Ministries, I found a deeper understanding of God's Word and my faith has grown stronger.",
  },
  {
    name: "David",
    country: "Bahrain",
    testimony:
      "The Bible teachings answered questions I had struggled with for years. God used this ministry to transform my life.",
  },
  {
    name: "Grace",
    country: "United Kingdom",
    testimony:
      "Every sermon points me back to Scripture. I have experienced renewed hope and spiritual growth.",
  },
];

export default function Testimonies() {
  return (
    <section
      id="testimonies"
      className="py-24 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-red-600 font-semibold">
            Testimonies
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Lives Transformed by God's Grace
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We praise God for every life He has touched through His Word.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonies.map((item) => (
            <div
              key={item.name}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <Quote className="w-12 h-12 text-red-600 mb-6" />

              <p className="text-gray-600 dark:text-gray-300 leading-7 italic">
                "{item.testimony}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                  {item.name}
                </h3>

                <p className="text-red-600 font-semibold">
                  {item.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}