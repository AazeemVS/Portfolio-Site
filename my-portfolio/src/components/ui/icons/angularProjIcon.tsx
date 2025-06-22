import React from 'react';

// AngularIcon component displays an Angular logo with a label (This component is the projects section so it needs to be smaller than the other component)
const AngularProjIcon: React.FC = () => (
  
            // Container aligns icon and text horizontally
            <div className="flex flex-row w-full justify-start items-center gap-4">

                {/* Icon wrapper with fixed size */}
                <div className="w-8 h-8"> 
                    <img src="../../../images/AngularIcon.png" alt="Angular Logo Image"></img>
                </div>
                <div>

                  {/* Label next to the icon */}
                  <h2 className="text-white font-semibold">Angular</h2>
              </div>
        </div>      
);

export default AngularProjIcon;
