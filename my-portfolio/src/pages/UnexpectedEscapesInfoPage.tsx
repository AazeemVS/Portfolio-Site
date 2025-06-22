import React from 'react';
import Footer from '@/components/ui/footer';
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
{/* add imports for images here*/}
import homePage from "@/../images/Unexpected_Escapes_homeImg.png";
import imgDetails from "@/../images/image_Details.png";
import imgSelection from "@/../images/image_Selection.png";
import loadingFavImage from "@/../images/loading_Favorite_Image.png";

{/* add images and descriptive text here*/}
const slides = [
  { img: homePage, caption: "This page allows users to generate and view random images by specifying custom height and width dimensions, then saving, loading, or clearing their favorite images. Users can also view details about the current image if they desire."},
  { img: imgSelection, caption: "The user hovers over the 'Get Random Image' button and is met with a fluid drop down menu which allows the user to choose betwen a static, blurred, grayscale, or list of images. " },
  { img: imgDetails, caption: "Displays a list of details about the current image, like artist name, the dimensions of the picture, and a link to the picture."},
  { img: loadingFavImage, caption: "This feature allows users to save their favorite images to view them across multiple sessions. Users can save a plethora of images by pressing the 'Save Favorite Image' button. Users can also clear their favorite images by pressing the 'Clear Favorite Image' button, and can load images using the 'Load Favorite Images' button." },
];

const UnexpectedEscapesInfoPage: React.FC = () => (
    <>
   <Card className="mb-[5%]">
      <CardTitle className="text-white">Unexpected Escapes: Random Image Generator</CardTitle>
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
                <p className="text-gray-300 text-md">
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

export default UnexpectedEscapesInfoPage