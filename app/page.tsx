import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { ProofStrip } from "@/components/ProofStrip";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Writing } from "@/components/Writing";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <ProofStrip />
        <Work />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
