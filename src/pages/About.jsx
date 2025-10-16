import { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Bima Adam";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="max-container">
      <h1 className="head-text dark:text-white font-mono">
        <span className="text-purple-500">const</span>{" "}
        <span className="text-blue-400">developer</span>{" "}
        <span className="text-black dark:text-white">=</span>{" "}
        <span className="text-green-400">
          "{displayText}
          {!isTypingComplete && (
            <span className="animate-pulse">|</span>
          )}"
        </span>{" "}
        {/* <span className="text-gray-500">// 👋 Hi, I'm Bima!</span> */}
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300">
        <p>
          Hi, I'm Bima Adam — also known as Bima Adam Nugraha — a passionate
          Software Engineer from Boyolali, Indonesia. I'm deeply in love with
          TypeScript and JavaScript, and currently expanding my skills by
          learning Arduino and Rust, combining both web and hardware
          development. I'm the co-founder of Ignitron, a creative tech
          organization I built alongside Hikari Takahashi, focused on developing
          open-source tools and impactful digital solutions. Beyond code, I'm
          also a photography enthusiast who loves capturing the world through my
          lens. In my personal life, I'm proud to share my journey with Ririn
          Setiawati, the love of my life and my biggest supporter. Whether it's
          writing clean code, crafting beautiful UIs, or exploring the world
          behind a camera — I'm all in.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text dark:text-white">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text dark:text-white">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex dark:text-white">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  background: "transparent",
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black dark:text-white text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 dark:text-gray-300 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 dark:text-gray-400 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200 dark:border-slate-700" />

      <CTA />
    </section>
  );
};

export default About;
