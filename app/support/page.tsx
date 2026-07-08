import SupportHero from "../components/SupportHero";
import SupportMotivation from "../components/SupportMotivation";
import SupportCards from "../components/SupportCards";
import SupportOptions from "../components/SupportOptions";
import SupportClosing from "../components/SupportClosing";

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