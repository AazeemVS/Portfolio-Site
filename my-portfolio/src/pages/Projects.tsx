import React from "react";
import Footer from "@/components/ui/footer";
import TSIcon from "@/components/ui/icons/tsIcon";
import NextJSIcon from "@/components/ui/icons/nextJSProjIcon";
import AngularIcon from "@/components/ui/icons/angularIcon";
import ProjectTemplate from "@/components/ui/projectTemplate";
import { useNavigate } from "react-router-dom";
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

//Images
import SBESCIImg from "@/../images/SBESCI_site_pic.png";
import CatchFrenzyImg from "@/../images/Catch_Frenzy_Site_Pic2.png";
import WorkoutAppImg from "@/../images/WorkoutAppHomePage.png";
import UnexpectedEscapesHomePage from "@/../images/Unexpected_Escapes_homeImg.png";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="border-none">
        <h2 className="text-white text-left text-4xl font-bold">
          {" "}
          My Projects{" "}
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
        onClick={() => navigate("/SBECIInfoPage")}
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
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Projects;
