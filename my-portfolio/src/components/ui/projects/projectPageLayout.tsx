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
    <div className="container mx-auto px-4 py-8">
      {/* Project Header */}
      <Card className="mb-8 bg-transparent border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-white">
            {title}
          </CardTitle>
        </CardHeader>
      </Card>

      <ProjDescription text={description} />

      {/* Key Features Section */}
      <section className="mb-12">
        <KeyFeatures items={features} />
      </section>

      {/* Project Buttons */}
      <div className="mb-12 flex justify-center gap-4">
        <ProjBtns
          githubUrl={githubUrl}
          liveDemoUrl={liveDemoUrl}
          websiteUrl={websiteUrl}
        />
      </div>

      {/* Carousel Section */}
      {slides.length > 0 && (
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
                          alt={`Project Preview ${index + 1}`}
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
      )}
    </div>
  );
};
