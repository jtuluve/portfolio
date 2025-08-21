"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/ui/Icon";
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
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="flex flex-row h-fit items-end">
            <div className="flex-shrink-0">
              <img
                src="/standing.png"
                alt="Pixelated character"
                className="w-32"
              />
            </div>

            <div className="text-center md:text-left h-fit">
              <p className="text-2xl text-black/60">Hello, I'm</p>
              <h1 className="text-6xl md:text-9xl/[0.8] out tracking-wider [-webkit-text-stroke:2px_white]">
                JNANESH
              </h1>
            </div>
          </div>
          <p className="text-xl text-[#A05500] mb-8 text-right w-full font-bold">
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
      <section className="py-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold">Skills</h2>
            <img
              src="/skills.png"
              alt="Skills character"
              className="w-16 h-16"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { name: "JavaScript", iconSrc: "/icons/js.png" },
              { name: "TypeScript", iconSrc: "/icons/ts.png" },
              { name: "React", iconSrc: "/icons/react.png" },
              { name: "Git", iconSrc: "/icons/git.png" },
              { name: "GitHub", iconSrc: "/icons/github.png" },
              { name: "MongoDB", iconSrc: "/icons/mongodb.png" },
              { name: "Socket.IO", iconSrc: "/icons/socket-io.png" },
              { name: "Tailwind", iconSrc: "/icons/tailwind.png" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-white border border-dashed border-[#2D1810] p-3 rounded-lg flex items-center gap-2 hover:bg-[#FFB380] transition-colors"
              >
                <img src={skill.iconSrc} alt={skill.name} className="w-6 h-6" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-[#F0F0DC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <div className="h-full w-2 [background-size:100%_!important] [background:url('/pixelated-border.png')]"></div>
                <div>
                  <h3 className="text-xl font-bold">
                    Senior Full Stack Developer
                  </h3>
                  <p className="text-[#2D1810]/70 mb-2">
                    TechCorp Solutions • 2022-Present
                  </p>
                  <p className="text-sm leading-relaxed">
                    Led development of scalable web applications using React,
                    Node.js, and cloud technologies. Mentored junior developers
                    and implemented best practices for code quality and
                    performance.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <div className="h-full w-2 [background-size:100%_!important] [background:url('/pixelated-border.png')]"></div>
                <div>
                  <h3 className="text-xl font-bold">
                    Senior Full Stack Developer
                  </h3>
                  <p className="text-[#2D1810]/70 mb-2">
                    TechCorp Solutions • 2022-Present
                  </p>
                  <p className="text-sm leading-relaxed">
                    Led development of scalable web applications using React,
                    Node.js, and cloud technologies. Mentored junior developers
                    and implemented best practices for code quality and
                    performance.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <div className="h-full w-2 [background-size:100%_!important] [background:url('/pixelated-border.png')]"></div>
                <div>
                  <h3 className="text-xl font-bold">
                    Senior Full Stack Developer
                  </h3>
                  <p className="text-[#2D1810]/70 mb-2">
                    TechCorp Solutions • 2022-Present
                  </p>
                  <p className="text-sm leading-relaxed">
                    Led development of scalable web applications using React,
                    Node.js, and cloud technologies. Mentored junior developers
                    and implemented best practices for code quality and
                    performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <img
                src="/experience.png"
                alt="Experience character"
                className="w-40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#2D1810] bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#E8E8E8] h-32 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-sm text-[#2D1810]/70 mb-4">
                  A full-stack e-commerce solution built with React, Node.js,
                  and PostgreSQL. Features include user authentication, payment
                  processing, and admin dashboard.
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-[#FF8C42] hover:bg-[#E67A35] text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#2D1810] bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#2D1810] bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#E8E8E8] h-32 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">📱</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-sm text-[#2D1810]/70 mb-4">
                  A collaborative task management application with real-time
                  updates, drag-and-drop functionality, and team collaboration
                  features.
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-[#FF8C42] hover:bg-[#E67A35] text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#2D1810] bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#2D1810] bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#E8E8E8] h-32 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">🎮</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Pixel Art Game</h3>
                <p className="text-sm text-[#2D1810]/70 mb-4">
                  A browser-based pixel art adventure game built with HTML5
                  Canvas and JavaScript. Features include character movement,
                  collision detection, and level progression.
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-[#FF8C42] hover:bg-[#E67A35] text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Play Game
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#2D1810] bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#2D1810] bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#E8E8E8] h-32 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">📊</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-sm text-[#2D1810]/70 mb-4">
                  A comprehensive analytics dashboard with interactive charts,
                  real-time data visualization, and customizable reporting
                  features.
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-[#FF8C42] hover:bg-[#E67A35] text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#2D1810] bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-[#F0F0DC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#FF8C42] hover:bg-[#E67A35] text-white px-8 py-3"
              onClick={() =>
                (window.location.href = "mailto:jnanesh@example.com")
              }
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-[#2D1810] px-8 py-3 bg-transparent"
              onClick={() =>
                window.open("https://linkedin.com/in/jnanesh", "_blank")
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
