import React from "react";

const HTMLIcon: React.FC = () => (
  <div className="flex w-full justify-center items-center gap-2 sm:gap-3 md:gap-4">
    {/* Icon wrapper with responsive sizing */}
    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="w-full h-full"
      >
        <path
          d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
          fill="#fff"
        />
      </svg>
    </div>

    {/* Responsive text sizing */}
    <h2 className="text-white text-sm sm:text-base md:text-lg">HTML</h2>
  </div>
);

export default HTMLIcon;
