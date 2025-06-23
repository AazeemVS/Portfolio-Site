import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import AboutMe from "@/pages/AboutMe";
import NoPage from "@/pages/NoPage";
import MySites from "@/pages/MySites";
import Projects from "@/pages/Projects";
import ContactMe from "@/pages/ContactMe";
import SBECIInfoPage from "./pages/SBECIInfoPage";
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

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-5">
      <div className="max-w-4xl mx-auto px-4">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex items-center space-x-56">
            {/* 1) Left: fixed-width container */}
            <div className="flex-none w-64 flex justify-start ">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-xl font-bold hover:-translate-y-0.5 transition-transform whitespace-nowrap"
                  onClick={() => navigate("/LandingPage")}
                >
                  Aazeem Vaidya Shaikh
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>

            {/* 2) Center: grow to fill */}
            <div className="flex-1 flex justify-center">
              <NavigationMenuItem>
                <div className="flex space-x-6 px-6 py-2 border-2 border-[#27272a] rounded-full">
                  {[
                    ["About Me", "/AboutMe"],
                    ["My Sites", "/MySites"],
                    ["Projects", "/Projects"],
                    ["Dev Blog", "/DevBlog"],
                  ].map(([label, path]) => (
                    <NavigationMenuLink
                      key={label}
                      className="text-xl font-bold hover:-translate-y-0.5 transition-transform whitespace-nowrap"
                      onClick={() => navigate(path)}
                    >
                      {label}
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuItem>
            </div>

            {/* 3) Right: same fixed width as left */}
            <div className="flex-none w-64 flex justify-end">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-xl font-bold hover:-translate-y-0.5 transition-transform whitespace-nowrap"
                  onClick={() => navigate("/ContactMe")}
                >
                  Contact Me
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
          <Route path="/MySites" element={<MySites />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/ContactMe" element={<ContactMe />}></Route>
          <Route path="/SBECIInfoPage" element={<SBECIInfoPage />}></Route>
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
