import React from "react";
import { Card, CardDescription } from "@/components/ui/card";
import { PageTitle } from "@/components/ui/page-title";
import { motion } from "framer-motion";
import Footer from "@/components/ui/footer";
import { Github, Download, MapPin, Briefcase } from "lucide-react";

const iconClass =
  "text-white w-[90px] h-[70px] sm:w-[110px] sm:h-[85px] md:w-[130px] md:h-[105px] lg:w-[150px] lg:h-[125px]";

const contactLinks = [
  {
    key: "email",
    href: "mailto:av7304@rit.edu",
    display: "av7304@rit.edu",
    ariaLabel: "Email",
    external: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={iconClass}
        fill="none"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    href: "https://linkedin.com/in/AazeemVS",
    display: "linkedin.com/in/aazeemvs",
    ariaLabel: "LinkedIn",
    external: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={iconClass}
        fill="none"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    key: "github",
    href: "https://github.com/AazeemVS",
    display: "github.com/AazeemVS",
    ariaLabel: "GitHub",
    external: true,
    icon: <Github className={iconClass} strokeWidth={1.5} />,
  },
  {
    key: "resume",
    // TODO: replace with the actual resume file/link once one is published.
    href: "#",
    display: "Download Resume",
    ariaLabel: "Resume",
    external: false,
    icon: <Download className={iconClass} strokeWidth={1.5} />,
  },
];

const ContactMe: React.FC = () => (
  <>
    <Card>
      <PageTitle className="p-2 pl-4 md:pl-6 pb-2">Contact Me</PageTitle>
      <CardDescription className="text-gray-300 px-4 md:px-6 text-base md:text-xl font-semibold">
        Have a project in mind or just want to say hi? Here's how to reach me.
      </CardDescription>

      <div className="flex flex-wrap justify-center items-start gap-6 pb-6 px-4">
        {contactLinks.map(({ key, href, display, ariaLabel, external, icon }) => (
          <div key={key} className="flex flex-col items-center space-y-2">
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={ariaLabel}
              className="card p-3 sm:p-4 md:p-5 lg:p-6 border-2 border-solid border-border hover:bg-[#27272a] rounded-lg
        transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500
        active:translate-y-0 active:scale-95 active:bg-[#27272a]"
            >
              {icon}
            </a>
            <motion.a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="relative inline-block text-cyan-600 text-center text-sm sm:text-base md:text-lg rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 active:text-cyan-800"
              whileHover="hover"
              initial="rest"
            >
              <span className="relative z-10">{display}</span>
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-cyan-600"
                variants={{ rest: { width: 0 }, hover: { width: "100%" } }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.a>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-10 pb-8 px-4 text-gray-300 text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-cyan-600 shrink-0" />
          <span>Falls Church, VA &amp; Boston, MA</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-cyan-600 shrink-0" />
          <span>Open to internship &amp; entry-level software engineering roles</span>
        </div>
      </div>
    </Card>

    <footer>
      <Footer></Footer>
    </footer>
  </>
);

export default ContactMe;
