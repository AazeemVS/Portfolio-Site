import React from 'react';

// AngularIcon component displays an Angular logo with a label
const AngularIcon: React.FC = () => (

            // Container aligns icon and text horizontally
            <div className="flex flex-row w-full justify-start items-center gap-4">

                {/* Icon wrapper with fixed size */}
                <div className="w-11 h-11">  
                    <img src="../../../images/AngularIcon.png" alt="Angular Logo Image"></img>
                 </div>
                <div>

                     {/* Label next to the icon */}
                    <h2 className="text-white">Angular</h2>
                </div>
            </div>
   
);
export default AngularIcon;
