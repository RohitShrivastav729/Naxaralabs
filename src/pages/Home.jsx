
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import SelectedWork from "../components/sections/SelectedWork";
import WhyUs from "../components/sections/WhyUs";
import Process from "../components/sections/Process";
import CTA from "../components/sections/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SelectedWork />
      <WhyUs />
      <Process />
      <CTA />
    </>
  );
}

export default Home;