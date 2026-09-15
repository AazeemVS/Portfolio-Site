import React from "react";

import Footer from "@/components/ui/footer";
import { PageTitle } from "@/components/ui/page-title";
import Experience from "@/components/ui/experience";
import LandingPageSkillsScroller from "@/components/ui/landingPageSkillsSection";
import Hero from "@/components/ui/hero";
import AboutMe from "@/components/ui/about-me-card";
import LandingPageProjects from "@/components/ui/landingPageProjects";
const LandingPage: React.FC = () => {
  return (
    <>
      <Hero></Hero>
      <AboutMe></AboutMe>

      <section
        id="work"
        className="bg-[#0f172a] text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-solid border-border py-6 shadow-sm w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] mt-10 md:mt-20 mx-auto relative justify-center overflow-hidden"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col justify-center [&>*]:pb-4 ml-0 sm:ml-[2rem]">
            {/* Title */}
            <div className="text-left">
              <PageTitle>My Works</PageTitle>
            </div>
          </div>
        </div>
      </section>

      <LandingPageProjects></LandingPageProjects>

      <Experience></Experience>

      <LandingPageSkillsScroller />

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
export default LandingPage;
