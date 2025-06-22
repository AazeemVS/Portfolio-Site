import React from 'react';
import { Card,
  CardTitle,
  CardHeader,
  CardDescription
 } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from '@/components/ui/footer';
import SBESCISearchPage from "@/../images/SBESCI_site_pic.png";
import SBESCILoginPage from "@/../images/SBESCILoginPage.png";
import SBESCILandingPage from "@/../images/SBESCILandingPage.png";
import SBESCIAdminLandingPage from "@/../images/SBESCIAdminLandingPage.png";
import SBESCICartPage from "@/../images/SBESCICartPage.png";
import SBESCICupboardPage from "@/../images/SBESCIAdminCupboardPage.png";


const slides = [
  { img: SBESCILoginPage, caption: "A simple, right-aligned login form which allows helpers, teachers, and admins enter their username and password to access the platform or create a new account."},
  { img: SBESCILandingPage, caption: "Welcomes the logged-in user by name, displays their current account balance, and briefly explains the site’s mission to connect donors with teachers in need, followed by team credits." },
  { img: SBESCISearchPage, caption: "Displays a list of teacher-requested items with descriptions, a sorting system by item type, and an Add to Cart button,allowing users to quickly filter and select supplies they wish to donate."},
  { img: SBESCICartPage, caption: "Shows the user’s cart with their selected items with quantity controls, a Remove from cart button, and a checkout option." },
  { img: SBESCIAdminLandingPage, caption: "Greets the admin account with a welcome message and balance, outlines the site’s purpose for supporting teachers, and lists credits for the development team." },
  { img: SBESCICupboardPage, caption: "Provides an administrative view of all listed needs in a grid of cards, each showing item details, price, and allowing administrators to manage need items: use the Add Need button to create new entries, and the Edit and Delete buttons on each card to update or remove existing needs." }
];


const SBECIInfoPage: React.FC = () => (
  <>
        <Card className="mb-[5%]">
          <CardTitle className="text-white">MoveSync: Workout Tracker Application</CardTitle>
        </Card>

        {/* Carousel to show off different images of my websites */}
        <div className="flex justify-center">
          <Carousel className="w-full max-w-5xl"> {/* Increased max-width */}
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
                    <p className="text-gray-300 text-sm">
                      {slides.caption}
                    </p>
                  </Card>
                  </div>
                  
                </div>
              </CarouselItem>

              ))}
            </CarouselContent>
            <CarouselPrevious className="h-12 w-12 -left-16" /> {/* Adjusted position */}
            <CarouselNext className="h-12 w-12 -right-16" />
          </Carousel>
        </div>

        <Card>
          <CardHeader className="text-white text-2xl"> About The Project:</CardHeader>
          <CardDescription className="text-white text-md"> </CardDescription>

        </Card>
        <footer>
           <Footer/>
        </footer>
  </>
);

export default SBECIInfoPage;