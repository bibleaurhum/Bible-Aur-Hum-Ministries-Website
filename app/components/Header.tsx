
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/questions", label: "Questions" },
  { href: "/lectures", label: "Lectures" },
  { href: "/bible-study", label: "Bible Study" },
  { href: "/articles", label: "Articles" },
  { href: "/academy", label: "Academy" },
  { href: "/jobs", label: "Job Opportunities" },
  { href: "/videos", label: "Videos" },
  { href: "/prayer", label: "Prayer" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-4">

        {/* Logo and Ministry Name */}
        <Link
          href="/"
          className="flex w-[220px] shrink-0 flex-col items-center text-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Bible Aur Hum Logo"
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
            priority
          />

          <h1 className="mt-2 whitespace-nowrap text-xl font-bold leading-tight text-blue-700">
            Bible Aur Hum
          </h1>

          <p className="mt-1 whitespace-nowrap text-base text-gray-600">
            Ministry Foundation
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden xl:block">
          <ul className="flex items-center gap-5 font-medium text-gray-700">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap transition hover:text-blue-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/support"
                className="whitespace-nowrap rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-800 transition hover:bg-gray-100 xl:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-gray-100 bg-white px-4 pb-6 pt-3 shadow-lg xl:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="mt-2">
              <Link
                href="/support"
                className="block rounded-lg bg-red-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-red-700"
                onClick={() => setMenuOpen(false)}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
