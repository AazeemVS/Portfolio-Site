import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from '@/components/ui/footer';

//Images
import homePageImg from "@/../images/Catch_Frenzy_Home_Img.png"
import Level1Img from "@/../images/Catch_Frenzy_level1.png"
import Level2Img from "@/../images/CF_Lvl2.png"
import Level3Img from "@/../images/CF_Lvl3.png"



{/* add images and descriptive text here*/}
const slides = [
  { img: homePageImg, caption: " Home/game start page"},
  {
        img: Level1Img, caption: "Level 1"
  },
  {
        img: Level2Img, caption: "Level 2"
  },
  {
        img: Level3Img, caption: "Level 3"
  },
  {
        img: Level3Img, caption: "Game Over Page"
  }
  
];

const CatchFrenzyInfoPage: React.FC = () => (
    <>
   <Card className="mb-[5%]">
      <CardTitle className="text-white">Catch Frenzy: Simple 2D Browser Game</CardTitle>
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

    <Footer />
    </>
);

export default CatchFrenzyInfoPage