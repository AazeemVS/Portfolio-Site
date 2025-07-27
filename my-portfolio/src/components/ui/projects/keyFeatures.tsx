import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface KeyFeaturesProps {
  items: { icon: React.ReactNode; label: string }[];
}

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ items }) => {
  return (
    <Card>
      <CardHeader className="text-white text-2xl">Key Features</CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 gap-4 mb-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-start w-full px-4 py-2 bg-zinc-800 border-2 border-[#27272a] rounded-sm gap-x-2"
            >
              <span className="text-white text-2xl place-items-center">
                {" "}
                •{" "}
              </span>
              <span className="text-white">{item.icon}</span>

              <span className="text-white text-base"> {item.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
export default KeyFeatures;
