// components/ProjectTemplate.tsx
import React from 'react';
import type { ReactElement } from 'react';
import SkillBox from "@/components/ui/skillBox";
import NextJSIcon from "@/components/ui/icons/nextJSProjIcon";
import JSIcon      from "@/components/ui/icons/jsProjIcon";
import AngularIcon from "@/components/ui/icons/angularProjIcon";

interface ProjectTemplateProps {
  title: string;          // Project title text
  description: string;    // Short description text
  backgroundImg: string;  // URL of the background image
  onClick?: () => void;   // Click handler for the card
  icons?: ReactElement[]; // Array of icon elements to display
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  description,
  backgroundImg,
  onClick,

  // Default icons if none are provided
  icons = [
    <NextJSIcon key="nextjs" />,
    <JSIcon      key="js"     />,
    <AngularIcon key="ng"     />
  ],
}) => (

    // Wrapper which centers the project card on the page
  <div className="flex items-center justify-center mt-20">
    <div
      onClick={onClick}
      className="
        relative
        group
        w-1/2 h-118
        overflow-hidden
        rounded-lg
        border border-[#27272a]
        bg-[#1f1f1f]
        shadow-lg
        cursor-pointer
      "
    >
      {/* Background image */}
      <div
        className="
          absolute inset-0
          bg-contain bg-no-repeat bg-center
          transform transition-transform duration-300 ease-in-out
          group-hover:scale-105
        "
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />

      {/* Bottom 20% black gradient overlay */}
      <div
        className="
          absolute
          bottom-0 left-0 right-0
          h-[70%]
          bg-gradient-to-t
          from-black/90
          to-transparent
        "
      />

      {/* Content layer */}
      <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        <p className="transform translate-y-2 group-hover:-translate-y-6 transition-all duration-300 text-gray-200 text-xl font-semibold">
          {title}
        </p>
        <p className="transform translate-y-2 group-hover:-translate-y-6 transition-all duration-300 text-gray-400 mb-1 font-semibold">
          {description}
        </p>

        <div className="transform translate-y-2 group-hover:-translate-y-6 transition-all duration-300 flex gap-4 mb-4">
          {icons.map((icon, i) => (
            <SkillBox key={i} icon={icon} />
          ))}
        </div>

        {/* Button which appears on hover which allows the user to click onto a sub page about the project*/}
        <button
          className="
            absolute bottom-4 left-4
            opacity-0 translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
            text-xs bg-white text-gray-600
            px-4 py-2 rounded-lg border border-black
            font-semibold hover:bg-slate-300
            ml-[1%]
          "
        >
          Learn more →
        </button>
      </div>
    </div>
  </div>
);

export default ProjectTemplate;
