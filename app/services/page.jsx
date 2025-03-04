"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Front-End Development with Gen AI",
    description:
      "Zarvis - AI-Powered Web App (React.js, Vite, Zen AI API)",
    href: "https://shubhamvishwakarma-git.github.io/Zarvis/",
  },
  {
    num: "02",
    title: "Front-End Development- CRM",
    description:
      "Task Manager - Team Collaboration & Ticketing System (React.js, MongoDB, Vite, JWT, Tailwind CSS)",
    href: "https://shubhamvishwakarma-git.github.io/Task-Manager/",
  },
  {
    num: "03",
    title: "Front-End Development - Analytivs",
    description:
      "Analytics Dashboard is a sleek and responsive data visualization tool built with React.js, GraphQL, and Tailwind CSS.",
    href: "https://shubhamvishwakarma-git.github.io/analytics-dashboard-assessment/",
  },
  {
    num: "04",
    title: "Front-End Development",
    description:
      "I can build a beautiful and responsive website for you using React.js, Next.js, and TailwindCSS.",
    href: "",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-6 justify-center group"
              >
                {/* top  */}
                <div className="w-full flex items-center justify-between">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-hover transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title  */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500">
                  {service.title}
                </h2>
                {/* description      */}
                <p className="text-white/60">{service.description}</p>
                {/* border  */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
