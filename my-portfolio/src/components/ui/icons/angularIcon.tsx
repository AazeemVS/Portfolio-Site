import React from "react";

const AngularIcon: React.FC = () => (
  <div className="flex flex-row w-full justify-start items-center gap-2 sm:gap-3 md:gap-4">
    {/* Responsive image container */}
    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11">
      <img
        src="../../../images/angular-icon.png"
        alt="Angular Logo"
        className="w-full h-full object-contain"
      />
    </div>

    {/* Responsive text container */}
    <div>
      <h2 className="text-white text-sm sm:text-base md:text-lg">Angular</h2>
    </div>
  </div>
);

export default AngularIcon;
