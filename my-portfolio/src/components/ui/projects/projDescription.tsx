import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

interface ProjDescriptionProps {
  text: string;
  className?: string;
}

const ProjDescription: React.FC<ProjDescriptionProps> = ({
  text,
  className = "",
}) => {
  return (
    <Card
      className={[
        // full width but keep a comfy reading width
        "w-full max-w-screen-md md:max-w-3xl mx-auto",
        // subtle styling
        "bg-transparent border-border/80 rounded-xl",
        className,
      ].join(" ")}
    >
      <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-1 sm:pb-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight tracking-tight">
          About The Project
        </h2>
      </CardHeader>

      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
        <CardDescription className="text-sm sm:text-md md:text-2xl text-muted-foreground leading-relaxed break-words hyphens-auto">
          {text}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjDescription;
