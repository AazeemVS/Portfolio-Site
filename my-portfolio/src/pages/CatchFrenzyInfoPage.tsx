import React from "react";

import Footer from "@/components/ui/footer";

//Images
import homePageImg from "@/../images/CF-home.png";
import Level1Img from "@/../images/CF-lvl1.png";
import Level2Img from "@/../images/CF_Lvl2.png";
import Level3Img from "@/../images/CF_Lvl3.png";
import { ProjectPageLayout } from "@/components/ui/projects/projectPageLayout";
import {
  KeyboardIcon,
  ClockIcon,
  LayersIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";

const CatchFrenzyInfoPage: React.FC = () => {
  const projectData = {
    title: "Catch Frenzy: An Intense 2D Browser Game.",
    description:
      "Catch Frenzy is a browser-based arcade game built with HTML, CSS, vanilla JavaScript, and PIXI.js for rendering. Players control a basket man (the “character”) to catch falling fruits while avoiding bombs. The game features three escalating levels—each with faster spawn rates, shorter time limits, and higher bomb-spawn chances—plus HP and score tracking, a survival mode, and smooth keyboard controls (Arrow keys or A/D). Assets are loaded via PIXI’s asset bundle system, using ES6 classes. The UI (start screen, controls page, game scene, and game-over screen) is managed with PIXI containers and text styles. A looping cloud background and floating fruit decor animate behind the canvas for extra polish.",
    githubUrl: "https://github.com/your/project1",
    liveDemoUrl: "https://yourdemo.com", // Add live demo later
    websiteUrl: "https://official-website.com",

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
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        ),
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
