import { Github } from "lucide-react";

const data = {
  home: {
    name: "KRISH PRAJAPATI",
    description:
      "#Full__Stack Developer | Innovator | Problem Solver 🚀 Crafting Scalable Solutions with #MERN, #NextJS & #AI", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink:
      "https://drive.google.com/file/d/1oCi5Ah-rJJtnW3UmEbqVlOISeKxUCccm/view?usp=drivesdk",
  },
  sidebar: {
    links: [
      {
        name: "git hub",
        link: "https://github.com/Krishprajapati15",
        icon: Github,
      },
    ],
  },
  about: {
    description:
      "Hey there! I'm Krish Prajapati, a passionate Full-Stack Developer and Blockchain Enthusiast with expertise in MERN Stack, Next.js, and AI-powered solutions. I thrive on building scalable, efficient, and secure applications that solve real-world problems while delivering seamless user experiences. My work spans across web development, blockchain integration, AI-driven automation, and cybersecurity, ensuring that technology not only performs efficiently but also remains future-proof.",
    image: "/imgs/krish.jpg",
    numbers: [
      { name: "TOTAL REPOSITORY", number: 70 },
      { name: "TOTAL-CONTRIBUTIONS", number: 1550 },
      { name: "CURRENT-YEAR-CONTRIBUTIONS", number: 1050 },
    ],
  },
  projects: {
    description: "Projects that have recently been completed.",
    projects: [
      {
        id: 1,
        title: "Xenesis-2025",
        description:
          "I developed a digital system to streamline Xenesis 2025, our university's biggest tech fest. It features a User Panel for event registration, an Admin Panel and Volunteer Panel for control, and a Food Coupon Scanning System for Lunch. 🚀🎉",
        image: "/projects-imgs/xenesis2025.png",
        githubLink: "https://github.com/Sachani/xenesis2025",
        previewLink: "https://xenesis.ldrp.ac.in/",
        languages: ["PHP", "JAVASCRIPT", "MYSQL", "Anime.js", "GSAP", "jQuery"],
      },
      {
        id: 2,
        title: "WealthLens",
        description:
          "AI-powered platform for tracking income, expenses, and taxes with features like SmartPaySync and Credit Card Track AI. 💸",
        image: "/projects-imgs/wealthlens.png",
        githubLink: "https://github.com/Krishprajapati15/WealthLens",
        previewLink: "https://github.com/Krishprajapati15/WealthLens",
        languages: ["NextJS", "clerk", "Supabase", "TypeScript", "TailwindCSS"],
      },
      {
        id: 3,
        title: "HackWatch",
        description:
          "HackerWatch is an AI-driven cybersecurity solution designed for real-time threat detection and vulnerability prevention. It analyzes risks, strengthens security measures, and ensures proactive digital protection against evolving cyber threats. 🔒🚀",
        image: "/projects-imgs/hackwatch.png",
        githubLink: "https://github.com/Krishprajapati15/Hackwatch",
        previewLink: "https://github.com/Krishprajapati15/Hackwatch",
        languages: [
          "React",
          "NodeJS",
          "OpenVAS",
          "TensorFlow",
          "Clerk",
          "Python",
        ],
      },
      {
        id: 4,
        title: "SecureShare",
        description:
          "SecureShare: Privacy-first platform for sharing files via secure, unique links without local storage. 🔒📂",
        image: "/projects-imgs/file.png",
        githubLink: "https://github.com/Krishprajapati15/FILE_SHARING",
        previewLink: "https://github.com/Krishprajapati15/FILE_SHARING",
        languages: ["React", "Nodejs", "MongoDB", "Expressjs", "Material UI"],
      },
      {
        id: 5,
        title: "Find My Mechanic",
        description:
          "Find My Mech is a clever mechanic reservation platform that allows users to discover and book local mechanics, Patrol Partner and Tow Partner with ease. With real-time location tracking and appointment booking, it allows for fast vehicle repair.",
        image: "/projects-imgs/coming.jpg",
        githubLink: "https://github.com/Krishprajapati15/Krishprajapati15",
        previewLink: "https://github.com/Krishprajapati15/Krishprajapati15",
        languages: [
          "React",
          "NodeJS",
          "Expressjs",
          "MongoDB",
          "GSAP",
          "ChakraUI",
          "Firebase",
        ],
      },
      {
        id: 6,
        title: "Travic",
        description:
          "Smart Traffic AI is an intelligent traffic management system 🚦🤖 that optimizes signal timings using AI and IoT sensors. It monitors real-time traffic flow, reduces congestion,  for better city traffic control. 🚗📍",
        image: "/projects-imgs/travic.png",
        githubLink: "https://github.com/Krishprajapati15/Travic",
        previewLink: "https://github.com/Krishprajapati15/Travic",
        languages: [
          "React",
          "NodeJS",
          "TensorFlow",
          "Firebase",
          "GSAP",
          "MongoDB",
        ],
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "postgresql",
        src: "/skills/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 9,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 11,
        name: "docker",
        src: "/skills/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 12,
        name: "figma",
        src: "/skills/figma.svg",
        link: "https://en.wikipedia.org/wiki/Figma",
      },
      {
        id: 13,
        name: "firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 14,
        name: "AWS",
        src: "/skills/aws.svg",
        link: "https://en.wikipedia.org/wiki/aws",
      },
      {
        id: 15,
        name: "mongoDB",
        src: "/skills/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
      {
        id: 16,
        name: "Nodejs",
        src: "/skills/node.svg",
        link: "https://en.wikipedia.org/wiki/nodejs",
      },
      {
        id: 17,
        name: "expressjs",
        src: "/skills/express.svg",
        link: "https://en.wikipedia.org/wiki/expressjs",
      },
      {
        id: 18,
        name: "python",
        src: "/skills/python.svg",
        link: "https://en.wikipedia.org/wiki/python",
      },
      {
        id: 19,
        name: "supabase",
        src: "/skills/supabase.svg",
        link: "https://en.wikipedia.org/wiki/supabase",
      },
      {
        id: 20,
        name: "ether",
        src: "/skills/ether.svg",
        link: "https://en.wikipedia.org/wiki/ether",
      },
      {
  id: 21,
  name: "svelte",
  src: "/skills/svelte.svg",
  link: "https://svelte.dev/",
},
{
  id: 22,
  name: "sass",
  src: "/skills/sass.svg",
  link: "https://sass-lang.com/",
},
{
  id: 23,
  name: "threejs",
  src: "/skills/threejs.svg",
  link: "https://threejs.org/",
},

    ],
  },
  contact: {
    email: "krish_22160@ldrp.ac.in",
  },
};

export default data;
