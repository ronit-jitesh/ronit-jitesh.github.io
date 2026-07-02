import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { OperatingModel } from "@/components/OperatingModel";
import { ProofStrip } from "@/components/ProofStrip";
import { RecruiterChat } from "@/components/RecruiterChat";
import { RecruiterGuide } from "@/components/RecruiterGuide";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <RecruiterGuide />
        <ProofStrip />
        <OperatingModel />
        <Work />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <RecruiterChat />
    </>
  );
}
