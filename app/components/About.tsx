import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Image */}
        <div>
          <Image
            src="/images/about.png"
            alt="Bible Aur Hum Ministries Foundation"
            width={600}
            height={450}
            className="rounded-2xl shadow-xl w-full h-auto"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            About Bible Aur Hum
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            <strong>Bible Aur Hum Ministries Foundation</strong> exists to
            proclaim the Gospel of Jesus Christ through sound biblical
            teaching, discipleship, prayer, evangelism, and digital ministry.
            Our mission is to equip believers with the truth of Scripture,
            strengthen faith, and share the hope of Christ with Urdu and
            English-speaking communities around the world.
          </p>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li>✔ Biblical Teaching</li>
            <li>✔ Christ-Centered Sermons</li>
            <li>✔ Prayer & Spiritual Support</li>
            <li>✔ Bible Study in Urdu & English</li>
            <li>✔ Discipleship Resources</li>
            <li>✔ Global Online Ministry</li>
          </ul>

          <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300">
            Explore Our Ministry
          </button>
        </div>

      </div>
    </section>
  );
}