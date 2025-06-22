import React from 'react';
import {
  Card,
} from "@/components/ui/card"
import Footer from '@/components/ui/footer';
import TSIcon from "@/components/ui/icons/tsIcon";
import NextJSIcon from "@/components/ui/icons/nextJSProjIcon";
import AngularIcon from "@/components/ui/icons/angularIcon";
import SBESCIImg from "@/../images/SBESCI_site_pic.png"
import ProjectTemplate from '@/components/ui/projectTemplate';
import { useNavigate } from 'react-router-dom';


const Projects: React.FC = () => {
  const navigate = useNavigate();
return (
        <>
<Card>
    <h2 className="text-white text-left text-4xl font-bold ml-[5%]"> Projects </h2>
</Card>

      <ProjectTemplate
        title="Impetus"
        description="An educational platform connecting learners and mentors in real time."
        backgroundImg={SBESCIImg}
        // override the defaults if you like, or omit this prop to get the 3-icon default
        icons={[<NextJSIcon key="1"/>, <TSIcon key="2"/>, <AngularIcon key="3"/>]}
        onClick={() => navigate('/ImpetusInfoPage')}
      />


 <footer>
      <Footer></Footer>
 </footer>
 </>
)
};
    

export default Projects;