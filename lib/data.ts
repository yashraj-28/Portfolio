import React from "react";
import { FaReact } from "react-icons/fa";

import { SiUnity } from "react-icons/si";
import { SiUnrealengine } from "react-icons/si";

import fpsmultiplayer from "@/public/FPSMultiplayer.png";
import actionshooter from "@/public/2DActionShooter.png";
import toontanks from "@/public/ToonTanks.png";

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
    title: "Unreal Developer",
    location: "Heartshot Entertainment, St. Petersburg, FL",
    description:
      "As an Unreal Developer at Heartshot Entertainment, I design and implement new features for a 3D mobile game using Unreal Engine. I develop high-quality character animations to enhance gameplay and create intuitive, visually appealing UIs in collaboration with UX designers. Additionally, I focus on performance optimization to ensure smooth gameplay across various mobile devices.",
    icon: React.createElement(SiUnrealengine),
    date: "June 2024 - Current",
  },
  {
    title: "Web Developer",
    location: "Tennessee Reading Research Center, Knoxville, TN",
    description:
      "In my role as a Web Developer at Tennessee Reading Research Center, I design and build web applications using HTML, CSS, JavaScript, PHP, and SQL. I collaborate with project managers and learning specialists to enhance eLearning solutions and manage cloud-based servers while ensuring quality assurance for live applications. Additionally, I assist in database management, focusing on design and optimization for efficient data storage and retrieval.",
    icon: React.createElement(FaReact),
    date: "April 2024 - Current",
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
