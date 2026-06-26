export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Festifly",
    description:
      "FestiFly is an AI-powered platform that helps users and organizers discover, plan, and experience cultural and local festivals using real-time Reddit data, smart tools, and immersive AI interfaces.",
    technologies: ["React", "Tailwind CSS", "Django"],
    github: "https://github.com/FestiFly/Bolt-Event-2025",
    demo: "https://www.festifly.xyz/",
    image: "/projects/festifly.png",
    available: true,
  },
  {
    id: 1,
    name: "Chatbot",
    description:
      "This is a website for a Fintech Startup to showcase their innovative solutions tailored to meet the evolving needs of their clients.",
    technologies: ["React", "Tailwind CSS", "Gemini"],
    github: "https://github.com/akillabs/akillabs",
    demo: "https://interlock-teal.vercel.app/",
    image: "/projects/chatbot.png",
    available: true,
  },
  {
    id: 2,
    name: "PROMPT LIBRARY",
    description:
      "A comprehensive prompt management system that allows users to organize, search, and share AI prompts efficiently. Built with modern web technologies for seamless user experience.",
    technologies: ["React", "Tailwind CSS", "SupaBase"],
    github: "",
    demo: "",
    image: "/projects/promptlib.png",
    available: true,
  }
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/projects/hsl.webp",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/projects/rags.webp",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/projects/crown.webp",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/projects/titi.webp",
    available: false,
  },
];

