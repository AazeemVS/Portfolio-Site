import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import { ArrowLeftIcon, RocketIcon } from "@radix-ui/react-icons";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];
const LINEAR: [number, number, number, number] = [0, 0, 1, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      duration: 0.35,
      ease: EASE_OUT,
      staggerChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
};

const ImpetusInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[60vh]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            variants={item}
            className="mx-auto mb-4 inline-flex items-center justify-center rounded-2xl border border-border p-3"
          >
            <RocketIcon className="w-6 h-6 text-cyan-400" />
          </motion.div>

          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
          >
            Impetus
          </motion.h1>

          <motion.div
            variants={item}
            className="relative h-[3px] w-40 sm:w-56 rounded-full overflow-hidden mx-auto mt-4 mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 opacity-70" />
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 bg-white/40"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.6, ease: LINEAR }}
              />
            )}
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-transparent border-border rounded-2xl shadow-[0_0_0_1px_rgba(113,113,122,1),0_10px_30px_-10px_rgba(6,182,212,0.25)]">
              <CardHeader className="px-5 pt-5 pb-2">
                <CardTitle className="text-white text-lg sm:text-xl">
                  Page Coming Soon
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <p className="text-sm sm:text-base text-zinc-300/90 leading-relaxed">
                  I'm still putting together the write-up for this project.
                  Check back soon for details, screenshots, and links.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex justify-center">
            <Button
              variant="outline"
              className="bg-cyan-700 hover:bg-cyan-600 text-white"
              onClick={() => navigate(-1)}
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Project
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ImpetusInfoPage;
