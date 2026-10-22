
import type { Metadata } from "next";

import SupportHero from "../components/SupportHero";
import SupportMotivation from "../components/SupportMotivation";
import SupportCards from "../components/SupportCards";
import SupportOptions from "../components/SupportOptions";
import SupportClosing from "../components/SupportClosing";

export const metadata: Metadata = {
  title: "Support Bible Aur Hum Ministries",
  description:
    "Discover ways to support Bible Aur Hum Ministries through prayer, sharing biblical teaching, and partnering with our mission to spread the Gospel and strengthen believers.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Support Bible Aur Hum Ministries",
    description:
      "Discover ways to support Bible Aur Hum Ministries through prayer, sharing biblical teaching, and ministry partnership.",
    url: "https://www.bibleaurhum.com/support",
    type: "website",
  },
};

export default function SupportPage() {
  return (
    <main>
      <SupportHero />
      <SupportMotivation />
      <SupportCards />
      <SupportOptions />
      <SupportClosing />
    </main>
  );
}
