import React from "react";
import Footer from "@/components/ui/footer";
import TSIcon from "@/components/ui/icons/tsIcon";
import AngularIcon from "@/components/ui/icons/angularIcon";
import ProjectTemplate from "@/components/ui/projects/projectTemplate";
import { Card } from "@/components/ui/card";
import HTMLIcon from "@/components/ui/icons/HTMLIcon";
import CSSIcon from "@/components/ui/icons/CSSIcon";
import JSIcon from "@/components/ui/icons/jsIcon";

import { useNavigate } from "react-router-dom";

//Images
import SBESCIImg from "@/../images/SBESCI_site_pic.png";
import CatchFrenzyImg from "@/../images/Catch_Frenzy_Site_Pic2.png";
import WorkoutAppImg from "@/../images/WorkoutAppHomePage.png";
import UnexpectedEscapesHomePage from "@/../images/Unexpected_Escapes_homeImg.png";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <NavBar /> */}
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
      <Card className="border-none">
        <p className="text-white text-2xl font-bold"> Coming soon...</p>
      </Card>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Projects;
