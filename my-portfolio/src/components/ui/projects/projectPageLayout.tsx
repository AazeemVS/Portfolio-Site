import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/projects/carousel";
import ProjDescription from "@/components/ui/projects/projDescription";
import KeyFeatures from "@/components/ui/projects/keyFeatures";
import { ProjBtns } from "@/components/ui/projects/projBtns";

interface ProjectPageLayoutProps {
  title: string;
  description: string;
  features: {
    icon: React.ReactNode;
    label: string;
  }[];
  slides: {
    img: string;
    caption: string;
  }[];

  // Optional because not all projects have these
  githubUrl?: string;
  liveDemoUrl?: string;
  websiteUrl?: string;
}

export const ProjectPageLayout: React.FC<ProjectPageLayoutProps> = ({
  title,
  description,
  features,
  slides,
  githubUrl,
  liveDemoUrl,
  websiteUrl,
}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      {/* Project Header */}
      <Card className="mb-6 sm:mb-8 lg:mb-10 bg-transparent border-none shadow-none">
        <CardHeader className="px-0">
          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            {title}
          </CardTitle>
        </CardHeader>
      </Card>

      <ProjDescription text={description} />

      {/* Key Features Section */}
      <section className="mb-8 sm:mb-10 lg:mb-12">
        <KeyFeatures items={features} />
      </section>

      {/* Project Buttons */}
      <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-wrap justify-center gap-3 sm:gap-4">
        <ProjBtns
          githubUrl={githubUrl}
          liveDemoUrl={liveDemoUrl}
          websiteUrl={websiteUrl}
        />
      </div>

      {/* Carousel Section */}
      {slides.length > 0 && (
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
            Application Screenshots
          </h2>
          <div className="flex justify-center px-2 sm:px-0">
            <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-5xl">
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 sm:p-2">
                      <div className="flex items-center justify-center h-[200px] xs:h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <img
                          src={slide.img}
                          alt={`Project Preview ${index + 1}`}
                          className="h-full w-auto max-w-full object-contain rounded-md border border-[#27272a] shadow-lg"
                        />
                      </div>
                      <Card className="mt-2 sm:mt-3 lg:mt-4 w-full sm:w-10/12 mx-auto bg-transparent border-none">
                        <CardContent className="p-2 sm:p-3 lg:p-4 text-center">
                          <p className="text-sm sm:text-base text-gray-300">
                            {slide.caption}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 -left-4 sm:-left-8 md:-left-12" />
              <CarouselNext className="hidden sm:flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 -right-4 sm:-right-8 md:-right-12" />
            </Carousel>
          </div>
        </section>
      )}
    </div>
  );
};
