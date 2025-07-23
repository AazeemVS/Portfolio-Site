import React from "react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import Experience from "@/components/ui/experience";
import StaticSkillsScroller from "@/components/ui/staticSkills";
import Story from "@/components/ui/about-us/story";
import { motion } from "framer-motion";
import AboutMeCard from "@/components/ui/about-us-card";
const AboutMe: React.FC = () => (
  <>
    <Card className="border-none">
      <h2 className="text-white text-left text-4xl font-bold"> About Me </h2>
    </Card>

    <AboutMeCard></AboutMeCard>

    {/* Experience Section */}

    <Experience></Experience>

    {/* Skills */}
    <section className="bg-[#0f172a] text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-solid border-[#27272a] py-6 shadow-sm w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] mt-10 md:mt-20 mx-auto relative justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col justify-center [&>*]:pb-4">
          {/* Title */}
          <div className="grid grid-cols-2 px-4 sm:px-6 md:px-8 items-center">
            <div className="text-left">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                My Skills
              </h2>
            </div>
          </div>
          <StaticSkillsScroller />
        </div>
      </div>
    </section>

    {/* Personal Story Section */}
    <Story></Story>
    <footer>
      <Footer></Footer>
    </footer>
  </>
);

export default AboutMe;
