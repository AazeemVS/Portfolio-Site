import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import Experience from "@/components/ui/experience";
import Skills from "@/components/ui/skills";
import Story from "@/components/ui/story";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => (
  <>
    <Card className="border-none">
      <h2 className="text-white text-left text-4xl font-bold"> About Me </h2>
    </Card>

    <Card className="bg-slate-900 p-6">
      {/* Two-column intro/photo */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Make text take two-thirds of the width */}
        <div className="md:w-2/3 space-y-4">
          <h3 className="text-white text-2xl font-bold">Who I Am</h3>
          <p className="text-white ">
            Hi there! I’m Aazeem, a 20 year old full-stack web developer who's
            passionate about creating interactive experiences. I’m based in
            Falls Church, VA · Seattle, WA · Boston, MA. I hold housing in all
            three cities, so I’m ready to jump in wherever the opportunity takes
            me. Currently, I’m working as a Front-End Developer at Grid 1
            Solutions, where I blend design elements with engineering to build
            engaging, user-friendly experiences.
          </p>
        </div>

        {/* Photo now only one-third */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="w-48 h-48 border-2 border-white rounded-lg flex items-center justify-center">
            <span className="text-white/50">Your Photo</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* What I Do */}
        <div>
          <h3 className="text-white text-2xl font-bold">What I Do</h3>
          <ul className="mt-2 space-y-2 text-white font-semibold"></ul>
          <p className="mt-4 text-white">
            During my internship at RIT’s School of Interactive Media & Games, I
            developed front-end components for student project portals. At Grid
            1 Solutions, I led the restoration and modernization of a legacy
            website—revamping its look, improving performance, and integrating
            new content management workflows. I’ve also been on the Dean’s List
            every semester at RIT, where I’m a rising junior double-majoring in
            Game Design & Development and Software Engineering. Last summer, I
            completed three AI courses on Coursera taught by Andrew Ng to deepen
            my understanding of machine learning pipelines.
          </p>
        </div>

        {/* My Approach & Passion */}
        <div>
          <h3 className="text-white text-2xl font-bold">
            My Approach & Passion
          </h3>
          <p className="mt-2 text-white">
            I thrive in collaborative, Agile teams and love pairing up to tackle
            complex challenges. I believe the best products come from marrying
            thoughtful design with clean, maintainable code. Whether I’m styling
            a component or debugging a tricky back-end issue, I give 100% to
            deliver polished, reliable solutions.
          </p>
        </div>

        {/* Beyond Code */}
        <div>
          <h3 className="text-white text-2xl font-bold">Beyond Code</h3>
          <p className="mt-2 text-white">
            When I’m not programming, you’ll find me rock climbing, 3D modeling,
            playing chess, or leveling up in video games. A fun fact about me:
            I’ve memorized the names of every country in the world.
          </p>
        </div>

        {/* Contact Me */}
        <div>
          <h3 className="text-white text-2xl font-bold">Contact Me</h3>
          <p className="mt-2 text-white">
            I’m actively seeking internships or junior-level roles in web
            development, software engineering, or game design. Feel free to
            reach out at{" "}
            <motion.a
              href="mailto:av7304@rit.edu"
              className="relative inline-block text-cyan-500"
              whileHover="hover"
              initial="rest"
            >
              <span className="relative z-10">av7304@rit.edu</span>
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-cyan-500"
                variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.a>
            . I’d love to discuss how we can build something great together!
          </p>
        </div>
      </div>
    </Card>

    <Experience></Experience>

    {/* Skills */}
    <Skills></Skills>

    {/* Personal Story Section */}
    <Story></Story>
    <footer>
      <Footer></Footer>
    </footer>
  </>
);

export default AboutMe;
