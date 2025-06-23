import React from "react";

// FigmaIcon component displays a Figma logo with a label
const FigmaIcon: React.FC = () => (
  // Container aligns icon and text horizontally
  <div className="flex flex-row w-full justify-start items-center gap-4">
    {/* Icon wrapper with fixed size */}
    <div className="w-11 h-11">
      <img src="../../../images/FigmaIcon.png" alt="Figma Logo Image" />
    </div>

    {/* Label next to the icon */}
    <h2 className="text-white">Figma</h2>
  </div>
);

export default FigmaIcon;
