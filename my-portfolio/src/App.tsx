import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import AboutMe from "@/pages/AboutMe";
import NoPage from "@/pages/NoPage";
import DevBlogs from "@/pages/DevBlogs";
import Projects from "@/pages/Projects";
import ContactMe from "@/pages/ContactMe";
import EduBridgeInfoPage from "./pages/EduBridgeInfoPage";
import ImpetusInfoPage from "./pages/ImpetusInfoPage";
import WorkoutTrackerInfoPage from "./pages/WorkoutTrackerInfoPage";
import CatchFrenzyInfoPage from "./pages/CatchFrenzyInfoPage";
import UnexpectedEscapesInfoPage from "./pages/UnexpectedEscapesInfoPage";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const underlineVariants = {
    rest: { width: 0 },
    hover: { width: "100%" },
    active: { width: "100%" },
  };
  const underlineTransition = { duration: 0.3, ease: "easeOut" };

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-full mt-5">
      <div className="max-w-4xl mx-auto px-4">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="grid grid-cols-3 gap-64 place-items-center">
            {/* 1) Left */}
            <div className="grid place-items-center pr-96">
              <NavigationMenuItem>
                <NavigationMenuLink onClick={() => navigate("/LandingPage")}>
                  <motion.span
                    className={`relative inline-block text-xl font-bold whitespace-nowrap ${
                      isActive("/LandingPage") ? "text-cyan-700" : ""
                    }`}
                    initial="rest"
                    whileHover="hover"
                  >
                    <span className="relative z-10">Aazeem Vaidya Shaikh</span>

                    {isActive("/LandingPage") ? (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                        variants={underlineVariants}
                        initial="active" // Start with full width
                        animate="active" // Keep full width
                      />
                    ) : (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                        variants={underlineVariants}
                        transition={underlineTransition}
                      />
                    )}
                  </motion.span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>

            {/* 2) Center */}
            <div className="grid place-items-center px-4">
              <NavigationMenuItem>
                <div className="flex space-x-6 px-6 py-2 border-2 border-[#27272a] rounded-full">
                  {[
                    ["About Me", "/AboutMe"],
                    ["Projects", "/Projects"],
                    ["Thoughts", "/DevBlogs"],
                  ].map(([label, path]) => (
                    <NavigationMenuLink
                      key={label}
                      onClick={() => navigate(path)}
                    >
                      <motion.span
                        className={`relative inline-block text-xl font-bold whitespace-nowrap ${
                          isActive(path) ? "text-cyan-700" : ""
                        }`}
                        initial="rest"
                        whileHover="hover"
                      >
                        <span className="relative z-10">{label}</span>
                        {isActive(path) ? (
                          <motion.span
                            className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                            variants={underlineVariants}
                            initial="active" // Start with full width
                            animate="active" // Keep full width
                          />
                        ) : (
                          <motion.span
                            className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                            variants={underlineVariants}
                            transition={underlineTransition}
                          />
                        )}
                      </motion.span>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuItem>
            </div>

            {/* 3) Right */}
            <div className="grid place-items-center pl-112">
              <NavigationMenuItem>
                <NavigationMenuLink onClick={() => navigate("/ContactMe")}>
                  <motion.span
                    className={`relative inline-block text-xl font-bold whitespace-nowrap ${
                      isActive("/ContactMe") ? "text-cyan-700" : ""
                    }`}
                    initial="rest"
                    whileHover="hover"
                  >
                    <span className="relative z-10">Contact Me</span>
                    {isActive("/ContactMe") ? (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                        variants={underlineVariants}
                        initial="active" // Start with full width
                        animate="active" // Keep full width
                      />
                    ) : (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-cyan-700"
                        variants={underlineVariants}
                        transition={underlineTransition}
                      />
                    )}
                  </motion.span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>

          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<LandingPage />}></Route>
          <Route path="/LandingPage" element={<LandingPage />}></Route>
          <Route path="/AboutMe" element={<AboutMe />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/DevBlogs" element={<DevBlogs />}></Route>
          <Route path="/ContactMe" element={<ContactMe />}></Route>
          <Route
            path="/EduBridgeInfoPage"
            element={<EduBridgeInfoPage />}
          ></Route>
          <Route path="/ImpetusInfoPage" element={<ImpetusInfoPage />}></Route>
          <Route
            path="/WorkoutTrackerInfoPage"
            element={<WorkoutTrackerInfoPage />}
          ></Route>
          <Route
            path="/CatchFrenzyInfoPage"
            element={<CatchFrenzyInfoPage />}
          ></Route>
          <Route
            path="/UnexpectedEscapesInfoPage"
            element={<UnexpectedEscapesInfoPage />}
          ></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
