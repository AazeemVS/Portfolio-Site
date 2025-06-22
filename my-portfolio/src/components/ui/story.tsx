import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%" }
  };

  return (
    <section ref={ref}>
      {/* Story header */}
      <Card className="border-none">
        <div className="text-white text-left text-5xl mt-[5%] ml-[2rem] font-bold">
          <h1>Story</h1>
        </div>
      </Card>
      
      <div className="h-auto w-full flex justify-center items-center mt-[5%]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 gap-0">
          {/* Note 1 */}
          <motion.div 
            className="col-span-4 w-full h-full"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-full bg-cyan-800 rounded p-2 md:pl-4 hover:scale-110 transition-transform duration-200">   
              <h1 className="text-white text-xl font-medium py-2">Beginnings</h1>
              <p className="text-white text-base font-semibold">I've been playing video games since I was a kid, but around age 15 (in 2021, during quarantine) I started noticing glitches and errors. Madden was my go-to, and I'd see players fail to register certain moves or weird interactions causing funny bugs. I couldn't help but wonder why those bugs happened, and dreamt about how I might fix them to make my favorite game even better.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative col-span-1 h-full w-full flex justify-center items-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="h-full w-1 bg-cyan-800"></div>
            <motion.div 
              className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              1
            </motion.div>
          </motion.div>
          
          <div className="col-span-4 h-full w-full"></div>

          {/* Note 2 */}
          <div className="col-span-4 h-full w-full"></div>
          
          <motion.div 
            className="relative col-span-1 h-full w-full flex justify-center items-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-full w-1 bg-cyan-800"></div>
            <motion.div 
              className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              2
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="col-span-4 w-full h-full"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-full h-full bg-cyan-800 rounded p-2 md:pl-4 hover:scale-110 transition-transform duration-200">   
              <h1 className="text-white text-xl font-medium py-2">First Steps</h1>
              <p className="text-white text-base font-semibold">Once quarantine ended, I dove into coding at school. I took an intro course, then AP Computer Science Principles and a robotics class in my senior year, using Python and MIT App Inventor. Those classes and extracurriculars cemented my love for programming.</p>
            </div>
          </motion.div>    

          {/* Note 3 */}
          <motion.div 
            className="col-span-4 w-full h-full"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="w-full h-full bg-cyan-800 rounded p-2 md:pl-4 hover:scale-110 transition-transform duration-200">   
              <h1 className="text-white text-xl font-medium py-2">Pre-College Summer</h1>
              <p className="text-white text-base font-semibold">The summer before college, I tackled online CS courses from MIT and Harvard to sharpen my skills. Both used Python, and they gave me confidence heading into my first year.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative col-span-1 h-full w-full flex justify-center items-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="h-full w-1 bg-cyan-800"></div>
            <motion.div 
              className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 1.1 }}
            >
              3
            </motion.div>
          </motion.div>
          
          <div className="col-span-4 h-full w-full"></div>

          {/* Note 4 */}
          <div className="col-span-4 h-full w-full"></div>
          
          <motion.div 
            className="relative col-span-1 h-full w-full flex justify-center items-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="h-full w-1 bg-cyan-800"></div>
            <motion.div 
              className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 1.4 }}
            >
              4
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="col-span-4 w-full h-full"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div className="w-full h-full bg-cyan-800 rounded p-2 md:pl-4 hover:scale-110 transition-transform duration-200">   
              <h1 className="text-white text-xl font-medium py-2">College</h1>
              <p className="text-white text-base font-semibold">In my second year, I took an intro to web development class and fell in love with HTML, CSS, and JavaScript. From there, I built personal projects and dove deeper, taking Software Engineering courses where I learned Java, TypeScript, and Angular, and explored full-stack web development.</p>
            </div>
          </motion.div>  

          {/* Note 5 */}
          <motion.div 
            className="col-span-4 w-full h-full"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="w-full h-full bg-cyan-800 rounded p-2 md:pl-4 hover:scale-110 transition-transform duration-200">   
              <h1 className="text-white text-xl font-medium py-2">Present</h1>
              <p className="text-white text-base font-semibold">Last semester I wrapped up rigorous Software Engineering and OOP classes, and I've been experimenting with HTML, Tailwind CSS, React, and shadcn/ui to level up my web-dev skills even more.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative col-span-1 h-full w-full flex justify-center items-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="h-full w-1 bg-cyan-800"></div>
            <motion.div 
              className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 1.7 }}
            >
              5
            </motion.div>
          </motion.div>
          
          <div className="col-span-4 h-full w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Story;