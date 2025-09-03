"use client";

import { experience } from "@/constants/data";
import Rive from "@rive-app/react-canvas-lite";

export const Experience = () => {
  return (
    <section className="py-16 px-6 bg-[#fff8d6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1 space-y-10">
            {experience.map((exp, idx) => (
              <div className="grid grid-cols-[auto_1fr] gap-6" key={idx}>
                {/* Timeline */}
                <div className="relative">
                  <div className="h-full w-2.5 bg-repeat-y bg-center [background-size:contain] [background-image:url('/pixelated-border.png')]"></div>
                </div>

                {/* Content */}
                <div>
                  {/* Role */}
                  <h3 className="text-2xl font-bold text-black">
                    {exp.role}
                  </h3>

                  {/* Company & duration */}
                  <div className="mt-1 mb-3 flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm text-[#2D1810]/70">
                    <span className="font-semibold">{exp.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="italic">{exp.duration}</span>
                  </div>

                  {/* Short description */}
                  <p className="text-base leading-relaxed text-[#2D1810]/90">
                    {exp.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <Rive
              className="min-w-48 h-48 scale-110"
              src="/animations/experience.riv"
              stateMachines="State Machine 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
