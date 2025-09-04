"use client";

import Rive from "@rive-app/react-canvas-lite";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-[#FFF3B7] bg-[url('/bg/bg2.png')] bg-size-[20px]">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <div className="flex flex-row h-fit items-end">
          <Rive
            src="/animations/hi.riv"
            className="w-40 h-40"
            stateMachines="entry"
          />
          <div className="text-center md:text-left h-fit">
            <p className="text-2xl text-black/60">Hello, I'm</p>
            <h1 className="text-6xl md:text-9xl/[0.8] out tracking-wider [-webkit-text-stroke:2px_white]">
              JNANESH
            </h1>
          </div>
        </div>
        <p className="text-2xl text-[#A05500] mb-8 text-right w-full">
          Full Stack Developer
        </p>
      </div>

      <ChevronDown className="w-8 h-8 mt-12 animate-bounce absolute bottom-8 animation-duration-1200" />
      <div className="bg-[#FFB380] p-4 rounded-lg w-80 absolute bottom-0 translate-y-1/2 right-16 animate-float border border-dashed border-amber-600">
        <p className="text-md leading-relaxed">
          A passionate Full Stack Developer solving real-world problems using
          cutting-edge technologies.
        </p>
      </div>
    </section>
  );
};
