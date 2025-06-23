import React from "react";

// CSharpIcon component displays a C# logo with a label
const CsharpIcon: React.FC = () => (
  // Container aligns icon and text horizontally
  <div className="flex flex-row w-full justify-start items-center gap-4">
    {/* Icon wrapper with fixed size */}
    <div className="w-9.5 h-9.5">
      <img src="../../../images/CSharpIcon.png" alt="C# Logo Image" />
    </div>

    {/* Label next to the icon */}
    <h2 className="text-white">C#</h2>
  </div>
);

export default CsharpIcon;
