import React from "react";

const ShadcnIcon: React.FC = () => (
  <div className="flex flex-row w-full justify-start items-center gap-2 sm:gap-3 md:gap-4">
    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
      <img
        src="../../../images/ShadcnIcon1.png"
        alt="Shadcn Logo"
        className="w-full h-full object-contain"
      />
    </div>
    <h2 className="text-white text-sm sm:text-base md:text-lg">Shadcn</h2>
  </div>
);

export default ShadcnIcon;
