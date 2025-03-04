"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { ImFolderDownload } from "react-icons/im";
const home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text  */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-3xl text-accent-hover">
              Associate Engineer
            </span>
            <br />
            <br />
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent-hover">
                Shubham Kumar Vishwakarma
              </span>
              <br />
              <br />
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Associate Engineer with 1+ years of experience in React.js,
              JavaScript, PHP, MySQL, and API integration. Skilled in
              developing. scalable web applications, optimizing performance, and
              enhancing user engagement. Proven ability to streamline workflows,
              reducing resolution time by 20 and boosting task efficiency by
              25%. Passionate about clean architecture, front-end performance,
              and modern development practices.
            </p>
            {/* btn and social  */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1qw50wgjyfOMBNnO1z6ACd96skvdbd4kG/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                <span>download cv</span>
                <ImFolderDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerstyles="flex gap-8"
                  iconstyles="w-12 h-12 border border-accent-hover rounded-full flex justify-center items-center text-accent-hover text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo  */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default home;
