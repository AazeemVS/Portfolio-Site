import React from "react";
import Footer from "@/components/ui/footer";
{
  /* add imports for images here*/
}
import homePage from "@/../public/images/Unexpected_Escapes_homeImg.png";
import imgDetails from "@/../public/images/image_Details.png";
import imgSelection from "@/../public/images/image_Selection.png";
import loadingFavImage from "@/../public/images/loading_Favorite_Image.png";
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
    title: "Unexpected Escapes: Random Image Generator",
    description:
      "Unexpected Escapes is a responsive single-page web app built with HTML, CSS, and vanilla JavaScript that integrates the Lorem Picsum API to fetch random images at user-specified dimensions and supports multiple endpoints—including static, blurred, grayscale, and “list” modes. Users can customize height and width for each request, browse detailed metadata (artist, actual dimensions, and a direct source link), save personal favorites to local storage, and clear their favorites list at any time; under the hood, it uses the Fetch API with async/await, and the fully responsive interface adapts seamlessly across mobile and desktop, for a smooth discovery experience.",
    githubUrl: "/LinksComingSoon",
    liveDemoUrl: "/LinksComingSoon",
    websiteUrl: "/LinksComingSoon",

    features: [
      {
        icon: <GearIcon width={24} height={24} />,
        label:
          "Leverages an external random picture API to fetch images, and metadata",
      },
      {
        icon: <BarChartIcon width={24} height={24} />,
        label: "Can save, load, and clear favorite images using Local Storage",
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
