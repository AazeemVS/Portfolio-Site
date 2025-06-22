import React from 'react';
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
import NextJSIcon from "@/components/ui/icons/nextJSProjIcon";
import CSharpIcon from "@/components/ui/icons/csharpIcon";
import AngularIcon from "@/components/ui/icons/angularIcon";
import FigmaIcon from "@/components/ui/icons/figmaIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type IconComponent = React.ComponentType<{ className?: string }>;

// Define which icons go in each row
const skillsRow1: IconComponent[] = [HTMLIcon, CSSIcon, JSIcon, TSIcon, ReactIcon];
const skillsRow2: IconComponent[] = [ViteIcon, GitIcon, NodeJSIcon, JavaIcon, TailwindCSSIcon];
const skillsRow3: IconComponent[] = [ShadcnIcon, CPlusPlusIcon, AngularIcon, CSharpIcon, FigmaIcon];

// Skills component displays a grid of skills
const Skills: React.FC = () => {
    return (
        <>
        {/* Wrap all the content in a card component */}
        <Card className="bg-gray-800">

             {/* Title */}
            <div className="text-left">
                <h2 className="text-white text-5xl font-bold ml-[5%]">My Skills</h2>
            </div>

            {/* Container for icons grid */}
            <div className="items-center ml-4 mr-4 gap-4">

                {/* First row of icons */}
                <div className="grid grid-cols-5 gap-4">
                    {skillsRow1.map((Icon, index) => (
                        // Render each icon with size classes
                        <Icon key={index} className="h-12 w-12" />
                    ))}
                </div>

                {/* Second row of icons */}
                <div className="grid grid-cols-5 gap-4">
                    {skillsRow2.map((Icon, index) => (
                        <Icon key={index} className="h-12 w-12" />
                    ))}
                </div>
                
                {/* Third row of icons */}
                <div className="grid grid-cols-5 gap-4">
                    {skillsRow3.map((Icon, index) => (
                        <Icon key={index} className="h-12 w-12" />
                    ))}
                </div>
            </div>
        </Card>
        </>
    );
};

export default Skills;
