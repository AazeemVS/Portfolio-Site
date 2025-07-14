import React from "react";
import Footer from "@/components/ui/footer";
import TSIcon from "@/components/ui/icons/tsIcon";
import AngularIcon from "@/components/ui/icons/angularIcon";
import ProjectTemplate from "@/components/ui/projectTemplate";
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
import ReactIcon from "@/components/ui/icons/reactIcon";
import ViteIcon from "@/components/ui/icons/viteIcon";
import JavaIcon from "@/components/ui/icons/javaIcon";
import GitIcon from "@/components/ui/icons/gitIcon";
import NodeJSIcon from "@/components/ui/icons/nodeJSIcon";
import CPlusPlusIcon from "@/components/ui/icons/cppIcon";
import ShadcnIcon from "@/components/ui/icons/shadcnIcon";
import CSharpIcon from "@/components/ui/icons/csharpIcon";
import FigmaIcon from "@/components/ui/icons/figmaIcon";

import {
  BrowserRouter as Router,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

//Images
import SBESCIImg from "@/../images/SBESCI_site_pic.png";
import CatchFrenzyImg from "@/../images/Catch_Frenzy_Site_Pic2.png";
import WorkoutAppImg from "@/../images/WorkoutAppHomePage.png";
import UnexpectedEscapesHomePage from "@/../images/Unexpected_Escapes_homeImg.png";

function NavBar() {
  const location = useLocation();
  const underlineVariants = {
    rest: { width: 0 },
    hover: { width: "100%" },
    active: { width: "100%" },
  };
  const underlineTransition = { duration: 0.3, ease: "easeOut" };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="mt-5 flex justify-center">
      <div className="max-w-4xl px-4">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex justify-center">
            <NavigationMenuItem>
              <div className="flex space-x-6 px-6 py-2 border-2 border-[#27272a] rounded-full">
                {[
                  ["Web Projects", "web-projects"],
                  ["Game Projects", "game-projects"],
                ].map(([label, sectionId]) => (
                  <NavigationMenuItem key={label}>
                    <motion.div
                      className="relative"
                      initial="rest"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      <NavigationMenuLink
                        className={`text-lg font-bold whitespace-nowrap px-4 py-1 ${
                          location.hash === `#${sectionId}`
                            ? "text-cyan-700"
                            : "text-white"
                        }`}
                        onClick={() => scrollToSection(sectionId)}
                      >
                        {label}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                          variants={underlineVariants}
                          initial={
                            location.hash === `#${sectionId}`
                              ? "active"
                              : "rest"
                          }
                          animate={
                            location.hash === `#${sectionId}`
                              ? "active"
                              : "rest"
                          }
                          transition={underlineTransition}
                        />
                      </NavigationMenuLink>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

const Projects: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Card id="web-projects" className="border-none">
        <h2 className="text-white text-left text-4xl font-bold">
          Web Projects
        </h2>
      </Card>
      <ProjectTemplate
        title="Workout Tracker Application"
        description="An workout and pushup tracker application."
        backgroundImg={WorkoutAppImg}
        icons={[<JSIcon key="1" />, <HTMLIcon key="3" />, <CSSIcon key="4" />]}
        onClick={() => navigate("/WorkoutTrackerInfoPage")}
      />
      <ProjectTemplate
        title="EduBridge"
        description="An educational platform connecting learners and mentors in real time."
        backgroundImg={SBESCIImg}
        icons={[
          <AngularIcon key="1" />,
          <TSIcon key="2" />,
          <JavaIcon key="3" />,
          <HTMLIcon key="4" />,
          <CSSIcon key="5" />,
        ]}
        onClick={() => navigate("/EduBridgeInfoPage")}
      />
      <ProjectTemplate
        title="Unexpected Escapes"
        description="An educational platform connecting learners and mentors in real time."
        backgroundImg={UnexpectedEscapesHomePage}
        // override the defaults if you like, or omit this prop to get the 3-icon default
        icons={[<JSIcon key="1" />, <HTMLIcon key="3" />, <CSSIcon key="4" />]}
        onClick={() => navigate("/UnexpectedEscapesInfoPage")}
      />
      <ProjectTemplate
        title="Catch Frenzy"
        description="An educational platform connecting learners and mentors in real time."
        backgroundImg={CatchFrenzyImg}
        // override the defaults if you like, or omit this prop to get the 3-icon default
        icons={[<JSIcon key="1" />, <HTMLIcon key="3" />, <CSSIcon key="4" />]}
        onClick={() => navigate("/CatchFrenzyInfoPage")}
      />
      <Card id="game-projects" className="border-none">
        <h2 className="text-white text-left text-4xl font-bold">
          Game Projects
        </h2>
      </Card>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Projects;
