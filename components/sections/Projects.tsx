"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/constants/data";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="border-2 border-dashed border-[#2D1810] bg-white hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 grid grid-rows-[auto_auto_auto_1fr_auto] h-[-webkit-fill-available]">
                <div className="bg-[#E8E8E8] h-32 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-[#2D1810]/70 mb-2">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-[#FFB380] text-white px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div></div>
                <div className="flex gap-2 justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="bg-black hover:bg-gray-800 text-white cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="border-2 border-black bg-transparent hover:bg-gray-100 text-black cursor-pointer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
