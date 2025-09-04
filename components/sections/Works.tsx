"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";
import { ScrollAnimation } from "../ui/scroll-animation";
import { works } from "@/constants/data";

export const Works = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedWorks = showAll ? works : works.slice(0, 4);

  return (
    <section className="py-16 px-6 bg-[url('/bg/bg3.png')] bg-size-[20px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Works</h2>
          <Button
            variant="secondary"
            className="text-lg"
            onClick={toggleShowAll}
          >
            {showAll ? "View Less" : "View More"}
            {showAll ? (
              <ChevronUp className="w-5 h-5 ml-1" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-1" />
            )}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedWorks.map((work, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.1}>
              <Card className="border-2 border-dashed border-[#2D1810] bg-white hover:shadow-lg transition-shadow h-[-webkit-fill-available]">
                <CardContent className="p-6 grid grid-rows-[auto_auto_auto_1fr_auto] h-[-webkit-fill-available]">
                  <div className="bg-[#E8E8E8] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={work.imageUrl}
                      alt={work.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                    <p className="text-sm text-[#2D1810]/70 mb-2">
                      {work.description}
                    </p>
                    <p className="text-sm text-[#2D1810]/70 mb-2">
                      <span className="font-bold">Role:</span> {work.role}
                    </p>
                    <p className="text-sm text-[#2D1810]/70 mb-2">
                      <span className="font-bold">Company:</span> {work.company}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs border border-[#FFB380] px-2 py-1 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="font-bold">Collaborators:</span>
                      {work.collaborators.map((collaborator) => (
                        <span
                          key={collaborator}
                          className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded"
                        >
                          {collaborator}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div></div>
                  <div className="flex gap-2 justify-between">
                    {work.liveUrl && (
                      <a
                        href={work.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
