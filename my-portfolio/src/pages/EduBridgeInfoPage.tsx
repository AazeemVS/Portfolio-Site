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
  PersonIcon,
  BackpackIcon,
  HomeIcon,
  ReaderIcon,
  MagnifyingGlassIcon,
  ArchiveIcon,
} from "@radix-ui/react-icons";

{
  /* add images and descriptive text here*/
}

const EduBridgeInfoPage: React.FC = () => {
  const projectData = {
    title: "EduBridge: Non-Profit Donation Platform",
    description:
      "EduBridge is a single-page web application built with Angular, HTML, CSS, Java, and TypeScript that connects donors with teachers in need of classroom supplies. It uses OAuth for role-based authentication (helpers, teachers, admins) and lets teachers submit item requests that helpers can fulfill in full or in part. All data is stored in JSON files and served via a backend API, with unit tests running in a Docker-based CI/CD pipeline to ensure quality. The responsive design adapts seamlessly across devices, and the team followed Agile Scrum, running 2–4 week sprints with planning poker, daily stand-ups, sprint planning, and retrospectives.",
    githubUrl: "https://github.com/your/project1",
    liveDemoUrl: "https://yourdemo.com", // Add live demo later
    websiteUrl: "https://official-website.com",

    features: [
      {
        icon: <HomeIcon width={23} height={23} />,
        label: "Log in/Log out functionality for helpers, teachers, and admins",
      },
      {
        icon: <MagnifyingGlassIcon width={24} height={24} />,
        label:
          "Search for products by entering either their name or their type",
      },
      {
        icon: <BackpackIcon width={23} height={23} />,
        label:
          "Can checkout items in cart, view total cost, and remove items from cart",
      },
      {
        icon: <ArchiveIcon width={24} height={24} />,
        label:
          "Teacher can request items specific items by making  which helpers can fill",
      },
      {
        icon: <PersonIcon width={24} height={24} />,
        label:
          "Includes an admin account who can manage all items and view all requests",
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
