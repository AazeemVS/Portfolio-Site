import PauseBtn from "./pauseBtnSkillsScroller";
import SkillsScroller from "./skillsScroller";
import StaticSkillsScroller from "./staticSkills";
import { useState } from "react";
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
//import NextJSIcon from "@/components/ui/icons/nextJSIcon"; Might be needed later
import CSharpIcon from "@/components/ui/icons/csharpIcon";
import AngularIcon from "@/components/ui/icons/angularIcon";
import FigmaIcon from "@/components/ui/icons/figmaIcon";

function landingPageSkillsSection() {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  return (
    <section className="bg-[#0f172a] text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-solid border-[#27272a] py-6 shadow-sm w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] mt-10 md:mt-20 mx-auto relative justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col justify-center [&>*]:pb-4">
          {/* Title */}
          <div className="grid grid-cols-2 px-4 sm:px-8 items-center">
            <div className="text-left">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                My Skills
              </h2>
            </div>
            <div>
              <div className="text-right">
                <PauseBtn isPaused={isPaused} setIsPaused={setIsPaused} />
              </div>
            </div>
          </div>
          {isPaused ? (
            <StaticSkillsScroller />
          ) : (
            <>
              <SkillsScroller
                icons={[HTMLIcon, CSSIcon, JSIcon, TSIcon, ReactIcon]}
              />
              <SkillsScroller
                icons={[
                  ViteIcon,
                  GitIcon,
                  NodeJSIcon,
                  JavaIcon,
                  TailwindCSSIcon,
                ]}
              />
              <SkillsScroller
                icons={[
                  ShadcnIcon,
                  CPlusPlusIcon,
                  AngularIcon,
                  CSharpIcon,
                  FigmaIcon,
                ]}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
export default landingPageSkillsSection;
