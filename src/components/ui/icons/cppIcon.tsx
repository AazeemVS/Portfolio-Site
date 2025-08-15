import React from "react";

const CPPIcon: React.FC = () => (
  <div className="flex flex-row w-full justify-start items-center gap-2 sm:gap-3 md:gap-4">
    {/* Responsive image container */}
    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
      <img
        src="../../../images/CPlusPlusIcon.png"
        alt="C++ Logo"
        className="w-full h-full object-contain"
      />
    </div>

    {/* Responsive text */}
    <h2 className="text-white text-sm sm:text-base md:text-lg">C++</h2>
  </div>
);

export default CPPIcon;
