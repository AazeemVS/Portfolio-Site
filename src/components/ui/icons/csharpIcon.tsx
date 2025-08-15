import React from "react";

const CsharpIcon: React.FC = () => (
  <div className="flex flex-row w-full justify-start items-center gap-2 sm:gap-3 md:gap-4">
    {/* Responsive image container */}
    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9">
      <img
        src="/images/csharp_logo.png"
        alt="C# Logo"
        className="w-full h-full object-contain"
      />
    </div>

    {/* Responsive text */}
    <h2 className="text-white text-sm sm:text-base md:text-lg">C#</h2>
  </div>
);

export default CsharpIcon;
