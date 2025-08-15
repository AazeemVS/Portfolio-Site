import React from "react";

const CSSIcon: React.FC = () => (
  <div className="flex w-full justify-center items-center gap-2 sm:gap-3 md:gap-4">
    {/* Icon wrapper with responsive sizing */}
    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="w-full h-full"
      >
        <path
          d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"
          fill="#fff"
        />
      </svg>
    </div>

    {/* Responsive text sizing */}
    <h2 className="text-white text-sm sm:text-base md:text-lg">CSS</h2>
  </div>
);

export default CSSIcon;
