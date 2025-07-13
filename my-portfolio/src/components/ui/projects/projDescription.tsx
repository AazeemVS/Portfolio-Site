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
    <Card className={`bg-transparent border-border ${className}`}>
      <CardHeader className="px-6 pt-6 pb-2">
        <h2 className="text-2xl font-semibold text-white">About The Project</h2>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <CardDescription className="text-md text-muted-foreground">
          {text}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjDescription;
