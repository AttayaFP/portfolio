import React from "react";

import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const skillIcons = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777BB4",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    color: "#FF2D20",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },

  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4169E1",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#000000",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Vb.net",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg",
    color: "#61DAFB",
  },
];

export const skill = () => {
  return (
    <ScrollAnimationWrapper>
      <section className="w-full py-12 md:py-16" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-center bg-clip-text bg-gradient-to-b from-black to-blue-950">
            My Skills
          </h2>

          <div className="relative overflow-hidden py-6 md:py-10 mb-6 md:mb-10">
            {/* Gradient Overlay */}
            <div className="absolute left-0 top-0 z-10 h-full w-8 sm:w-16 bg-gradient-to-r from-background to-transparent"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-8 sm:w-16 bg-gradient-to-l from-background to-transparent"></div>

            {/* First Row - Left to Right */}
            <div className="flex mb-8">
              <div className="flex space-x-8 animate-scroll-left">
                {[...skillIcons, ...skillIcons].map((skill, index) => (
                  <div
                    key={`skill-1-${index}`}
                    className="flex flex-col items-center shrink-0"
                  >
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl mb-2 hover:scale-110 transition-transform p-3 md:p-4 bg-white/5 backdrop-blur-sm"
                      style={{
                        boxShadow: `0 4px 10px rgba(0,0,0,0.1), 0 0 20px ${skill.color}25`,
                      }}
                    >
                      <img
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        src={skill.icon}
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="flex">
              <div className="flex space-x-8 animate-scroll-right">
                {[...skillIcons.slice().reverse(), ...skillIcons.slice().reverse()].map(
                  (skill, index) => (
                    <div
                      key={`skill-2-${index}`}
                      className="flex flex-col items-center shrink-0"
                    >
                      <div
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl mb-2 hover:scale-110 transition-transform p-3 md:p-4 bg-white/5 backdrop-blur-sm"
                        style={{
                          boxShadow: `0 4px 10px rgba(0,0,0,0.1), 0 0 20px ${skill.color}25`,
                        }}
                      >
                        <img
                          alt={skill.name}
                          className="w-full h-full object-contain"
                          src={skill.icon}
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold">
                        {skill.name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
};

export default skill;
