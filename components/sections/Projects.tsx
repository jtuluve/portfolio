'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/constants/data';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { ScrollAnimation } from '../ui/scroll-animation';

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="py-16 px-6 bg-[url('/bg/bg3.png')] bg-size-[20px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.1}>
              <Card
                className="border-2 border-dashed border-[#2D1810] bg-white hover:shadow-lg transition-shadow h-[-webkit-fill-available]"
              >
                <CardContent className="p-6 grid grid-rows-[auto_auto_auto_1fr_auto] h-[-webkit-fill-available]">
                  <div className="bg-[#E8E8E8] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain"
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
                          className="text-xs border border-[#FFB380] px-2 py-1 rounded"
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
                        className="bgtext-white cursor-pointer"
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
                        className="cursor-pointer"
                        variant="secondary"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="secondary"
            className="text-lg"
            onClick={toggleShowAll}
          >
            {showAll ? 'View Less' : 'View More'}
            {showAll ? (
              <ChevronUp className="w-5 h-5 ml-1" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-1" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};
