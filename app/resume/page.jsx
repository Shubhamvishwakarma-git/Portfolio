"use client";
import { motion } from "framer-motion";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table } from "lucide-react";
import { space } from "postcss/lib/list";
// about data

const about = {
  title: "About Me",
  description:
    "I am a Associate Engineer with 1+ years of experience in React.js, JavaScript, PHP, MySQL, and API integration. Skilled in developing scalable web applications, optimizing performance, and enhancing user engagement. Proven ability to streamline workflows, reducing resolution time by 20% and boosting task efficiency by 25%. Passionate about clean architecture, front-end performance, and modern development practices.",
  info: [
    {
      title: "Name",
      value: "Shubham Kumar Vishwakarma",
    },
    {
      title: "Email",
      value: "shubhamkumarvishwakarma77@gmail.com",
    },
    {
      title: "Phone",
      value: "9090529911",
    },
    {
      title: "Experience",
      value: "1+ years",
    },
    {
      title: "Nationality",
      value: "Indian",
    },
    {
      title: "Languages",
      value: "English, Hindi",
    },
  ],
};

// experience data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description:
    "I have worked with some of the top companies in the industry and have gained a lot of experience in the field of web development.",
  items: [
    {
      title: "Associate Engineer",
      company: "Frootle India Private Limited.",
      duration: "2023 - Present",
      description:
        "I am working as an Associate Engineer at Frootle India Private Limited. I am responsible for developing and maintaining the front-end of the web applications.",
    },
  ],
};
// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "I have completed my education from some of the top universities in the country and have gained a lot of knowledge in the field of computer science.",
  items: [
    {
      institute: "Rourkela Institute of Management Studies.",
      degree: "Bachelor of Computer Applications.",
      duration: "2019 - 2022",
      description:
        "I have completed my Bachelor of Computer Applications from Rourkela Institute of Management Studies. I have gained a lot of knowledge in the field of computer science and have learned a lot of new technologies.",
    },
  ],
};
// skills data
const skills = {
  title: "Skills",
  description:
    "I have gained a lot of skills in the field of web development and have worked with some of the top technologies in the industry.",
  skilllist: [
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs  />,
    },
    {
      name: "HTML 5",
      icon: <FaHtml5  />,
    },
    {
      name: "CSS 3",
      icon: <FaCss3  />,
    },
    {
      name: "JavaScript",
      icon: <FaJs  />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss  />,
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0]"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto gap-6 xl:m-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content  */}
          <div className="min-h-[70vh] w-full">
            {/* experience  */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-hover">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot  */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education  */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-hover">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot  */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent-hover"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills  */}

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mex-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                              <div className="text-7xl group-hover:text-accent-hover transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className=" capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about  */}

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] ">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="mex-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  mx-auto xl:mx-0">
                {about.info.map((item,index)=>{
                  return(
          
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.title}</span>
                      <span className="text-xl">{item.value}</span>
                    </li>
                )
                })}
              </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
