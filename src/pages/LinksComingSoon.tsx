// src/pages/LinksComingSoon.tsx
import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  RocketIcon,
  GlobeIcon,
  ArrowLeftIcon,
} from "@radix-ui/react-icons";

const items = [
  {
    label: "GitHub Repos",
    icon: GitHubLogoIcon,
    blurb: "Source code will be public next release.",
  },
  {
    label: "Live Demos",
    icon: RocketIcon,
    blurb: "Interactive demos are being packaged.",
  },
  {
    label: "Project Website",
    icon: GlobeIcon,
    blurb: "Landing pages are in the works.",
  },
];

// Use Variants typing so TS is happy about transitions
// ease-out cubic-bezier and linear tuples:
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
      ease: EASE_OUT, // was "easeOut"
      staggerChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_OUT }, // was "easeOut"
  },
};

export default function LinksComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl"
      >
        <motion.div
          variants={item}
          className="mb-2 sm:mb-4 text-center sm:text-left"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
            Links Coming in the Next Version
          </h1>
        </motion.div>

        {/* Shimmering accent bar */}
        <motion.div
          variants={item}
          className="relative h-[3px] w-40 sm:w-56 rounded-full overflow-hidden mx-auto sm:mx-0 mb-6 sm:mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 opacity-70" />
          <motion.div
            className="absolute inset-0 bg-white/40"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.6, ease: LINEAR }} // was "linear"
          />
        </motion.div>

        <motion.p
          variants={item}
          className="text-sm sm:text-base text-zinc-300/90 leading-relaxed max-w-prose mx-auto sm:mx-0"
        >
          I’m polishing the last details. The GitHub repositories, live demos,
          and website URLs will be available soon. Thanks for your patience!
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5"
      >
        {items.map(({ label, icon: Icon, blurb }) => (
          <motion.div
            key={label}
            variants={item}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="bg-transparent border-[#27272a] rounded-2xl shadow-[0_0_0_1px_rgba(39,39,42,1),0_10px_30px_-10px_rgba(6,182,212,0.25)]">
              <CardHeader className="px-5 pt-5 pb-2">
                <CardTitle className="flex items-center gap-3 text-white text-lg sm:text-xl">
                  <span className="inline-flex items-center justify-center rounded-xl border border-[#27272a] p-2">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </span>
                  {label}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <p className="text-sm text-zinc-400">{blurb}</p>

                {/* animated placeholder line */}
                <div className="mt-4 h-9 w-full rounded-lg border border-[#27272a] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800" />
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                      ease: LINEAR,
                    }} // was "linear"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[11px] uppercase tracking-wide text-zinc-400">
                      Link available soon
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Actions */}
      <div className="mt-8 sm:mt-10 flex flex-wrap gap-3">
        <Button
          variant="outline"
          className="bg-cyan-700 hover:bg-cyan-600 text-white"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Project
        </Button>
      </div>
    </div>
  );
}
