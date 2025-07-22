import React from "react";
import { Card } from "@/components/ui/card";

import Footer from "@/components/ui/footer";
import Experience from "@/components/ui/experience";
import LandingPageSkillsScroller from "@/components/ui/landingPageSkillsSection";
import AbouttMe from "@/components/ui/about-me-card";
import LandingPageProjects from "@/components/ui/landingPageProjects";
const LandingPage: React.FC = () => {
  return (
    <>
      <AbouttMe></AbouttMe>
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

      <Card className="border-none">
        <p className="text-white text-2xl ml-4 font-bold"> Coming soon...</p>
      </Card>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
export default LandingPage;
