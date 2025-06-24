import { useState } from "react";
import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import StaticSkillsScroller from "./staticSkills";
function PauseBtn() {
  //PSEUDOCODE
  // I need to define variables for the 2 states I have
  // I need to create/write a function that switches between the 2 modes (togglePlayPause)
  // I need to return something (type = button) to hold the button and display to the user

  const [isPaused, setIsPaused] = useState<boolean>(true);
  const togglePlayPause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <>
      <div className=" text-right">
        <button
          type="button"
          className="inline-flex items-center px-3.5 py-3.5 border-2 border-cyan-800 text-cyan-500 rounded-full font-medium hover:text-black transition-colors duration-300 group ml-[1%] bg-[#1e293b] hover:bg-cyan-800 transition-colors"
          onClick={togglePlayPause}
          aria-label={isPaused ? "Pause" : "Play"}
        >
          {isPaused ? (
            <>
              <PauseIcon />
            </>
          ) : (
            <PlayIcon />
          )}
        </button>
      </div>
    </>
  );
}
export default PauseBtn;
