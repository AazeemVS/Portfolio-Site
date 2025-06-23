import React from "react";

// NextJSProjIcon component displays the Next.js logo (SVG) with a label
const NextJSProjIcon: React.FC = () => (
  // Container aligns icon and text horizontally

  <div className="flex flex-row w-full justify-start items-center gap-4">
    {/* Icon wrapper with fixed size */}
    <div className="w-8 h-8">
      {/* SVG for Next.js logo */}
      <svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
        className="w-8 h-8"
      >
        <g>
          <path
            d="M119.616813.0688905149C119.066276... (truncated for brevity) ...77.4831252z"
            fill="#fff"
          />
        </g>
      </svg>
    </div>

    {/* Label next to the icon */}
    <h2 className="text-white font-semibold">Next.js</h2>
  </div>
);

export default NextJSProjIcon;
