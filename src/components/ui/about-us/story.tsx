import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%" },
  };

  return (
    <section ref={ref} className="px-4 md:px-0">
      {/* Story header */}
      <Card className="border-none bg-transparent shadow-none">
        <div className="text-white text-left text-3xl md:text-5xl mt-8 md:mt-[5%] ml-2 md:ml-[2rem] font-bold">
          <h1>Story</h1>
        </div>
      </Card>

      <div className="h-auto w-full flex justify-center items-center mt-8 md:mt-[5%]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-9 gap-0">
          {/* Note 1 */}
          <motion.div
            className="col-span-1 md:col-span-4 w-full h-full order-1 md:order-1"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-full bg-cyan-800 rounded p-4 md:p-2 md:pl-4 hover:scale-105 md:hover:scale-110 transition-transform duration-200 mb-2 md:mb-0">
              <h1 className="text-white text-xl font-medium py-2">
                Beginnings
              </h1>
              <p className="text-white text-sm md:text-base font-semibold">
                Since I was a kid, video games weren’t just entertainment, they
                sparked my curiosity. During 2021, I started noticing glitches
                and unexpected bugs in my favorite game Madden. Instead of
                ignoring them, I found myself asking why they happened and
                imagining how I could fix them. That curiosity planted the seed
                that I could be more than just a player, I could be a creator
                and problem solver.
              </p>
            </div>
          </motion.div>

          {/* Timeline line and dot for mobile */}
          <div className="col-span-1 flex md:hidden justify-center order-2">
            <motion.div
              className="relative w-full flex justify-center items-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
              transition={{ duration: 0.8 }}
            >
              <div className="h-6 w-1 bg-cyan-800"></div>
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                1
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline line and dot for desktop */}
          <motion.div
            className="relative col-span-1 h-full w-full hidden md:flex justify-center items-center order-2 md:order-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="h-full w-1 bg-cyan-800"></div>
            <motion.div
              className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              1
            </motion.div>
          </motion.div>

          <div className="col-span-1 md:col-span-4 h-full w-full order-3 md:order-3"></div>

          {/* Note 2 */}
          <div className="col-span-1 md:col-span-4 h-full w-full order-5 md:order-4"></div>

          {/* Timeline line and dot for mobile */}
          <div className="col-span-1 flex md:hidden justify-center order-6">
            <motion.div
              className="relative w-full flex justify-center items-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-6 w-1 bg-cyan-800"></div>
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                2
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline line and dot for desktop */}
          <motion.div
            className="relative col-span-1 h-full w-full hidden md:flex justify-center items-center order-6 md:order-5"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-full w-1 bg-cyan-800"></div>
            <motion.div
              className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              2
            </motion.div>
          </motion.div>

          <motion.div
            className="col-span-1 md:col-span-4 w-full h-full order-7 md:order-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-full h-full bg-cyan-800 rounded p-4 md:p-2 md:pl-4 hover:scale-105 md:hover:scale-110 transition-transform duration-200 mb-2 md:mb-0">
              <h1 className="text-white text-xl font-medium py-2">
                First Steps
              </h1>
              <p className="text-white text-sm md:text-base font-semibold">
                Once school reopened, I dove headfirst into coding. I took my
                first intro coding class, then AP Computer Science Principles,
                and even explored robotics in my senior year. I explored tools
                like Python and MIT App Inventor, and discovered the power of
                programming. These experiences weren’t just classes; they lit a
                fire in me to keep pushing further, honing my skills.
              </p>
            </div>
          </motion.div>

          {/* Note 3 */}
          <motion.div
            className="col-span-1 md:col-span-4 w-full h-full order-9 md:order-7"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="w-full h-full bg-cyan-800 rounded p-4 md:p-2 md:pl-4 hover:scale-105 md:hover:scale-110 transition-transform duration-200 mb-2 md:mb-0">
              <h1 className="text-white text-xl font-medium py-2">
                Pre-College Summer
              </h1>
              <p className="text-white text-sm md:text-base font-semibold">
                The summer before college, I couldn’t wait for classes to begin.
                I challenged myself with online CS courses from MIT and Harvard,
                both centered on Python. The classes weren’t easy, but they gave
                me confidence and taught me that with enough drive and
                self-discipline, I could pick up any new skill and excel in it.
              </p>
            </div>
          </motion.div>

          {/* Timeline line and dot for mobile */}
          <div className="col-span-1 flex md:hidden justify-center order-10">
            <motion.div
              className="relative w-full flex justify-center items-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="h-6 w-1 bg-cyan-800"></div>
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 1.1 }}
              >
                3
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline line and dot for desktop */}
          <motion.div
            className="relative col-span-1 h-full w-full hidden md:flex justify-center items-center order-10 md:order-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="h-full w-1 bg-cyan-800"></div>
            <motion.div
              className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 1.1 }}
            >
              3
            </motion.div>
          </motion.div>

          <div className="col-span-1 md:col-span-4 h-full w-full order-11 md:order-9"></div>

          {/* Note 4 */}
          <div className="col-span-1 md:col-span-4 h-full w-full order-13 md:order-10"></div>

          {/* Timeline line and dot for mobile */}
          <div className="col-span-1 flex md:hidden justify-center order-14">
            <motion.div
              className="relative w-full flex justify-center items-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="h-6 w-1 bg-cyan-800"></div>
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 1.4 }}
              >
                4
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline line and dot for desktop */}
          <motion.div
            className="relative col-span-1 h-full w-full hidden md:flex justify-center items-center order-14 md:order-11"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="h-full w-1 bg-cyan-800"></div>
            <motion.div
              className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 1.4 }}
            >
              4
            </motion.div>
          </motion.div>

          <motion.div
            className="col-span-1 md:col-span-4 w-full h-full order-15 md:order-12"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div className="w-full h-full bg-cyan-800 rounded p-4 md:p-2 md:pl-4 hover:scale-105 md:hover:scale-110 transition-transform duration-200 mb-2 md:mb-0">
              <h1 className="text-white text-xl font-medium py-2">College</h1>
              <p className="text-white text-sm md:text-base font-semibold">
                By my second year in college, I was ready to branch out. I fell
                in love with web development, HTML, CSS, and
                JavaScript/TypeScript opened up a new world of creativity for
                me. From there, I built personal projects, tackled Software
                Engineering courses in Java, TypeScript, and Angular, and began
                to see the whole picture of full-stack development. Every new
                skill further equipped me with the means to bring my ideas to
                life.
              </p>
            </div>
          </motion.div>

          {/* Note 5 */}
          <motion.div
            className="col-span-1 md:col-span-4 w-full h-full order-17 md:order-13"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="w-full h-full bg-cyan-800 rounded p-4 md:p-2 md:pl-4 hover:scale-105 md:hover:scale-110 transition-transform duration-200 mb-2 md:mb-0">
              <h1 className="text-white text-xl font-medium py-2">Present</h1>
              <p className="text-white text-sm md:text-base font-semibold">
                Today, I’m pushing myself further than ever. I’ve built a strong
                foundation in Software Engineering and OOP, and now I’m delving
                into modern tools like React, Tailwind CSS, and shadcn/ui. I
                don’t just want to code; I want to create, problem-solve, and
                keep learning. Every project I build is a step toward the kind
                of developer I aspire to be.
              </p>
            </div>
          </motion.div>

          {/* Timeline line and dot for mobile */}
          <div className="col-span-1 flex md:hidden justify-center order-18">
            <motion.div
              className="relative w-full flex justify-center items-center"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="h-6 w-1 bg-cyan-800"></div>
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 1.7 }}
              >
                5
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline line and dot for desktop */}
          <motion.div
            className="relative col-span-1 h-full w-full hidden md:flex justify-center items-center order-18 md:order-14"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="h-full w-1 bg-cyan-800"></div>
            <motion.div
              className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 1.7 }}
            >
              5
            </motion.div>
          </motion.div>

          <div className="col-span-1 md:col-span-4 h-full w-full order-19 md:order-15"></div>
        </div>
      </div>
    </section>
  );
};

export default Story;
