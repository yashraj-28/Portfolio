import React from "react";
import { FaReact } from "react-icons/fa";

import { SiUnity } from "react-icons/si";
import { SiUnrealengine } from "react-icons/si";
import { SiBmcsoftware } from "react-icons/si";
import { FaVrCardboard } from 'react-icons/fa';
import fpsmultiplayer from "@/public/FPSMultiplayer.png";
import actionshooter from "@/public/2DActionShooter.png";
import toontanks from "@/public/ToonTanks.png";
import HealthHub from "@/public/HealthHub.png";
import LiveDocs from "@/public/LiveDocs.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Tennessee Reading Research Center, Knoxville, TN",
    description:
      "In my role as a Web Developer at Tennessee Reading Research Center, I design and build web applications using HTML, CSS, JavaScript, PHP, and SQL. I collaborate with project managers and learning specialists to enhance eLearning solutions and manage cloud-based servers while ensuring quality assurance for live applications. Additionally, I assist in database management, focusing on design and optimization for efficient data storage and retrieval.",
    icon: React.createElement(FaReact),
    date: "April 2024 - Current",
  },
  {
    title: "Software Development Intern",
    location: "The Net VR , Austin, TX",
    description:
      "As an Virtual Reality Developer at The Net VR, I designed and implemented interactive object behaviors, realistic physics, and immersive UI elements using Unity’s XR Toolkit, boosting user engagement by 25%. Developed and optimized VR environments for Android and iOS, improving frame rates by 30% for smoother performance.",
    icon: React.createElement(FaVrCardboard),
    date: "Nov. 2024 - April 2025",
  },
  {
    title: "Software Engineering Fellow, New York",
    location: "Headstarter AI",
    description:
      "As a Software Engineering Fellow at Headstarter AI, I developed and deployed four AI applications utilizing Node.js, Next.js, and MongoDB, hosted on AWS EC2 with Docker, improving response accuracy by 35%. I also built an AI-powered chat system with OpenAI for NLP and secure JWT-based authentication, enhancing user support efficiency by 45%.",
    icon: React.createElement(SiBmcsoftware),
    date: "July 2024 - Sept. 2024",
  },
  {
    title: "Unity Developer",
    location: "Goldon Studios, Pune, India",
    description:
      "At Goldon Studios, I integrated NFTs into an FPS multiplayer game using Solana blockchain technology, enhancing the value of in-game assets. I designed cross-platform user interfaces for both Android and desktop devices to ensure accessibility and functionality. Additionally, I implemented multiplayer functionality with Photon PUN 2 for seamless online experiences and optimized character animations and cut-scenes to improve performance using techniques like animation compression and LOD systems.",
    icon: React.createElement(SiUnity),
    date: "Nov 2021 - March 2022",
  },
] as const;

export const projectsData = [
  {
    title: "FPS Multiplayer Shooter",
    description:
      "I developed an online first-person competitive multiplayer game. ",
    tags: ["C#", "Unity", "Multiplayer", "3D Game Development"],
    imageUrl: fpsmultiplayer,
  },
  {
    title: "Mad Doctor",
    description:
      "Developed a captivating 2D action shooter game using Unity. The game features animated sprites for characters, enemies, and gun shooting.",
    tags: ["C#", "Unity", "2D Animation", "Tilemap"],
    imageUrl: actionshooter,
  },
  {
    title: "Toon Tanks",
    description:
      "Developed a dynamic 3D tank shooter game using Unreal Engine 5.3. Enhanced gameplay with realistic missile animations, immersive sound effects, and visually appealing VFX.",
    tags: ["Unreal Engine", "C++", "Blueprints"],
    imageUrl: toontanks,
  },
  {
    title: "Health-Hub",
    description:
      "Built a healthcare platform that streamlined patient registration and appointment scheduling for over 10,000 users.",
    tags: ["Next.js", " TypeScript", "HTML / CSS", "Vercel", "Git", "Twilio"],
    imageUrl: HealthHub,
  },
  {
    title: "Live Docs",
    description:
      "Built an improved Google Docs that manages millions of collaborators in real-time.",
    tags: ["Next.js", " TypeScript", "HTML / CSS", "Vercel", "Git", "Twilio"],
    imageUrl: LiveDocs,
  },
] as const;

export const skillsData = [
  // Web Development
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",

  "MongoDB",
  "Redux",

  "Express",
  "PostgreSQL",
  "Python",

  // Game Development
  "Unity",
  "Unreal Engine",
  "C#",
  "C++",

  "Unreal Engine Blueprints",

  "Animation",
  "Physics Simulation",
  "Game Design",
  "AI Programming",
  "Level Design",
  "VR/AR Development",
] as const;

export const educationData = [
  {
    title: "The University of Tennessee",
    location: "Knoxville, TN",
    icon: "",
    date: "dvava",
    GPA: "sva",
  },
  {
    title: "Savitribai Phule Pune University",
    location: "Pune, India",
    icon: "",
    date: "vavaev",
    GPA: " h je ",
  },
] as const;
