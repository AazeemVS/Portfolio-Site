import SBESCIImg from "@/../images/SBESCI_site_pic.png";
import WorkoutAppImg from "@/../images/WorkoutAppHomePage.png";
import { useNavigate } from "react-router-dom";
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
import TSIcon from "@/components/ui/icons/tsIcon";
import ReactIcon from "@/components/ui/icons/reactIcon";
import ViteIcon from "@/components/ui/icons/viteIcon";
import JavaIcon from "@/components/ui/icons/javaIcon";
import GitIcon from "@/components/ui/icons/gitIcon";
import AngularIcon from "@/components/ui/icons/angularIcon";
function LandingPageProjects() {
  const navigate = useNavigate();
  return (
    <div>
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
    </div>
  );
}
export default LandingPageProjects;
