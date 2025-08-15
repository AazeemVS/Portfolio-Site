import React from "react";

const AngularProjIcon: React.FC = () => (
  <div className="flex flex-row w-full justify-start items-center gap-2 sm:gap-3">
    {/* Responsive image container - smaller sizes for projects */}
    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
      <img
        src="../../../images/AngularIcon.png"
        alt="Angular Logo"
        className="w-full h-full object-contain"
      />
    </div>

    {/* Responsive text - slightly smaller than main icons */}
    <div>
      <h2 className="text-white font-semibold text-xs sm:text-sm md:text-base">
        Angular
      </h2>
    </div>
  </div>
);

export default AngularProjIcon;
