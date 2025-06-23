import React from "react";

// ViteIcon component displays the Vite logo (SVG) with a label
const ViteIcon: React.FC = () => (
  // Container aligns icon and text horizontally
  <div className="flex flex-row w-full justify-start items-center gap-4">
    {/* Icon wrapper with fixed size */}
    <div className="w-8 h-8">
      {/* SVG for the Vite logo */}
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <title>Vite</title>
        <path
          d="m8.286 10.578.512-8.657a.306.306.0 01.247-.282L17.377.006a.306.306.0 01.353.385l-1.558 5.403a.306.306.0 00.352.385l2.388-.46a.306.306.0 01.332.438l-6.79 13.55-.123.19a.294.294.0 01-.252.14c-.177.0-.35-.152-.305-.369l1.095-5.301a.306.306.0 00-.388-.355l-1.433.435a.306.306.0 01-.389-.354l.69-3.375a.306.306.0 00-.37-.36l-2.32.536a.306.306.0 01-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8.0 01.84.369.8.8.0 01.034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801.0 01-.672.37.826.826.0 01-.634-.302.8.8.0 01-.16-.67l1.029-4.981-1.12.34a.81.81.0 01-.86-.262.802.802.0 01-.165-.67l.63-3.08-2.027.468a.808.808.0 01-.768-.233.81.81.0 01-.217-.6l.389-6.57-7.44-1.33a.612.612.0 00-.64.906L11.58 23.691a.612.612.0 001.066-.004l11.26-20.135a.612.612.0 00-.644-.9z"
          fill="#fff"
        />
      </svg>
    </div>

    {/* Label next to the icon */}
    <h2 className="text-white">Vite</h2>
  </div>
);

export default ViteIcon;
