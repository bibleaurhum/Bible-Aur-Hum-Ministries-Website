import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">
              Bible Aur Hum
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Teaching God's Word with truth, love, and historical understanding.
              Our mission is to glorify Jesus Christ and transform lives through
              biblical teaching.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Sermons</a></li>
              <li><a href="#">Prayer</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Bible Verse */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Bible Verse
            </h3>

            <p className="text-gray-400 italic leading-7">
              "Your word is a lamp to my feet and a light to my path."
            </p>

            <p className="text-red-500 mt-3">
              Psalm 119:105
            </p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-3xl">

              <a href="#" className="hover:text-red-600 transition">
                <FaYoutube />
              </a>

              <a href="#" className="hover:text-blue-500 transition">
                <FaFacebook />
              </a>

              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                <FaLinkedin />
              </a>

              <a href="#" className="hover:text-green-500 transition">
                <FaWhatsapp />
              </a>

            </div>
          </div>

        </div>

        <hr className="border-gray-800 my-10" />

        <div className="text-center text-gray-500">
          © {new Date().getFullYear()} Bible Aur Hum Ministries.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}