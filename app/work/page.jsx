"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Workslide from "@/components/Workslide";

const projects = [
  {
    num: "01",
    category: "front-end",
    title: "Zarvis",
    description: "Integrated Gemini API for AI-driven solutions, improving NLP response accuracy by 25% and Constructed a fully responsive UI with Tailwind CSS, boosting click-through rates by 12%.",
    stack: [
      { name: "React.js" },
      { name: "Vite" },
      { name: "Zen AI API" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://shubhamvishwakarma-git.github.io/Zarvis/",
    github: "https://github.com/Shubhamvishwakarma-git/Zarvis",
  },
  {
    num: "02",
    category: "front-end",
    title: "Task-Manager",
    description: "Developed a task management system for team collaboration & ticket tracking with CRUD functionality and Designed and integrated JWT authentication, fortifying user access controls and streamlining task assignments",
    stack: [
      { name: "React.js" },
      { name: "MongoDB" },
      { name: "Vite" },
      { name: "JWT" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://shubhamvishwakarma-git.github.io/Task-Manager/",
    github: "https://github.com/Shubhamvishwakarma-git/Task-Manager",
  },
  {
    num: "03",
    category: "frontend",
    title: "Analytics-dashboard-assessment",
    description: "Analytics Dashboard is a dynamic and responsive data visualization platform built with React.js, GraphQL, JavaScript, CSS, and Tailwind CSS. The dashboard provides an intuitive and interactive interface for analyzing complex data through charts and graphs.",
    stack: [
      { name: " React.js" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "GraphQL" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://shubhamvishwakarma-git.github.io/analytics-dashboard-assessment/",
    github: "https://github.com/Shubhamvishwakarma-git/analytics-dashboard-assessment",
  },
  // {
  //   num: "04",
  //   category: "frontend",
  //   title: "project 1",
  //   description: "",
  //   stack: [
  //     { name: "HTML 5" },
  //     { name: "HTML 5" },
  //     { name: "HTML 5" },
  //     { name: "HTML 5" },
  //     { name: "HTML 5" },
  //   ],
  //   image: "/assets/work/thumb1.png",
  //   live: "",
  //   github: "",
  // },
  // {
  //   num: "05",
  //   category: "frontend",
  //   title: "project 1",
  //   description: "",
  //   stack: [
  //     { name: "HTML 5" },
  //     { name: "HTML 5" },
  //     { name: "HTML 5" },
  //     { name: "HTML 5" },
  //     { name: "HTML 5" },
  //   ],
  //   image: "/assets/work/thumb1.png",
  //   live: "",
  //   github: "",
  // },
];

const Work = () => {
  const [project, setproject] = useState(projects[0]);
  const handleslidechange = (Swiper) => {
    //get current slide
    const currentindex = Swiper.activeIndex;
    //update project state based on current slide index
    setproject(projects[currentindex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num  */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title  */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project category  */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              {/* stack  */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent-hover">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border  */}
              <div className="border border-white/20"></div>
              {/* button  */}
              <div className="flex items-center gap-6">
                {/* live project button  */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-hover" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* git repo link  */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent-hover" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Git Repolink</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleslidechange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center items-center bg-pink-50/20
                  "
                    >
                      {/* overlay  */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image  */}
                      <div className="relative w-full h-full">
                        <img
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button  */}
              <Workslide  containerstyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnstyle="bg-accent-hover hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
