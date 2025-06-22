import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from 'framer-motion';
import Footer from '@/components/ui/footer';

const ContactMe: React.FC = () => (
  <>
    <Card className="bg-[#09090b] border-[#27272a]"> {/* Added dark background and border */}
      <h2 className="text-white text-5xl font-bold p-2 pl-6 pb-2">Contact Me</h2>
      <CardDescription className="text-gray-300 px-6 text-xl font-semibold"> {/* Light gray description */}
        You can contact me via Email or LinkedIn.
      </CardDescription>

        {/* Email Section*/}
    <div className="flex justify-center gap-8 pb-6">
     <div className="flex flex-col items-center space-y-2">
            <a 
          href="mailto:av7304@rit.edu" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="card p-6 border-2 border-solid border-[#27272a] hover:bg-[#27272a] rounded-lg 
          transition-all duration-200 ease-in-out 
          transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
        >
              <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="125"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
        </a>
    <motion.a
      href="mailto:av7304@rit.edu"
      className="relative inline-block text-cyan-600 text-center"
      whileHover="hover"
      initial="rest"
    >
      <span className="relative z-10">av7304@rit.edu</span>
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-white"
        variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.a>
  </div>

  {/* LinkedIn Section */}
  <div className="flex flex-col items-center space-y-2">
        <a 
          href="https://linkedin.com/in/AazeemVS" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="card p-6 border-2 border-solid border-[#27272a] hover:bg-[#27272a] rounded-lg 
          transition-all duration-200 ease-in-out 
          transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
              width={150}
              height={125}
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
    <motion.a
      href="https://www.linkedin.com/in/aazeemvs"
      className="relative inline-block text-gray-300 text-center"
      whileHover="hover"
      initial="rest"
    >
      <span className="relative z-10">
          linkedin.com/in/aazeemvs
      </span>
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-white"
        variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.a>
  </div>
</div>
    </Card>
    
    <footer>
      <Footer></Footer>
  </footer>
  </>
);

export default ContactMe;