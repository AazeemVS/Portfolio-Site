import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
const AboutMeCard: React.FC = () => {
  return (
    <Card className="bg-slate-900 text-card-foreground rounded-xl border-2 border-solid border-[#27272a] shadow-sm w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] mt-10 md:mt-20 mx-auto p-4 sm:p-6">
      {/* Two-column intro/photo */}
      <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-8">
        {/* Text content */}
        <div className="md:w-2/3 space-y-3 sm:space-y-4">
          <h3 className="text-white text-xl sm:text-2xl font-bold">Who I Am</h3>
          <p className="text-white text-sm sm:text-base">
            Hi there! I'm Aazeem, a 20 year old full-stack web developer who's
            passionate about creating interactive experiences. I'm based in
            Falls Church, VA and Boston, MA. I hold housing in both cities, so
            I'm ready to jump in wherever an opportunity takes me. Currently,
            I'm a junior at RIT and an incoming CTS intern at Charles Schwab.
          </p>
        </div>

        {/* Photo */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-2 border-white rounded-lg flex items-center justify-center">
            <span className="text-white/50 text-xs sm:text-sm">
              Photo coming soon
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6 md:space-y-8 mt-4 sm:mt-6">
        {/* What I Do */}
        <div>
          <h3 className="text-white text-xl sm:text-2xl font-bold">
            What I Do
          </h3>
          <ul className="mt-1 sm:mt-2 space-y-1 sm:space-y-2 text-white font-semibold"></ul>
          <p className="mt-2 sm:mt-4 text-white text-sm sm:text-base">
            During my internship at Nicky Nice Games, I worked on a team to
            construct a promotional website for a video game start up company.
            At Grid 1 Solutions, I worked on the restoration and modernization
            of a legacy website, improving performance. I've also been on the
            Dean's List every semester at RIT, where I'm a rising senior
            studying Software Engineering and Game Design & Development. Last
            summer, I constructed this personal website to deepen my
            understanding of web development.
          </p>
        </div>

        {/* My Approach & Passion */}
        <div>
          <h3 className="text-white text-xl sm:text-2xl font-bold">
            My Approach & Passion
          </h3>
          <p className="mt-1 sm:mt-2 text-white text-sm sm:text-base">
            I thrive in collaborative, Agile teams and love workng with peers to
            tackle complex challenges. I believe the best products come from
            combining design with clean, maintainable code. Whether I'm styling
            a component or debugging a back-end error.
          </p>
        </div>

        {/* Beyond Code */}
        <div>
          <h3 className="text-white text-xl sm:text-2xl font-bold">
            Beyond Code
          </h3>
          <p className="mt-1 sm:mt-2 text-white text-sm sm:text-base">
            When I'm not programming, you'll find me rock climbing, working out,
            or playing chess. A fun fact about me is that I love to go on walks
            with friends.
          </p>
        </div>

        {/* Contact Me */}
        <div>
          <h3 className="text-white text-xl sm:text-2xl font-bold">
            Contact Me
          </h3>
          <p className="mt-1 sm:mt-2 text-white text-sm sm:text-base">
            I'm actively seeking internships or junior-level roles in web
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
            . I'd love to discuss how we can build something great together!
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AboutMeCard;
