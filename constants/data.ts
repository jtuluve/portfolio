export const projects = [
  {
    image: "/images/genasiri.png",
    title: "Genasiri",
    description:
      "A transliterator enabling 1000+ users to convert text from multiple languages into Tulu script.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    image: "/images/musyncc.png",
    title: "Musyncc",
    description:
      "Built a real-time music synchronization platform using WebSockets and the YouTube API, enabling users to listen to music together seamlessly.",
    technologies: [
      "React",
      "Next.js",
      "WebSocket",
      "Socket.io",
      "YouTube API",
      "Node.js",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    image: "/images/ezorder.png",
    title: "EZOrder",
    description:
      "Built a user-friendly web app enabling instant food ordering with 24-hour order validity and seamless in-person payment.",
    technologies: [
      "React",
      "WebSocket",
      "Tailwind CSS",
      "Socket.io",
      "Express.js",
      "MongoDB",
      "Node.js",
    ],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", iconSrc: "/icons/html5.png" },
      { name: "React", iconSrc: "/icons/react.png" },
      { name: "Next.js", iconSrc: "/icons/next.png" },
      { name: "Tailwind", iconSrc: "/icons/tailwind.png" },
      { name: "Figma", iconSrc: "/icons/figma.png" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", iconSrc: "/icons/nodejs.png" },
      { name: "Express", iconSrc: "/icons/express.png" },
      { name: "NestJS", iconSrc: "/icons/nestjs.png" },
      { name: "Socket.IO", iconSrc: "/icons/socket-io.png" },
      { name: "Puppeteer", iconSrc: "/icons/puppeteer.png" },
      { name: "Auth.js", iconSrc: "/icons/authjs.png" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", iconSrc: "/icons/js.png" },
      { name: "TypeScript", iconSrc: "/icons/ts.png" },
      { name: "C", iconSrc: "/icons/c.png" },
      { name: "C++", iconSrc: "/icons/cpp.png" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", iconSrc: "/icons/mongodb.png" },
      { name: "Firebase", iconSrc: "/icons/firebase.png" },
      { name: "SQL", iconSrc: "/icons/sql.png" },
      { name: "Redis", iconSrc: "/icons/redis.png" },
      { name: "Supabase", iconSrc: "/icons/supabase.png" },
      { name: "Prisma ORM", iconSrc: "/icons/prisma.png" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", iconSrc: "/icons/git.png" },
      { name: "GitHub", iconSrc: "/icons/github.png" },
      { name: "Docker", iconSrc: "/icons/docker.png" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", iconSrc: "/icons/problem-solving.png" },
      { name: "Teamwork", iconSrc: "/icons/teamwork.png" },
      { name: "Quick Learning", iconSrc: "/icons/quick-learning.png" },
      { name: "Collaboration", iconSrc: "/icons/collaboration.png" },
    ],
  },
];


export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "A J Institute of Medical Sciences and Research Center, Mangaluru",
    duration: "Sept 2023 - Aug 2024",
    shortDesc: "Developed a faculty appraisal management web application using modern web technologies.",
    points: [
      "Developed 'Faculty Appraisal Forum' software, a web application utilizing React, Next.js, Auth.js, MongoDB, and Firebase Storage."
    ]
  },
  {
    role: "Freelance Web Developer",
    company: "Kreekarvat Technologies, Mangaluru",
    duration: "Nov 2024 - Mar 2025",
    shortDesc: "Built responsive websites and implemented automation solutions for client operations.",
    points: [
      "Built 2 responsive websites for SVST institutions using modern web technologies, attracting 5,000+ visitors and enhancing digital presence.",
      "Used Nodemailer, Gmail API, and UIPath automation tool for emailing and event triggers."
    ]
  },
  {
    role: "Freelance Software Developer",
    company: "BillMaxo Solutions, Bengaluru",
    duration: "Jan 2025 - Jun 2025",
    shortDesc: "Developed automation tools and APIs for WhatsApp marketing and food delivery integrations.",
    points: [
      "Developed a WhatsApp Marketing API using Express.js, Puppeteer, and whatsapp-web.js.",
      "Built Swiggy and Zomato integration tools for automated order scraping and restaurant data insights."
    ]
  }
];
