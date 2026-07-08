import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you need prayer, have a question,
            or want to connect with Bible Aur Hum Ministries, we're here for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <Mail className="text-red-500 w-7 h-7" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">
                  contact@bibleaurhum.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-red-500 w-7 h-7" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">
                  +973 XXXXXXXX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-red-500 w-7 h-7" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">
                  Kingdom of Bahrain
                </p>
              </div>
            </div>

            {/* Social Icons */}

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Follow Us
              </h3>

              <div className="flex gap-6 text-3xl">

                <a
                  href="https://youtube.com/@BibleAurHum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://wa.me/97300000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition"
                >
                  <FaWhatsapp />
                </a>

              </div>
            </div>

          </div>

          {/* Contact Form */}

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
            ></textarea>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}