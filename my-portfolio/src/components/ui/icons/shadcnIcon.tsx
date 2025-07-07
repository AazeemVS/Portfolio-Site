import React from "react";

// ShadcnIcon component displays a Shadcn logo with a label
const ShadcnIcon: React.FC = () => (
  // Container aligns icon and text horizontally
  <div className="flex flex-row w-full justify-start items-center gap-4">
    {/* Icon wrapper with fixed size */}
    <div className="w-10 h-10">
      <img src="../../../images/ShadcnIcon1.png" alt="Shadcn Logo Image" />
    </div>

    {/* Label next to the icon */}
    <h2 className="text-white">Shadcn</h2>
  </div>
);

export default ShadcnIcon;
