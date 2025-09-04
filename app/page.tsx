"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/Icon";
import {
  Contact,
  Experience,
  Footer,
  Hero,
  Projects,
  Skills,
  Works,
} from "@/components/sections";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function Home() {
  return (
    <>
      <div className="fixed w-full top-8 z-10">
        <nav className="flex justify-between items-center px-6 py-4 rounded-md border border-dashed border-black bg-[rgba(255,255,255,0.16)] w-4/5 m-auto backdrop-blur-sm">
          <div className="text-4xl font-bold">J</div>
          <Button
            className="bg-[#2D1810] text-white hover:bg-[#3D2820] px-6 py-2 text-md"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <Icon src="/download.svg" className="w-4 h-4 r-2" /> Resume
          </Button>
        </nav>
      </div>

      <Hero />
      <ScrollAnimation animationType="fadeInLeft">
        <Skills />
      </ScrollAnimation>
      <ScrollAnimation animationType="fadeInRight">
        <Experience />
      </ScrollAnimation>
      <ScrollAnimation animationType="fadeInUp">
        <Projects />
      </ScrollAnimation>
      <ScrollAnimation animationType="fadeInUp">
        <Works />
      </ScrollAnimation>
      <ScrollAnimation animationType="fadeInUp">
        <Contact />
      </ScrollAnimation>
      <ScrollAnimation animationType="fadeInUp">
        <Footer />
      </ScrollAnimation>
    </>
  );
}
