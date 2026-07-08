import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "Bible Teaching Conference",
    date: "Coming Soon",
    location: "Pakistan",
    description:
      "Join us for powerful biblical teaching, worship, prayer, and fellowship as we grow together in God's Word.",
  },
  {
    title: "Youth Revival Meeting",
    date: "Upcoming Event",
    location: "Online & Onsite",
    description:
      "An inspiring gathering for young believers to deepen their faith and discover God's purpose for their lives.",
  },
  {
    title: "Prayer & Worship Night",
    date: "Monthly",
    location: "Bible Aur Hum Ministries",
    description:
      "Experience a night dedicated to worship, prayer, and seeking God's presence together.",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-red-600 font-semibold">
            Upcoming Events
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Join Our Ministry Events
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We gather to worship, learn God's Word, pray together, and share the
            love of Christ with people everywhere.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-2xl transition"
            >
              <Calendar className="w-12 h-12 text-red-600 mb-6" />

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {event.title}
              </h3>

              <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <p>📅 {event.date}</p>

                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  {event.location}
                </p>
              </div>

              <p className="mt-6 text-gray-600 dark:text-gray-400 leading-7">
                {event.description}
              </p>

              <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}