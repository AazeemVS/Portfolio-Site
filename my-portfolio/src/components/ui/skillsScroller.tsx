import React from "react";

// Props: an array of icon components to display in the scroller
interface SkillsScrollerProps {
  icons: React.FC[];
}

// SkillsScroller component: horizontal marquee of icons that pauses on hover
const SkillsScroller: React.FC<SkillsScrollerProps> = ({ icons }) => (
  <div className="flex justify-center items-center relative bg-[#111111]">
    {/* Overlay gradients on left and right to fade icons at edges */}
    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

    {/* Mask and container limiting visible area of the scrolling icons */}
    <div
      className="overflow-hidden max-w-[600px] p-8 relative"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, #111111 15%, #111111 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #111111 15%, #111111 85%, transparent 100%)",
      }}
    >
      {/* Animated section: scrolls infinitely, and pauses when the user hovers over an icon */}
      <div
        className="whitespace-nowrap inline-block animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused] w-fit"
        style={{
          animationName: "scroll",
          animationDuration: "35s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {/* Duplicates the animation to create a fluid looping animation */}
        {[...Array(2)].flatMap((_, loop) =>
          icons.map((Icon, i) => (
            <span key={`icon-${loop}-${i}`} className="inline-block mx-2">
              {/* Renders each passed icon */}
              <Icon />
            </span>
          ))
        )}
      </div>
    </div>

    <style>{`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

export default SkillsScroller;
