import React from "react";

import Footer from "@/components/ui/footer";

//Images
const homePageImg = "/images/CF-home.png";
const Level1Img = "/images/CF-lvl1.png";
const Level2Img = "/images/CF_Lvl2.png";
const Level3Img = "/images/CF_Lvl3.png";
import { ProjectPageLayout } from "@/components/ui/projects/projectPageLayout";
import {
  KeyboardIcon,
  ClockIcon,
  LayersIcon,
  ImageIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";

const CatchFrenzyInfoPage: React.FC = () => {
  const projectData = {
    title: "Catch Frenzy: An Intense 2D Browser Game.",
    description:
      "Catch Frenzy is a browser-based arcade game built with HTML, CSS, vanilla JavaScript, and PIXI.js for rendering. Players control a basket man (the “character”) to catch falling fruits while avoiding bombs. The game features three escalating levels—each with faster spawn rates, shorter time limits, and higher bomb-spawn chances—plus HP and score tracking, a survival mode, and smooth keyboard controls (Arrow keys or A/D). Assets are loaded via PIXI’s asset bundle system, using ES6 classes. The UI (start screen, controls page, game scene, and game-over screen) is managed with PIXI containers and text styles. A looping cloud background and floating fruit decor animate behind the canvas for extra polish.",
    githubUrl: "/LinksComingSoon",
    liveDemoUrl: "/LinksComingSoon",
    websiteUrl: "/LinksComingSoon",
    features: [
      {
        icon: <KeyboardIcon width={24} height={24} />,
        label:
          "Smooth keyboard controls: Arrow Left/Right or A/D to move the basket",
      },
      {
        icon: <ClockIcon width={24} height={24} />,
        label:
          "Timed gameplay with a countdown timer and HP gauge, ending in a Game Over screen",
      },
      {
        icon: <LayersIcon width={24} height={24} />,
        label:
          "Three distinct levels with increasing fruit-spawn speed, bomb-spawn chance, and survival mode",
      },
      {
        icon: <ImageIcon width={24} height={24} />,
        label:
          "Animated background layers: floating fruit décor and looping clouds behind the canvas",
      },
      {
        icon: <SpeakerLoudIcon width={24} height={24} />,
        label: "Audio integration for background music",
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
