import React from "react";
import { Card } from "@/components/ui/card";

import Footer from "@/components/ui/footer";
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
      <Experience></Experience>

      <section
        id="work"
        className="bg-none text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] mt-20 mx-auto relative flex flex-col justify-center overflow-hidden"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col justify-center [&>*]:pb-4 ml-[2rem]">
            {/* Title */}
            <div className="text-left">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">My Works</h2>
            </div>
          </div>
        </div>
      </section>

      <LandingPageProjects></LandingPageProjects>

      <LandingPageSkillsScroller />

      <Card className="border-none bg-transparent mb-0">
        <div className="text-left">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Recent Posts</h2>
        </div>
      </Card>

      <Card className="border-none bg-transparent mt-16">
        <div className="text-left">
          <h2 className="text-white text-3xl font-bold">Coming soon...</h2>
        </div>{" "}
      </Card>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
export default LandingPage;
