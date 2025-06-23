import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const LandingPage: React.FC = () => (
  <>
    <Card>
      <CardHeader>
        <CardTitle>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </CardTitle>
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
            Seattle WA, Falls Church VA, Cambridge MA
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Hey I'm Aazeem, I'm a 19 year old full stack web, software, and game
          developer. I have been programming for 3 years, and I enjoy expressing
          my creativity and bringing ideas to life online.
        </p>
      </CardContent>
    </Card>

    <Experience></Experience>

    <section className="bg text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-solid border-[#27272a] py-6 shadow-sm w-[45%] mt-20 mx-auto relative flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col justify-center [&>*]:pb-4 ml-[2rem]">
          {/* Title */}
          <div className="text-left">
            <h2 className="text-white text-5xl font-bold">My Skills</h2>
          </div>
          <SkillsScroller
            icons={[HTMLIcon, CSSIcon, JSIcon, TSIcon, ReactIcon]}
          />
          <SkillsScroller
            icons={[ViteIcon, GitIcon, NodeJSIcon, JavaIcon, TailwindCSSIcon]}
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
        </div>
      </div>
    </section>

    <footer>
      <Footer></Footer>
    </footer>
  </>
);
export default LandingPage;
