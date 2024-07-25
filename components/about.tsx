"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");
  const { theme } = useTheme();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for game development. I honed my skills in{" "}
        <span className="font-medium">Unity & Unreal Engine,</span>focusing on
        crafting immersive gaming experiences. I am experienced in programming
        languages such as C# and C++, adept at turning creative ideas into
        functional game mechanics.{" "}
        <span className="italic">
          I also have a strong background in web development,
        </span>{" "}
        with expertise in both front-end and back-end technologies. I{" "}
        <span className="underline">love</span> creating visually stunning and
        user-friendly websites, utilizing HTML, CSS, JavaScript, and various
        frameworks to bring concepts to life. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        {/* . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
      </p>

      <p>
        {/* <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar. */}
      </p>
    </motion.section>
  );
}
