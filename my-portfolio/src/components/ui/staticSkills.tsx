import React from "react";
import HTMLIcon from "@/components/ui/icons/HTMLIcon";
import CSSIcon from "@/components/ui/icons/CSSIcon";
import TailwindCSSIcon from "@/components/ui/icons/tailwindCSSIcon";
import JSIcon from "@/components/ui/icons/jsIcon";
import TSIcon from "@/components/ui/icons/tsIcon";
import ReactIcon from "@/components/ui/icons/reactIcon";
import ViteIcon from "@/components/ui/icons/viteIcon";
import JavaIcon from "@/components/ui/icons/javaIcon";
import GitIcon from "@/components/ui/icons/gitIcon";
import NodeJSIcon from "@/components/ui/icons/nodeJSIcon";
import CPlusPlusIcon from "@/components/ui/icons/cppIcon";
import ShadcnIcon from "@/components/ui/icons/shadcnIcon";
import CSharpIcon from "@/components/ui/icons/cppIcon";
import AngularIcon from "@/components/ui/icons/angularIcon";
import FigmaIcon from "@/components/ui/icons/figmaIcon";

const StaticSkillsScroller: React.FC = () => {
  // Group icons into rows similar to your animated version
  const iconGroups = [
    [HTMLIcon, CSSIcon, JSIcon, TSIcon, ReactIcon],
    [ViteIcon, GitIcon, NodeJSIcon, JavaIcon, TailwindCSSIcon],
    [ShadcnIcon, CPlusPlusIcon, AngularIcon, CSharpIcon, FigmaIcon],
  ];

  return (
    <div className="space-y-4">
      {iconGroups.map((icons, groupIndex) => (
        <div
          key={`group-${groupIndex}`}
          className="flex justify-center gap-4 flex-wrap p-8"
        >
          {icons.map((Icon, iconIndex) => (
            <div
              key={`icon-${groupIndex}-${iconIndex}`}
              className="p-2 bg-[#1e293b] rounded-lg hover:bg-[#334155] transition-colors"
            >
              <Icon />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StaticSkillsScroller;
