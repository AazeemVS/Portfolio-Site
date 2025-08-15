import React from "react";

const AngularProjIcon: React.FC = () => (
  <div className="flex flex-row w-full justify-start items-center gap-2 sm:gap-3">
    {/* Responsive image container - smaller sizes for projects */}
    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M281.7 332.1L357.9 332.1L319.8 240.5L281.7 332.1zM319.8 96L112 170.4L143.8 446.1L319.8 544L495.8 446.1L527.6 170.4L319.8 96zM450 437.8L401.4 437.8L375.2 372.4L264.6 372.4L238.4 437.8L189.7 437.8L319.8 145.5L450 437.8z" />
      </svg>
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
