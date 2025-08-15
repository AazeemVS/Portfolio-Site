import React from "react";
import type { ReactNode } from "react";

export interface SkillBoxProps {
  icon: ReactNode;
}

const SkillBox: React.FC<SkillBoxProps> = ({ icon }) => {
  return (
    // Simple flex box containing an icon and name of a software
    <div
      className="
        inline-flex /* shrink to fit content */
        items-center justify-center
        h-12
        px-2
        bg-zinc-800 /* background color*/
        border-2 
        border-[#27272a]
        rounded-sm"
    >
      {icon}
    </div>
  );
};

export default SkillBox;
