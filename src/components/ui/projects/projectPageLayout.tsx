import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageTitle } from "@/components/ui/page-title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/projects/carousel";
import ProjDescription from "@/components/ui/projects/projDescription";
import KeyFeatures from "@/components/ui/projects/keyFeatures";
import { ProjBtns } from "@/components/ui/projects/projBtns";
import { cn } from "@/lib/utils";

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
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());

    const onSelect = () => setCurrentSlide(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      {/* Project Header */}
      <Card className="mb-5 sm:mb-8 lg:mb-10 bg-transparent border-none shadow-none px-4 sm:px-0">
        <CardHeader className="px-0">
          <PageTitle
            className="
        leading-tight tracking-tight
        text-center sm:text-left
        break-words
        max-w-prose sm:max-w-none
        mx-auto sm:mx-0
      "
          >
            {title}
          </PageTitle>
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
      {slides.length > 0 && (
        <section className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-6 text-center">
            Application Screenshots
          </h2>

          {/* Slide counter */}
          <p className="text-center text-xs sm:text-sm text-gray-400 mb-3">
            {currentSlide + 1} / {slides.length}
          </p>

          <div className="flex justify-center px-2 sm:px-0">
            <Carousel
              setApi={setApi}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-5xl"
            >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 sm:p-2">
                      <div className="flex items-center justify-center h-[200px] xs:h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <img
                          src={slide.img}
                          alt={`Project Preview ${index + 1}`}
                          className="h-full w-auto max-w-full object-contain rounded-md border border-border shadow-lg"
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

              <CarouselPrevious className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 -left-4 sm:-left-8 md:-left-12" />
              <CarouselNext className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 -right-4 sm:-right-8 md:-right-12" />
            </Carousel>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  index === currentSlide
                    ? "bg-white"
                    : "bg-gray-500 hover:bg-gray-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
