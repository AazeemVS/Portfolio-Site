import { motion } from "framer-motion";

const Experience = () => (
  <section className="bg-slate-900 text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-solid border-[#27272a] py-6 shadow-sm w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] mt-10 md:mt-20 mx-auto relative flex flex-col justify-center overflow-hidden">
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col justify-center [&>*]:pb-4 ml-0 sm:ml-[2rem]">
        {/* Title */}
        <div className="text-left px-4 sm:px-0">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Experience
          </h2>
        </div>

        {/* Timeline Item 1 */}
        <div className="relative pl-8 sm:pl-8 py-4 sm:py-6 group">
          <div
            className="flex flex-col items-start mb-1 group-last:before:hidden 
            before:absolute before:left-2 sm:before:left-2 before:h-full before:w-px before:bg-slate-300 
            before:self-start before:-translate-x-1/2 before:translate-y-3
            after:absolute after:left-2 sm:after:left-2 after:w-3 sm:after:w-4 after:h-3 sm:after:h-4 after:bg-slate-50 
            after:border-2 after:box-content after:border-slate-50 after:rounded-full 
            after:-translate-x-1/2 after:translate-y-1.5"
          >
            {/* Small blue circle inside the node */}
            <div className="absolute left-2 sm:left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-500 rounded-full -translate-x-1/2 translate-y-2.5 z-10"></div>
            <div className="font-medium text-cyan-500 mb-1 sm:mb-0 text-sm sm:text-base">
              <motion.a
                href="https://www.rit.edu/computing/school-interactive-games-and-media/"
                target="_blank"
                className="relative inline-block font-medium text-cyan-500 mb-1 sm:mb-0"
                whileHover="hover"
                initial="rest"
              >
                <span className="relative z-10">
                  RIT School of Interactive Games and Media
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-cyan-500"
                  variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            </div>
            <div className="text-white text-lg sm:text-xl font-semibold">
              Junior Web Developer Intern
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              May, 2025 – August, 2025
            </div>
          </div>
          <div className="text-slate-300 text-sm sm:text-base timeline-content">
            I worked as a front end web developer to construct a website that
            promoted the game our team developed.
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="relative pl-8 sm:pl-8 py-4 sm:py-6 group">
          <div
            className="flex flex-col items-start mb-1 group-last:before:hidden 
            before:absolute before:left-2 sm:before:left-2 before:h-full before:w-px before:bg-slate-300 
            before:self-start before:-translate-x-1/2 before:translate-y-3
            after:absolute after:left-2 sm:after:left-2 after:w-3 sm:after:w-4 after:h-3 sm:after:h-4 after:bg-slate-50 
            after:border-2 after:box-content after:border-slate-50 after:rounded-full 
            after:-translate-x-1/2 after:translate-y-1.5"
          >
            {/* Small blue circle inside the node */}
            <div className="absolute left-2 sm:left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-500 rounded-full -translate-x-1/2 translate-y-2.5 z-10"></div>
            <div className="font-medium text-cyan-500 mb-1 sm:mb-0 text-sm sm:text-base">
              <motion.a
                href="https://gridonesolutions.com/"
                target="_blank"
                className="relative inline-block font-medium text-cyan-500 mb-1 sm:mb-0"
                whileHover="hover"
                initial="rest"
              >
                <span className="relative z-10">Grid 1 Solutions</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-cyan-500"
                  variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            </div>
            <div className="text-white text-lg sm:text-xl font-semibold">
              Front End Web Developer
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              September, 2024 – May, 2024
            </div>
          </div>
          <div className="text-slate-300 text-sm sm:text-base timeline-content">
            Worked on a small agile scrum team to modernize an outdated website.
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="relative pl-8 sm:pl-8 py-4 sm:py-6 group">
          <div
            className="flex flex-col items-start mb-1 group-last:before:hidden 
            before:absolute before:left-2 sm:before:left-2 before:h-full before:w-px before:bg-slate-300 
            before:self-start before:-translate-x-1/2 before:translate-y-3
            after:absolute after:left-2 sm:after:left-2 after:w-3 sm:after:w-4 after:h-3 sm:after:h-4 after:bg-slate-50 
            after:border-2 after:box-content after:border-slate-50 after:rounded-full 
            after:-translate-x-1/2 after:translate-y-1.5"
          >
            {/* Small blue circle inside the node */}
            <div className="absolute left-2 sm:left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-500 rounded-full -translate-x-1/2 translate-y-2.5 z-10"></div>
            <div className="font-medium text-cyan-500 mb-1 sm:mb-0 text-sm sm:text-base">
              Impetus
            </div>
            <div className="text-white text-lg sm:text-xl font-semibold">
              Game Play Programmer (AI Specialization)
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              May, 2025 – August, 2025
            </div>
          </div>
          <div className="text-slate-300 text-sm sm:text-base timeline-content">
            I worked as a front end web developer to construct a website that
            promoted the game our team developed.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
