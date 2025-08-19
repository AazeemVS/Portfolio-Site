import React from "react";
import { ProjectPageLayout } from "@/components/ui/projects/projectPageLayout";
import Footer from "@/components/ui/footer";
import WorkoutAppImg from "/images/WorkoutAppHomePage.png";
import WorkoutAppWorkoutDashboardImg from "/images/WorkoutAppWorkoutDashboard.png";
import WorkoutAppWorkoutLogImg from "/images/WorkoutAppWorkoutLog.png";
import WorkoutAppPushupLogImg from "/images/WorkoutAppPushupLog.png";
import WorkoutAppPushupDashboardImg from "/images/WorkoutAppPushupDashboard.png";
import {
  BarChartIcon,
  DashboardIcon,
  GearIcon,
  MixerVerticalIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

const WorkoutTrackerInfoPage: React.FC = () => {
  const projectData = {
    title: "MoveSync: Workout Tracker Application",
    description:
      "MoveSync is a single-page web application built with HTML, CSS, and JavaScript. All workout and push-up data is stored locally in the browser (Local Storage), so users can log, track and visualize their fitness progress. The dashboard shows your most recent sessions plus year-to-date totals, while dedicated forms let you separately enter general workouts and push-up sets. For deeper insights, the Push-Up Analytics view renders interactive bar, line, doughnut and monthly comparison charts using Chart.js, and the Workout Info page lets you filter by workout type",
    githubUrl: "/LinksComingSoon",
    liveDemoUrl: "/LinksComingSoon",
    websiteUrl: "/LinksComingSoon",

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
        img: WorkoutAppImg,
        caption: "Home page with clean interface showing workout options...",
      },
      {
        img: WorkoutAppWorkoutDashboardImg,
        caption:
          "Dashboard displaying workout statistics and progress visualization with interactive charts.",
      },
      {
        img: WorkoutAppWorkoutLogImg,
        caption:
          "Detailed workout logging interface with exercise selection and data entry fields.",
      },
      {
        img: WorkoutAppPushupDashboardImg,
        caption:
          "Specialized push-up tracking dashboard showing performance metrics over time.",
      },
      {
        img: WorkoutAppPushupLogImg,
        caption:
          "Push-up analytics with different chart types for comprehensive performance analysis.",
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

export default WorkoutTrackerInfoPage;
