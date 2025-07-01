import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
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
import CSharpIcon from "@/components/ui/icons/cppIcon";
import AngularIcon from "@/components/ui/icons/angularIcon";
import FigmaIcon from "@/components/ui/icons/figmaIcon";
import SkillsScroller from "@/components/ui/skillsScroller";
import Footer from "@/components/ui/footer";
import Experience from "@/components/ui/experience";
import PauseBtn from "@/components/ui/pauseBtnSkillsScroller";
import LandingPageSkillsScroller from "@/components/ui/landingPageSkillsSection";
import StaticSkillsScroller from "@/components/ui/staticSkills";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  PauseIcon,
  PlayIcon,
} from "@radix-ui/react-icons";
import SBESCIImg from "@/../images/SBESCI_site_pic.png";
import WorkoutAppImg from "@/../images/WorkoutAppHomePage.png";
import { useNavigate } from "react-router-dom";
import ProjectTemplate from "@/components/ui/projectTemplate";
import LandingPageProjects from "@/components/ui/landingPageProjects";
const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Card className="bg-slate-900">
        <CardHeader>
          <CardTitle>
            <div className="flex flex-row w-full justify-between items-center gap-2">
              {/* Name (left-aligned) */}
              <h1 className="text-4xl font-bold m-0">Aazeem Vaidya Shaikh</h1>

              {/* Social links (right-aligned) */}
              <div className="flex gap-2 justify-end">
                {/* Email */}
                <a
                  href="mailto:av7304@rit.edu"
                  target="_blank"
                  aria-label="Email"
                  className="card p-3 border-2 border-solid border-[#27272a] hover:bg-[#27272a] rounded-lg 
        transition-all duration-200 ease-in-out 
        transform hover:-translate-y-1"
                >
                  <EnvelopeClosedIcon className="h-6 w-6"></EnvelopeClosedIcon>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/AazeemVS"
                  target="_blank"
                  aria-label="GitHub"
                  className="card p-3 border-2 border-solid border-[#27272a] hover:bg-[#27272a] rounded-lg 
        transition-all duration-200 ease-in-out 
        transform hover:-translate-y-1"
                >
                  <GitHubLogoIcon className="h-6 w-6"></GitHubLogoIcon>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/AazeemVS"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="card p-3 border-2 border-solid border-[#27272a] hover:bg-[#27272a] rounded-lg 
        transition-all duration-200 ease-in-out 
        transform hover:-translate-y-1"
                >
                  <LinkedInLogoIcon className="h-6 w-6"></LinkedInLogoIcon>
                </a>
              </div>
            </div>
          </CardTitle>
          <CardDescription>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p className="text-gray-400">
                Seattle WA, Falls Church VA, Cambridge MA
              </p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Hey I'm Aazeem, I'm a 20 year old full stack web, software, and game
            developer. I have been programming for 3 years, and I enjoy
            expressing my creativity and bringing ideas to life online.
          </p>
        </CardContent>
      </Card>
      <Experience></Experience>

      <LandingPageSkillsScroller />

      <section className="bg-none text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm w-[45%] mt-20 mx-auto relative flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col justify-center [&>*]:pb-4 ml-[2rem]">
            {/* Title */}
            <div className="text-left">
              <h2 className="text-white text-5xl font-bold">My Works</h2>
            </div>
          </div>
        </div>
      </section>

      <LandingPageProjects></LandingPageProjects>

      <Card className="border-none">
        <h2 className="text-white text-left text-4xl font-bold ml-4">
          Recent Posts
        </h2>
      </Card>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
export default LandingPage;
