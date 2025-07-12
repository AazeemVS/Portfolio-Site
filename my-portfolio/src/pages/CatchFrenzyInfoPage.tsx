import React from "react";

import Footer from "@/components/ui/footer";

//Images
import homePageImg from "@/../images/CF-home.png";
import Level1Img from "@/../images/CF-lvl1.png";
import Level2Img from "@/../images/CF_Lvl2.png";
import Level3Img from "@/../images/CF_Lvl3.png";
import { ProjectPageLayout } from "@/components/ui/projects/projectPageLayout";
import {
  BarChartIcon,
  DashboardIcon,
  GearIcon,
  MixerVerticalIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
{
  /* add images and descriptive text here*/
}

const CatchFrenzyInfoPage: React.FC = () => {
  const projectData = {
    title: "Catch Frenzy: An Intense 2D Browser Game",
    description: "Add Catch Frenzy Project description...",
    githubUrl: "https://github.com/your/project1",
    liveDemoUrl: "https://yourdemo.com", // Add live demo later
    websiteUrl: "https://official-website.com",

    features: [
      {
        icon: <GearIcon width={24} height={24} />,
        label:
          "Leverages an external Exercise API to auto-populate exercise metadata for data logging",
      },
      {
        icon: <BarChartIcon width={24} height={24} />,
        label: "Displays interactive charts powered by Chart.js",
      },
      {
        icon: <ReaderIcon width={24} height={24} />,
        label:
          "Offers clean, separate forms for push-up tracking and all other workouts",
      },
      {
        icon: <DashboardIcon width={24} height={24} />,
        label:
          "Features a live dashboard showing recent sessions alongside year-to-date totals",
      },
      {
        icon: <MixerVerticalIcon width={24} height={24} />,
        label:
          "Includes advanced filters to drill down by exercise category or date range",
      },
    ],
    slides: [
      { img: homePageImg, caption: " Home/game start page" },
      {
        img: Level1Img,
        caption: "Level 1",
      },
      {
        img: Level2Img,
        caption: "Level 2",
      },
      {
        img: Level3Img,
        caption: "Level 3",
      },
      {
        img: Level3Img,
        caption: "Game Over Page",
      },
    ],
  };

  return (
    <>
      <ProjectPageLayout {...projectData} />
      <Footer />
    </>
  );
};

export default CatchFrenzyInfoPage;
