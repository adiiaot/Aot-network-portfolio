import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { FlexPricing } from "@/components/sections/FlexPricing";
import { Process } from "@/components/sections/Process";
import { Authority } from "@/components/sections/Authority";
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
      <FlexPricing />
      <Process />
      <Authority />
      <Contact />
      <Footer />
    </>
  );
}
