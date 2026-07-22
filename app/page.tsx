import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { GridLines } from "@/components/GridLines";
import { Hero } from "@/components/Hero";
import { ModelBench } from "@/components/ModelBench";
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
      <GridLines />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <RecruiterGuide />
        <ProofStrip />
        <OperatingModel />
        <Work />
        <ModelBench />
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
