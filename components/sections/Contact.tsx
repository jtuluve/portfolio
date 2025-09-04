"use client";

import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="py-16 px-6 bg-[#F0F0DC]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects.
          Let's connect and build something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:jtuluve@gmail.com" target="_blank">
            <Button
              className="bg-[#FF8C42] hover:bg-[#E67A35] text-white px-8 py-3"
            >
              Get In Touch
            </Button>
          </a>
          <a href="https://linkedin.com/in/jtuluve" target="_blank">
            <Button
              variant="outline"
              className="border-[#2D1810] px-8 py-3 bg-transparent"
            >
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
