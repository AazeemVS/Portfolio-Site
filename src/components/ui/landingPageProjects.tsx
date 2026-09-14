const SBESCIImg = "/images/SBESCI_site_pic.png";
const WorkoutAppImg = "/images/WorkoutAppHomePage.png";
import { useNavigate } from "react-router-dom";
import ProjectTemplate from "@/components/ui/projects/projectTemplate";
import HTMLIcon from "@/components/ui/icons/HTMLIcon";
import CSSIcon from "@/components/ui/icons/CSSIcon";
import JSIcon from "@/components/ui/icons/jsIcon";
import TSIcon from "@/components/ui/icons/tsIcon";
import AngularIcon from "@/components/ui/icons/angularIcon";

function LandingPageProjects() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <ProjectTemplate
        title="Workout Tracker Application"
        description="A workout and pushup tracker application."
        backgroundImg={WorkoutAppImg}
        icons={[<JSIcon key="1" />, <HTMLIcon key="3" />, <CSSIcon key="4" />]}
        to="/WorkoutTrackerInfoPage"
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
        to="/EduBridgeInfoPage"
      />

      <div className="flex justify-center mt-4">
        <div className="group relative">
          <button
            onClick={() => navigate("/Projects")}
            className=" text-3xl font-bold relative transition-colors text-white duration-300 hover:cursor-pointer hover:text-cyan-700 px-4 py-2"
          >
            View More Projects
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-700 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPageProjects;
