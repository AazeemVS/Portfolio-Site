import React from "react";
import Footer from "@/components/ui/footer";
{
  /* add imports for images here*/
}
import homePage from "@/../images/Unexpected_Escapes_homeImg.png";
import imgDetails from "@/../images/image_Details.png";
import imgSelection from "@/../images/image_Selection.png";
import loadingFavImage from "@/../images/loading_Favorite_Image.png";
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

const UnexpectedEscapesInfoPage: React.FC = () => {
  const projectData = {
    title: "Project 1 Name",
    description: "Add Unexpected Escapes Project description...",
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
        img: homePage,
        caption:
          "This page allows users to generate and view random images by specifying custom height and width dimensions, then saving, loading, or clearing their favorite images. Users can also view details about the current image if they desire.",
      },
      {
        img: imgSelection,
        caption:
          "The user hovers over the 'Get Random Image' button and is met with a fluid drop down menu which allows the user to choose betwen a static, blurred, grayscale, or list of images. ",
      },
      {
        img: imgDetails,
        caption:
          "Displays a list of details about the current image, like artist name, the dimensions of the picture, and a link to the picture.",
      },
      {
        img: loadingFavImage,
        caption:
          "This feature allows users to save their favorite images to view them across multiple sessions. Users can save a plethora of images by pressing the 'Save Favorite Image' button. Users can also clear their favorite images by pressing the 'Clear Favorite Image' button, and can load images using the 'Load Favorite Images' button.",
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

export default UnexpectedEscapesInfoPage;
