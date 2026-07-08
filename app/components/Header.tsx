"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="Bible Aur Hum Logo"
            width={70}
            height={70}
            className="rounded-full object-contain"
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              Bible Aur Hum
            </h1>

            <p className="text-sm text-gray-500">
              Ministries Foundation
            </p>
          </div>

        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 font-medium text-gray-700">

            <li>
              <Link href="/" className="hover:text-blue-700 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-700 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/questions" className="hover:text-blue-700 transition">
                Questions
              </Link>
            </li>

            <li>
              <Link href="/sermons" className="hover:text-blue-700 transition">
                Sermons
              </Link>
            </li>

            <li>
              <Link
                href="/bible-study"
                className="hover:text-blue-700 transition"
              >
                Bible Study
              </Link>
            </li>

            <li>
              <Link href="/videos" className="hover:text-blue-700 transition">
                Videos
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-700 transition">
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/support"
                className="rounded-lg bg-red-600 px-5 py-2 text-white font-semibold transition hover:bg-red-700"
              >
                Support the Ministry
              </Link>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}