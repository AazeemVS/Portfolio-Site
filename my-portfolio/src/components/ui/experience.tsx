import { motion } from 'framer-motion';


const Experience = () => (

<section className="bg text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-solid border-[#27272a] py-6 shadow-sm w-[45%] mt-20 mx-auto relative flex flex-col justify-center overflow-hidden">
  <div className="w-full max-w-6xl mx-auto">
    <div className="flex flex-col justify-center [&>*]:pb-4 ml-[2rem]">
      {/* Title */}
      <div className="text-left">
        <h2 className="text-white text-5xl font-bold">Experience</h2>
      </div>

      {/* Timeline Item 1 */}
      <div className="relative pl-8 py-6 group" style={{ marginLeft: 0 }}>
        <div className="flex flex-col items-start mb-1 group-last:before:hidden 
          before:absolute before:left-2 before:h-full before:w-px before:bg-slate-300 
          before:self-start before:-translate-x-1/2 before:translate-y-3
          after:absolute after:left-2 after:w-4 after:h-4 after:bg-slate-50 
          after:border-2 after:box-content after:border-slate-50 after:rounded-full 
          after:-translate-x-1/2 after:translate-y-1.5">
          {/* Small blue circle inside the node */}
          <div className="absolute left-2 w-3 h-3 bg-cyan-600 rounded-full -translate-x-1/2 translate-y-2.5 z-10"></div>
 <div className="font-medium text-cyan-600 mb-1 sm:mb-0"> 
          <motion.a
          href="https://www.rit.edu/computing/school-interactive-games-and-media/"
          target="_blank"
          className="relative inline-block font-medium text-cyan-600 mb-1 sm:mb-0"
          whileHover="hover"
          initial="rest"
        >
          <span className="relative z-10">RIT School of Interactive Games and Media</span>
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-cyan-600"
            variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.a></div>          <div className="text-white text-xl font-semibold">Junior Web Developer Intern</div>
          <div className="text-gray-400 text-sm">May, 2025 – August, 2025</div>
        </div>
        <div className="text-slate-300 timeline-content">
          I worked as a front end web developer to construct a website that promoted the game our team developed.
        </div>
      </div>

      {/* Timeline Item 2 */}
      <div className="relative pl-8 py-6 group" style={{ marginLeft: 0 }}>
        <div className="flex flex-col items-start mb-1 group-last:before:hidden 
          before:absolute before:left-2 before:h-full before:w-px before:bg-slate-300 
          before:self-start before:-translate-x-1/2 before:translate-y-3
          after:absolute after:left-2 after:w-4 after:h-4 after:bg-slate-50 
          after:border-2 after:box-content after:border-slate-50 after:rounded-full 
          after:-translate-x-1/2 after:translate-y-1.5">
          {/* Small blue circle inside the node */}
          <div className="absolute left-2 w-3 h-3 bg-cyan-600 rounded-full -translate-x-1/2 translate-y-2.5 z-10"></div>
          <div className="font-medium text-cyan-600 mb-1 sm:mb-0"> 
          <motion.a
          href="https://gridonesolutions.com/"
          target="_blank"
          className="relative inline-block font-medium text-cyan-600 mb-1 sm:mb-0"
          whileHover="hover"
          initial="rest"
        >
          <span className="relative z-10">Grid 1 Solutions</span>
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-cyan-600"
            variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.a></div>
          <div className="text-white text-xl font-semibold">Front End Web Developer</div>
          <div className="text-gray-400 text-sm">September, 2024 – Present</div>
        </div>
        <div className="text-slate-300 timeline-content">
          Worked on a small agile scrum team to modernize an outdated website.
        </div>
      </div>


      {/* Timeline Item 3 */}
      <div className="relative pl-8 py-6 group" style={{ marginLeft: 0 }}>
        <div className="flex flex-col items-start mb-1 group-last:before:hidden 
          before:absolute before:left-2 before:h-full before:w-px before:bg-slate-300 
          before:self-start before:-translate-x-1/2 before:translate-y-3
          after:absolute after:left-2 after:w-4 after:h-4 after:bg-slate-50 
          after:border-2 after:box-content after:border-slate-50 after:rounded-full 
          after:-translate-x-1/2 after:translate-y-1.5">
          {/* Small blue circle inside the node */}
          <div className="absolute left-2 w-3 h-3 bg-cyan-600 rounded-full -translate-x-1/2 translate-y-2.5 z-10"></div>
          <div className="font-medium text-cyan-600 mb-1 sm:mb-0">Impetus</div>
          <div className="text-white text-xl font-semibold">Game Play Programmer (AI Specialization)</div>
          <div className="text-gray-400 text-sm">May, 2025 – August, 2025</div>
        </div>
        <div className="text-slate-300 timeline-content">
          I worked as a front end web developer to construct a website that promoted the game our team developed.
        </div>
      </div>
    </div>
  </div>
</section>
); 
export default Experience;
