import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/projects/carousel";
import Footer from "@/components/ui/footer";
import WorkoutAppImg from "@/../images/WorkoutAppHomePage.png";
import WorkoutAppWorkoutDashboardImg from "@/../images/WorkoutAppWorkoutDashboard.png";
import WorkoutAppWorkoutLogImg from "@/../images/WorkoutAppWorkoutLog.png";
import WorkoutAppPushupLogImg from "@/../images/WorkoutAppPushupLog.png";
import WorkoutAppPushupDashboardImg from "@/../images/WorkoutAppPushupDashboard.png";
import ProjDescription from "@/components/ui/projects/projDescription";
import KeyFeatures from "@/components/ui/projects/keyFeatures";
import { ProjBtns } from "@/components/ui/projects/projBtns";
import {
  BarChartIcon,
  DashboardIcon,
  GearIcon,
  MixerVerticalIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const slides = [
  {
    img: WorkoutAppImg,
    caption:
      "Home page with clean interface showing workout options and quick access to different sections of the app.",
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
];

const features = [
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
];

const WorkoutTrackerInfoPage: React.FC = () => (
  <div className="container mx-auto px-4 py-8 ">
    {/* Project Header */}
    <Card className="mb-8 bg-transparent border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-white">
          MoveSync: Workout Tracker Application
        </CardTitle>
      </CardHeader>
    </Card>
    <ProjDescription text="MoveSync is a single-page web application built with HTML, CSS, and vanilla JavaScript. All workout and push-up data is stored locally in the browser (Local Storage), so users can log, track and visualize their fitness progress. The dashboard shows your most recent sessions plus year-to-date totals, while dedicated forms let you separately enter general workouts and push-up sets. For deeper insights, the Push-Up Analytics view renders interactive bar, line, doughnut and monthly comparison charts using Chart.js, and the Workout Info page lets you filter by workout type." />

    {/* Key Features Section */}
    <section className="mb-12">
      <KeyFeatures items={features} />
    </section>

    {/* Project Buttons */}
    <div className="mb-12 flex justify-center gap-4">
      <ProjBtns
        githubUrl="https://github.com/AazeemVS/Workout-Push-up-Project"
        liveDemoUrl="https://yourdemo.com"
      />
    </div>

    {/* Carousel Section */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Application Screenshots
      </h2>
      <div className="flex justify-center">
        <Carousel className="w-full max-w-5xl">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <div className="flex items-center justify-center h-[500px]">
                    <img
                      src={slide.img}
                      alt={`Workout App Preview ${index + 1}`}
                      className="h-full w-auto object-contain rounded-md border border-[#27272a] shadow-lg"
                    />
                  </div>
                  <Card className="mt-4 w-8/10 bg-transparent border-none">
                    <CardContent className="p-4 text-center">
                      <p className="text-gray-300">{slide.caption}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-12 w-12 -left-16" />
          <CarouselNext className="h-12 w-12 -right-16" />
        </Carousel>
      </div>
    </section>

    <Footer />
  </div>
);

export default WorkoutTrackerInfoPage;
