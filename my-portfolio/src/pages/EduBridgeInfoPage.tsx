import React from "react";
import Footer from "@/components/ui/footer";
import SBESCISearchPage from "@/../images/SBESCI_site_pic.png";
import SBESCILoginPage from "@/../images/SBESCILoginPage.png";
import SBESCILandingPage from "@/../images/SBESCILandingPage.png";
import SBESCIAdminLandingPage from "@/../images/SBESCIAdminLandingPage.png";
import SBESCICartPage from "@/../images/SBESCICartPage.png";
import SBESCICupboardPage from "@/../images/SBESCIAdminCupboardPage.png";
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

const EduBridgeInfoPage: React.FC = () => {
  const projectData = {
    title: "EduBridge: Non-Profit Donation Platform",
    description: "Add EduBridge Project description...",
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
      {
        img: SBESCILoginPage,
        caption:
          "A simple, right-aligned login form which allows helpers, teachers, and admins enter their username and password to access the platform or create a new account.",
      },
      {
        img: SBESCILandingPage,
        caption:
          "Welcomes the logged-in user by name, displays their current account balance, and briefly explains the site’s mission to connect donors with teachers in need, followed by team credits.",
      },
      {
        img: SBESCISearchPage,
        caption:
          "Displays a list of teacher-requested items with descriptions, a sorting system by item type, and an Add to Cart button,allowing users to quickly filter and select supplies they wish to donate.",
      },
      {
        img: SBESCICartPage,
        caption:
          "Shows the user’s cart with their selected items with quantity controls, a Remove from cart button, and a checkout option.",
      },
      {
        img: SBESCIAdminLandingPage,
        caption:
          "Greets the admin account with a welcome message and balance, outlines the site’s purpose for supporting teachers, and lists credits for the development team.",
      },
      {
        img: SBESCICupboardPage,
        caption:
          "Provides an administrative view of all listed needs in a grid of cards, each showing item details, price, and allowing administrators to manage need items: use the Add Need button to create new entries, and the Edit and Delete buttons on each card to update or remove existing needs.",
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

export default EduBridgeInfoPage;
