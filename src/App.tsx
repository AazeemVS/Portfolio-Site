import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ui/scrollToTop";
import LinksComingSoon from "@/pages/LinksComingSoon";
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
import NavBar from "@/components/ui/navbar";
export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop behavior="smooth" />
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
          <Route path="/LinksComingSoon" element={<LinksComingSoon />} />
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
