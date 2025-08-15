import React from "react";
import { Card } from "@/components/ui/card";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];
//const DevBlogs: React.FC = () => (
//<>
// <Card className="border-none mb-8">
//   <h2 className="text-white text-left text-4xl font-bold">Thoughts</h2>
// </Card>

{
  /* <div className="max-w-3xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-8">
        {/* 1st blog */
}
{
  /* <Card className="p-0 w-82 h-82 bg-[#272829] border border-2-black rounded-2xl overflow-hidden flex flex-col">
          <div className="h-3/6 bg-gray-200" />
          <div className="h-1/6 flex items-center px-4 text-gray-300 font-outfit text-[16px]">
            July 1, 2025
          </div>
          <div className="h-2/6 flex items-center px-4 text-white text-xl font-bold font-outfit text-[24px]">
            Why I Like Coding Personal Projects so Much
          </div>
        </Card>

        {/* placeholder blogs */
}
{
  /* {[1, 2, 3].map((_, i) => (
          <Card
            key={i}
            className="p-0 w-82 h-82 bg-[#272829] border border-2-black rounded-2xl overflow-hidden box-border"
          >
            <div className="h-3/6 bg-gray-200" />
            <div className="h-1/6 bg-gray-300" />
            <div className="h-2/6 bg-gray-400" />
          </Card>
        ))}
      </div>
    </div>  */
}
//</>
//);

//export default DevBlogs;

const DevBlogs: React.FC = () => {
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: EASE_IN_OUT,
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: EASE_IN_OUT,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full"
      >
        <Card className="border-none bg-transparent backdrop-blur-sm">
          <motion.h2
            className="text-white text-4xl md:text-6xl font-bold mb-8 text-center"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
          >
            Thoughts & Dev Blogs
          </motion.h2>

          <motion.div
            className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden border border-gray-800 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />

            {/* Floating code elements */}
            {["</>", "{ }", "const", "() =>", "debug"].map((item, index) => (
              <motion.span
                key={index}
                className="absolute text-gray-400/30 font-mono text-xl md:text-3xl"
                style={{
                  left: `${10 + index * 15}%`,
                  top: `${20 + index * 10}%`,
                }}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.5 }}
              >
                {item}
              </motion.span>
            ))}

            {/* Main coming soon text */}
            <div className="relative z-10 text-center">
              <motion.h3
                className="text-2xl md:text-4xl font-bold text-white mb-4"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                Coming Soon
              </motion.h3>
              <motion.p
                className="text-gray-400 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                I'm crafting something special. Expect deep dives into code,
                design, and the creative process.
              </motion.p>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 border border-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-800/50 hover:text-white transition-colors duration-300 group"
                >
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="mr-2 group-hover:mr-3 transition-all"
                  >
                    ←
                  </motion.span>
                  Return Home
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Progress indicator */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: "35%" }}
                transition={{
                  duration: 2,
                  delay: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>
            <p className="text-right text-sm text-gray-500 mt-1">
              Crafting in progress... 35%
            </p>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};

export default DevBlogs;
