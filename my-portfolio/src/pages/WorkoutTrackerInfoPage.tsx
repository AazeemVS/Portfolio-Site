import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/ui/footer";
import SBESCIImg from "@/../images/SBESCI_site_pic.png";
import WorkoutAppImg from "@/../images/WorkoutAppHomePage.png";
import WorkoutAppWorkoutDashboardImg from "@/../images/WorkoutAppWorkoutDashboard.png";
import WorkoutAppWorkoutLogImg from "@/../images/WorkoutAppWorkoutLog.png";
import WorkoutAppPushupLogImg from "@/../images/WorkoutAppPushupLog.png";
import WorkoutAppPushupDashboardImg from "@/../images/WorkoutAppPushupDashboard.png";
import ProjDescription from "@/components/ui/projDescription";
const slides = [
  {
    img: WorkoutAppImg,
    caption:
      "A simple, right-aligned login form which allows helpers, teachers, and admins enter their username and password to access the platform or create a new account.",
  },
  {
    img: WorkoutAppWorkoutDashboardImg,
    caption:
      "Welcomes the logged-in user by name, displays their current account balance, and briefly explains the site’s mission to connect donors with teachers in need, followed by team credits.",
  },
  {
    img: WorkoutAppWorkoutLogImg,
    caption:
      "Displays a list of teacher-requested items with descriptions, a sorting system by item type, and an Add to Cart button,allowing users to quickly filter and select supplies they wish to donate.",
  },
  {
    img: WorkoutAppPushupDashboardImg,
    caption:
      "Shows the user’s cart with their selected items with quantity controls, a Remove from cart button, and a checkout option.",
  },
  {
    img: WorkoutAppPushupLogImg,
    caption:
      "Greets the admin account with a welcome message and balance, outlines the site’s purpose for supporting teachers, and lists credits for the development team.",
  },
];

const WorkoutTrackerInfoPage: React.FC = () => (
  <>
    <Card className="mb-[5%] border-none">
      <CardTitle className="text-white ">
        MoveSync: Workout Tracker Application
      </CardTitle>
    </Card>

    <ProjDescription
      text={
        " MoveSync is a single-page web application built with HTML, CSS, and vanilla JavaScript. All workout and push-up data is stored locally in the browser (Local Storage), so users can log, track and visualize their fitness progress. The dashboard shows your most recent sessions plus year-to-date totals, while dedicated forms let you separately enter general workouts and push-up sets. For deeper insights, the Push-Up Analytics view renders interactive bar, line, doughnut and monthly comparison charts using Chart.js, and the Workout Info page lets youfilter by workout type."
      }
    ></ProjDescription>

    {/* Key Features Section*/}
    <Card>
      <p className="text-white">
        <ul>
          Exercise API Integration: Leverages an external Exercise API to
          auto-populate metadata (e.g., muscle groups, equipment) directly
          within the workout logging form, streamlining data entry and ensuring
          standardized exercise information. <br />
          Dual Logging Interfaces: Clean, separate forms for push-up tracking
          and for all other workouts.
          <br />
          Interactive Charts: Chart.js-powered bar, line, doughnut and monthly
          comparison views of push-up performance. <br />
          Live Dashboard: At-a-glance view of recent workouts and push-up
          sessions alongside year-to-date totals. <br />
          Advanced Filters: Drill down by exercise category or date range to
          load historical workout data.
          <br />
          Responsive, Lightweight UI: Built with semantic HTML and CSS for a
          fast, mobile-friendly experience.
        </ul>
      </p>
    </Card>
    {/* Carousel to show off different images of my websites */}
    <div className="flex justify-center">
      <Carousel className="w-full max-w-5xl">
        {" "}
        {/* Increased max-width */}
        <CarouselContent>
          {slides.map((slides, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="p-2">
                <div className="flex items-center justify-center h-[500px]">
                  <img
                    src={slides.img}
                    alt={`SBECI Site Preview ${index + 1}`}
                    className="h-full w-auto object-contain rounded-sm border border-[#27272a] shadow-lg"
                  />
                </div>
                <div className="ml-16 mr-16 mt-0">
                  <Card className="border-none mt-4 p-0 text-left w-full">
                    <p className="text-gray-300 text-sm">{slides.caption}</p>
                  </Card>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="h-12 w-12 -left-16" />{" "}
        {/* Adjusted position */}
        <CarouselNext className="h-12 w-12 -right-16" />
      </Carousel>
    </div>

    <Footer />
  </>
);

export default WorkoutTrackerInfoPage;
