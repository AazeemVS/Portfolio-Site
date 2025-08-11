import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface KeyFeaturesProps {
  items: { icon: React.ReactNode; label: string }[];
}

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ items }) => {
  return (
    <Card
      className="
        w-full
        max-sm:-mx-2    /* extend card closer to screen edges on phones */
        max-[360px]:-mx-1
      "
    >
      {/* Desktop unchanged; smaller screens step down the title size */}
      <CardHeader className="text-white text-2xl max-sm:text-xl">
        Key Features
      </CardHeader>

      <CardContent>
        {/* Keep 1 column on desktop; just tighten gaps on phones */}
        <div className="grid grid-cols-1 gap-4 max-sm:gap-2.5 mb-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center justify-start w-full
                px-4 py-2 gap-x-2
                bg-zinc-800 border-2 border-[#27272a] rounded-sm
                max-sm:px-3 max-sm:py-2
              "
            >
              {/* Bullet stays on desktop; hide only on very tiny screens */}
              <span className="text-white text-2xl leading-none max-[360px]:hidden">
                •
              </span>

              {/* Icon: constrain size only on phones; desktop untouched */}
              <span
                className="
                  text-white place-items-center
                  max-sm:[&>*]:w-4 max-sm:[&>*]:h-4
                "
              >
                {item.icon}
              </span>

              {/* Label: shrink on smaller screens & ensure it stays inside the box */}
              <span
                className="
                  flex-1 text-white text-base
                  max-sm:text-sm max-[360px]:text-xs
                  leading-snug break-words
                "
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KeyFeatures;
