import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";

interface PauseBtnProps {
  isPaused: boolean;
  setIsPaused: (value: boolean) => void;
}

function PauseBtn({ isPaused, setIsPaused }: PauseBtnProps) {
  // No internal state - uses props from parent
  const togglePlayPause = () => setIsPaused(!isPaused);

  return (
    <button
      className="inline-flex items-center px-3.5 py-3.5 border-2 border-cyan-800 text-cyan-500 rounded-full font-medium hover:text-black transition-colors duration-300 group ml-[1%] bg-[#1e293b] hover:bg-cyan-800 transition-colors"
      onClick={togglePlayPause}
      aria-label={isPaused ? "Pause" : "Play"}
    >
      {isPaused ? <PlayIcon /> : <PauseIcon />}
    </button>
  );
}

export default PauseBtn;
