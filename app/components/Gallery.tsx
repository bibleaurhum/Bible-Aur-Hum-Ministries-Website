import { Image as ImageIcon } from "lucide-react";

const gallery = [
  "Bible Teaching",
  "Church Fellowship",
  "Prayer Meeting",
  "Youth Ministry",
  "Worship Service",
  "Community Outreach",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-red-600 font-semibold">
            Gallery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Moments of Faith & Ministry
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Every picture tells a story of God's love, transformed lives,
            worship, fellowship, and the spreading of the Gospel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div
              key={item}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                <ImageIcon className="w-20 h-20 text-white" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Photos and memories celebrating God's work through Bible Aur Hum Ministries.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}