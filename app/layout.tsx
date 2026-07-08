import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bibleaurhum.com"),

  title: {
    default: "Bible Aur Hum | Biblical Answers, Apologetics & Christian Teaching",
    template: "%s | Bible Aur Hum",
  },

  description:
    "Bible Aur Hum Ministries provides biblical answers to difficult questions, Christian apologetics, Bible studies, sermons, and resources in Urdu and English to strengthen believers and share the Gospel.",

  keywords: [
    "Bible",
    "Bible Questions",
    "Christianity",
    "Jesus Christ",
    "God",
    "Holy Spirit",
    "Trinity",
    "Christian Apologetics",
    "Bible Study",
    "Urdu Bible",
    "English Bible",
    "Christian Sermons",
    "Islam and Christianity",
    "Bible Aur Hum",
    "Bible Aur Hum Ministries",
  ],

  authors: [
    {
      name: "Bible Aur Hum Ministries",
    },
  ],

  creator: "Bible Aur Hum Ministries",
  publisher: "Bible Aur Hum Ministries",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bibleaurhum.com",
    siteName: "Bible Aur Hum",
    title: "Bible Aur Hum | Biblical Answers, Apologetics & Christian Teaching",
    description:
      "Biblical answers, Christian apologetics, Bible studies, sermons, and Gospel resources in Urdu and English.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bible Aur Hum",
    description:
      "Biblical answers, apologetics, sermons, and Bible studies in Urdu & English.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
