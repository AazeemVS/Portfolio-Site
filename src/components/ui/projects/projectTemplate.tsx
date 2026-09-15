// components/ProjectTemplate.tsx
import React from "react";
import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import SkillBox from "@/components/ui/skillBox";
import JSIcon from "@/components/ui/icons/jsProjIcon";
import AngularIcon from "@/components/ui/icons/angularProjIcon";

interface ProjectTemplateProps {
  title: string;
  description: string;
  backgroundImg: string;
  to: string;
  icons?: ReactElement[];
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  description,
  backgroundImg,
  to,
  icons = [<JSIcon key="js" />, <AngularIcon key="ng" />],
}) => (
  <div className="flex items-center justify-center w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] mx-auto">
    <Link
      to={to}
      aria-label={title}
      className="
        relative
        group
        block
        w-full
        aspect-video
        overflow-hidden
        rounded-xl
        border-2 border-solid border-border
        bg-[#1f1f1f]
        shadow-sm
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-cyan-500
        transition-transform duration-150
        active:scale-[0.98]
      "
    >
      {/* Background image - cropped to top so the page header/nav stays visible */}
      <div
        className="
          absolute inset-0
          bg-cover bg-no-repeat bg-top
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

        {/* Learn more indicator */}
        <span
          aria-hidden="true"
          className="
            absolute bottom-4 left-4
            translate-y-2
            group-hover:translate-y-0
            transition-all duration-300
            text-xs sm:text-sm bg-white text-gray-600
            px-3 sm:px-4 py-1 sm:py-2 rounded-lg border border-black
            font-semibold
          "
        >
          Learn more →
        </span>
      </div>
    </Link>
  </div>
);

export default ProjectTemplate;
