import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { AotAISection } from "@/components/sections/AotAISection";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Work />
      <Services />
      <Pricing />
      <AotAISection />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
