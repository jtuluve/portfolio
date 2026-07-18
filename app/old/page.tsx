"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/Icon";
import {
  BriefcaseIcon,
  CodeIcon,
  FolderKanbanIcon,
  SparklesIcon,
} from "@/components/ui/nav-icons";
import { NavLink } from "@/components/ui/nav-link";
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
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="fixed w-full top-8 z-40">
        <nav className="flex justify-between items-center px-6 py-4 rounded-md border border-dashed border-black bg-[rgba(255,255,255,0.16)] w-4/5 m-auto backdrop-blur-sm">
          <div className="text-4xl font-bold">J</div>
          <div className="flex items-center gap-4">
            <NavLink href="#skills" title="Skills">
              <CodeIcon />
            </NavLink>
            <NavLink href="#experience" title="Experience">
              <BriefcaseIcon />
            </NavLink>
            <NavLink href="#projects" title="Projects">
              <FolderKanbanIcon />
            </NavLink>
            <NavLink href="#works" title="Works">
              <SparklesIcon />
            </NavLink>
          </div>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="bg-[#2D1810] text-white hover:bg-[#3D2820] px-6 py-2 text-md rounded-lg"
          >
            <Icon src="/download.svg" className="w-4 h-4 r-2" /> Resume
          </Link>
        </nav>
      </div>

      <Hero />
      <div id="skills" className="scroll-mt-28">
        <ScrollAnimation animationType="fadeInLeft">
          <Skills />
        </ScrollAnimation>
      </div>
      <div id="experience" className="scroll-mt-28">
        <ScrollAnimation animationType="fadeInRight">
          <Experience />
        </ScrollAnimation>
      </div>
      <div id="projects" className="scroll-mt-28">
        <ScrollAnimation animationType="fadeInUp">
          <Projects />
        </ScrollAnimation>
      </div>
      <div id="works" className="scroll-mt-28">
        <ScrollAnimation animationType="fadeInUp">
          <Works />
        </ScrollAnimation>
      </div>
      <ScrollAnimation animationType="fadeInUp">
        <Contact />
      </ScrollAnimation>
      <ScrollAnimation animationType="fadeInUp">
        <Footer />
      </ScrollAnimation>
    </>
  );
}
