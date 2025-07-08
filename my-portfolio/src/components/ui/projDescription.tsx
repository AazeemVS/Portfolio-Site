import { Card, CardDescription, CardHeader } from "@/components/ui/card";

interface ProjDescriptionProps {
  text: string;
}
const ProjDescription: React.FC<ProjDescriptionProps> = ({ text }) => {
  return (
    <Card className="">
      <CardHeader className="text-white text-2xl ">
        {" "}
        About The Project:
      </CardHeader>
      <CardDescription className="text-white text-md px-6">
        {text}
      </CardDescription>
    </Card>
  );
};
export default ProjDescription;
