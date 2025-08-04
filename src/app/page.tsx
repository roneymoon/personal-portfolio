import {Header} from "@/sections/Header";
import {Hero} from "@/sections/Hero"

import LogoTicker from "@/sections/LogoTicker";
// import {Pricing} from "@/sections/Pricing";
// import Testimonials from "@/sections/Testimonials";
import {Projects} from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <LogoTicker/>
      <Projects/>
      {/* <Pricing/> */}
      {/* <Testimonials/> */}
    </>
  );
}


// border-gray-200/30 = --color-border