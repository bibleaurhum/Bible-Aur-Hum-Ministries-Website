
import Impact from "./components/Impact";
import Founder from "./components/Founder";
import LearningCenter from "./components/LearningCenter";
import FadeIn from "./components/FadeIn";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import About from "./components/About";
import Ministries from "./components/Ministries";
import Sermons from "./components/Sermons";
import Prayer from "./components/Prayer";
import BibleStudies from "./components/BibleStudies";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Testimonies from "./components/Testimonies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <FadeIn>
        <Mission />
      </FadeIn>
<FadeIn>
  <LearningCenter />
</FadeIn>
<FadeIn>
  <Impact />
</FadeIn>
<FadeIn>
  <Founder />
</FadeIn>
      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <Ministries />
      </FadeIn>

      <FadeIn>
        <Sermons />
      </FadeIn>

      <FadeIn>
        <Prayer />
      </FadeIn>

      <FadeIn>
        <BibleStudies />
      </FadeIn>

      <FadeIn>
        <Gallery />
      </FadeIn>

      <FadeIn>
        <Events />
      </FadeIn>

      <FadeIn>
        <Testimonies />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>

      <Footer />
    </main>
  );
}