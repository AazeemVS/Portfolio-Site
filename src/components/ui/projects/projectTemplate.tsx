// components/ProjectTemplate.tsx
import React from "react";
import type { ReactElement } from "react";
import SkillBox from "@/components/ui/skillBox";
import JSIcon from "@/components/ui/icons/jsProjIcon";
import AngularIcon from "@/components/ui/icons/angularProjIcon";

interface ProjectTemplateProps {
  title: string;
  description: string;
  backgroundImg: string;
  onClick?: () => void;
  icons?: ReactElement[];
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  description,
  backgroundImg,
  onClick,
  icons = [<JSIcon key="js" />, <AngularIcon key="ng" />],
}) => (
  <div className="flex items-center justify-center mt-10 md:mt-20 w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] mx-auto">
    <div
      onClick={onClick}
      className="
        relative
        group
        w-full
        aspect-video
        overflow-hidden
        rounded-xl
        border-2 border-solid border-[#27272a]
        bg-[#1f1f1f]
        shadow-sm
        cursor-pointer
      "
    >
      {/* Background image - now using cover instead of contain */}
      <div
        className="
          absolute inset-0
          bg-cover bg-no-repeat bg-center
          transform transition-transform duration-300 ease-in-out
          group-hover:scale-105
        "
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />

      {/* Bottom gradient overlay */}
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
      <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-end h-full">
        <p className="transform translate-y-2 group-hover:-translate-y-6 transition-all duration-300 text-white text-lg sm:text-xl md:text-2xl font-semibold">
          {title}
        </p>
        <p className="transform translate-y-2 group-hover:-translate-y-6 transition-all duration-300 text-gray-300 mb-1 text-sm sm:text-base font-semibold">
          {description}
        </p>

        <div className="transform translate-y-2 group-hover:-translate-y-6 transition-all duration-300 flex gap-2 sm:gap-4 mb-4">
          {icons.map((icon, i) => (
            <SkillBox key={i} icon={icon} />
          ))}
        </div>

        {/* Learn more button */}
        <button
          className="
            absolute bottom-4 left-4
            opacity-0 translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
            text-xs sm:text-sm bg-white text-gray-600
            px-3 sm:px-4 py-1 sm:py-2 rounded-lg border border-black
            font-semibold hover:bg-slate-300
          "
        >
          Learn more →
        </button>
      </div>
    </div>
  </div>
);

export default ProjectTemplate;
