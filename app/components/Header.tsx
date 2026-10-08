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
          <ul className="flex items-center gap-7 font-medium text-gray-700">
            <li>
              <Link
                href="/"
                className="transition hover:text-blue-700"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="transition hover:text-blue-700"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/questions"
                className="transition hover:text-blue-700"
              >
                Questions
              </Link>
            </li>

            <li>
              <Link
                href="/lectures"
                className="transition hover:text-blue-700"
              >
                Lectures
              </Link>
            </li>

            <li>
              <Link
                href="/bible-study"
                className="transition hover:text-blue-700"
              >
                Bible Study
              </Link>
            </li>

            <li>
              <Link
                href="/articles"
                className="transition hover:text-blue-700"
              >
                Articles
              </Link>
            </li>

            <li>
              <Link
                href="/videos"
                className="transition hover:text-blue-700"
              >
                Videos
              </Link>
            </li>

            <li>
              <Link
                href="/prayer"
                className="transition hover:text-blue-700"
              >
                Prayer
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition hover:text-blue-700"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                href="/support"
                className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}