"use client";

import { ScrollAnimation } from "../ui/scroll-animation";
import { skillCategories } from "@/constants/data";
import Rive from "@rive-app/react-canvas-lite";

export const Skills = () => {
  return (
    <section className="py-16 px-6 bg-[url('/bg/bg3.png')] bg-size-[20px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-col-reverse md:flex-row items-start gap-8 mb-12 justify-between">
          <div className="flex flex-col gap-4">
            {skillCategories.map((category) => (
              <div key={category.category}>
                <h3 className="text-xl font-bold mb-2">{category.category}</h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <ScrollAnimation animationType="zoomIn" key={skill.name}>
                      <div className="bg-white border border-dashed border-[#2D1810] p-3 rounded-lg flex items-center gap-2 hover:bg-[#FFB380] transition-colors">
                        <img
                          src={skill.iconSrc}
                          alt={skill.name}
                          className="w-6 h-auto"
                        />
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto">
            <Rive
              className="min-w-48 h-48 scale-110"
              src="/animations/boxing.riv"
              stateMachines="State Machine 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
