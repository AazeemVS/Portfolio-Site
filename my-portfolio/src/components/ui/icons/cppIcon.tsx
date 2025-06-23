import React from "react";

// CPlusPlusIcon component displays a C++ logo with a label
const CPPIcon: React.FC = () => (
  // Container aligns icon and text horizontally
  <div className="flex flex-row w-full justify-start items-center gap-4">
    {/* Icon wrapper with fixed size */}
    <div className="w-8 h-8">
      <img src="../../../images/CPlusPlusIcon.png" alt="C++ Logo Image" />
    </div>

    {/* Label next to the icon */}
    <h2 className="text-white">C++</h2>
  </div>
);

export default CPPIcon;
