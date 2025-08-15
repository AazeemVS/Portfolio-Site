import React from "react";

// HTMLIcon component displays an HTML logo (SVG) with a label
const HTMLIcon: React.FC = () => (
  // Container aligns icon and text horizontally
  <div className="flex w-full justify-center items-center gap-4">
    {/* Icon wrapper with fixed size */}
    <div className="w-9 h-9">
      {/* SVG for the HTML logo */}
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

    {/* Label next to the icon */}
    <h2 className="text-white">HTML</h2>
  </div>
);

export default HTMLIcon;
