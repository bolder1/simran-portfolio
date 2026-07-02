import Hero from "@/components/hero/Hero";
import Metrics from "@/components/sections/Metrics";
import SelectedWork from "@/components/sections/SelectedWork";
import About from "@/components/sections/About";
import HowIWork from "@/components/sections/HowIWork";
import MoreWork from "@/components/sections/MoreWork";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <SelectedWork />
      <About />
      <HowIWork />
      <MoreWork />
      <Contact />
    </>
  );
}
