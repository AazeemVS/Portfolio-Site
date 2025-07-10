import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KeyFeaturesProps {
  items: { icon: React.ReactNode; label: string }[];
}

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ items }) => {
  return (
    <Card>
      <CardHeader className="text-white text-2xl">Key Features</CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-4 mb-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center h-12 px-2 bg-zinc-800 border-2 border-[#27272a] rounded-sm"
            >
              {item.icon}
              <span className="ml-2 text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
export default KeyFeatures;
