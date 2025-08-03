import SBESCIImg from "@/../images/SBESCI_site_pic.png";
import WorkoutAppImg from "@/../images/WorkoutAppHomePage.png";
import { useNavigate } from "react-router-dom";
import ProjectTemplate from "@/components/ui/projectTemplate";
import HTMLIcon from "@/components/ui/icons/HTMLIcon";
import CSSIcon from "@/components/ui/icons/CSSIcon";
import JSIcon from "@/components/ui/icons/jsIcon";
import TSIcon from "@/components/ui/icons/tsIcon";
import JavaIcon from "@/components/ui/icons/javaIcon";
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
          <CSSIcon key="5" />,
        ]}
        onClick={() => navigate("/EduBridgeInfoPage")}
      />
    </div>
  );
}
export default LandingPageProjects;
