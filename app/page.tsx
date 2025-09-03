"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/Icon";
import { experience, projects, skillCategories } from "@/constants/data";
import Rive from "@rive-app/react-canvas-lite";
import { ChevronDown, ExternalLink, Github } from "lucide-react";

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

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-[#FFF3B7]">
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

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12 justify-between">
            <div className="flex flex-col gap-8">
              {skillCategories.map((category) => (
                <div key={category.category}>
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-white border border-dashed border-[#2D1810] p-3 rounded-lg flex items-center gap-2 hover:bg-[#FFB380] transition-colors"
                      >
                        <img
                          src={skill.iconSrc}
                          alt={skill.name}
                          className="w-6 h-auto"
                        />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Rive
              className="min-w-48 h-48 scale-110"
              src="/animations/boxing.riv"
              stateMachines="State Machine 1"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-[#fff8d6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1 space-y-10">
              {experience.map((exp, idx) => (
                <div className="grid grid-cols-[auto_1fr] gap-6" key={idx}>
                  {/* Timeline */}
                  <div className="relative">
                    <div className="h-full w-1 bg-repeat-y bg-center [background-size:contain] [background-image:url('/pixelated-border.png')]"></div>
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

      {/* Featured Projects */}
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

      {/* Contact Section */}
      <section className="py-16 px-6 bg-[#F0F0DC]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#FF8C42] hover:bg-[#E67A35] text-white px-8 py-3"
              onClick={() =>
                (window.location.href = "mailto:jtuluve+pf@gmail.com")
              }
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-[#2D1810] px-8 py-3 bg-transparent"
              onClick={() =>
                window.open("https://linkedin.com/in/jtuluve", "_blank")
              }
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-[#2D1810]/20">
        <p className="text-sm text-[#2D1810]/70">
          © 2024 JNANESH. Built with passion and pixels.
        </p>
      </footer>
    </>
  );
}
