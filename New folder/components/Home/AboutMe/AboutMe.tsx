import React from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project
import { forwardRef } from "react";
import GithubIcon from "../../../components/Icons/GithubIcon"; // Assuming this path is correct for your project
import HtmlIcon from "../../../components/Icons/HtmlIcon";
import CssIcon from "../../../components/Icons/CssIcon";
import JavascriptIcon from "../../../components/Icons/JavascriptIcon";
import BootstrapIcon from "../../../components/Icons/BootstrapIcon";
import ReactIcon from "../../../components/Icons/ReactIcon";
import NextjsIcon from "../../../components/Icons/NextjsIcon";
import TailwindIcon from "../../../components/Icons/TailwindIcon";
interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const technologies = [
    [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "JavaScript", icon: JavascriptIcon },
      { name: "Bootstrap", icon: BootstrapIcon },
    ],
    [
      { name: "React.js", icon: ReactIcon },
      { name: "Next.js", icon: NextjsIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
    ],
  ];

  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* 0.1 About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* Paragraphs & Image */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            
            <div className="font-Header text-gray-400 text-justify">
              I&apos;m an <span className="text-AAsecondary font-bold">Engineering graduate</span> in <span className="text-AAsecondary font-bold">EEE</span> (<span className="text-AAsecondary font-bold">2021 batch</span>) and completed a <span className="text-AAsecondary font-bold">Fullstack Development</span> course.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              I have professional experience as a <span className="text-AAsecondary">Web Developer</span> at <span className="text-AAsecondary">Cornerstohn Solution</span> (Nov 2022 - Apr 2025), working full-time as a front-end developer. My expertise includes <span className="text-AAsecondary">HTML</span>, <span className="text-AAsecondary">CSS</span>, <span className="text-AAsecondary">JavaScript</span>, <span className="text-AAsecondary">Bootstrap</span>, <span className="text-AAsecondary">React.js</span>, <span className="text-AAsecondary">Next.js</span>, and <span className="text-AAsecondary">Tailwind CSS</span>.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              I love taking on new challenges and continuously learning new technologies to improve my skills and deliver high-quality web experiences.
            </div>
            <div className="font-Header tracking-wide text-gray-400 pt-2 pb-1 text-justify">
              Here&apos;s what I&apos;m usually working with these days:
            </div>
            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
              {technologies.map((techGroup, groupIndex) => (
                <div key={groupIndex} className="flex flex-col space-y-4 sm:text-base text-sm">
                  {techGroup.map((tech, techIndex) => {
                    const Icon = tech.icon;
                    return (
                      <div key={techIndex} className="flex flex-row items-center space-x-2">
                        <Icon className="h-5 w-5 text-AAsecondary flex-none" />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="font-Header text-gray-400 pt-4 text-justify">
              Whether it&apos;s building new web apps, optimizing user interfaces, or collaborating with teams, I&apos;m always excited for the next project.
            </div>
            {/* GitHub Section */}
            <div className="font-Header text-gray-400 pt-6">
              <div className="flex items-center space-x-2 mb-2">
                <a
                  href="https://github.com/Ajith163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-AAsecondary transition-colors"
                >
                  <span className="mr-1">My GitHub</span>
                  <GithubIcon className="h-5 w-5 text-AAsecondary" />
                </a>
              </div>
              <div className="ml-1">Featured Repositories:</div>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                <li>
                  <a href="https://github.com/Ajith163/auth-crud" target="_blank" rel="noopener noreferrer" className="hover:text-AAsecondary">auth-crud</a>
                </li>
                <li>
                  <a href="https://github.com/Ajith163/courseRegistration" target="_blank" rel="noopener noreferrer" className="hover:text-AAsecondary">courseRegistration</a>
                </li>
                <li>
                  <a href="https://github.com/Ajith163/Eventbooking" target="_blank" rel="noopener noreferrer" className="hover:text-AAsecondary">Eventbooking</a>
                </li>
                <li>
                  <a href="https://github.com/Ajith163/ecommerce" target="_blank" rel="noopener noreferrer" className="hover:text-AAsecondary">ecommerce</a>
                </li>
                <li>
                  <a href="https://github.com/Ajith163/Webdesign-theme" target="_blank" rel="noopener noreferrer" className="hover:text-AAsecondary">Webdesign-theme</a>
                </li>
                <li>
                  <a href="https://github.com/Ajith163/Task_management" target="_blank" rel="noopener noreferrer" className="hover:text-AAsecondary">Task_management</a>
                </li>
                
              </ul>
            </div>
          </div>
          {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* Image Section (Mobile) */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe;
