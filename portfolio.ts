import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "lokesh kumar",
  title: "Hi all, I'm Lokesh Kumar",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with React.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "sherawat-Lokesh",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:lokeshsherawat1@gmail.com",
  linkedin: "",
  github: "https://github.com/sherawat-Lokesh",
  instagram: "",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
       
        
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "SHEKHAWATI UNIVERSITY",
    subHeader: "Bachelor of Science in Maths",
    duration: "September 2020 - Feb 2023",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
];



export const projects: ProjectType[] = [
  {
    name: "E-COMMERCE Website",
    desc: "A perfectly personalized website for you to purchase the products you are fond of.",
    github: "https://github.com/sherawat-Lokesh",
    link: "https://e-commerce-tawny-two.vercel.app/",
  },
  {
    name: "Gemini AI",
    desc: "An AI website for user interaction",
    link: "https://gemini-ai-black.vercel.app/",
  },
  {
    name: "Dice Roll Game",
    desc: "An interesting game in which you have to play Dice to win, The first person who score 50 faster will be the winner. ",
    link: "https://dice-roll-sherawat.netlify.app/",
  },
  {
    name: "Bankist Website",
    desc: "A normal website that looks cleaner and has smooth animation.",
    link: "https://bankist-sherawat.netlify.app/",
  },
];



// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Lokesh Kumar",
  description: greetings.description,
  author: "Hanzla Tauqeer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
