import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] mt-10 md:mt-16 mx-auto flex flex-col items-start gap-4 sm:gap-6 px-4 sm:px-0">
      <span className="text-cyan-500 text-sm sm:text-base font-semibold tracking-wide uppercase">
        Full-Stack Developer &amp; Game Programmer
      </span>

      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Hi, I'm Aazeem Vaidya Shaikh.
      </h1>

      <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl">
        I build full-stack web apps and games — from responsive React
        front-ends to AI-driven gameplay systems — blending clean code with
        human-centered design.
      </p>

      <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
        <Button
          size="lg"
          className="bg-cyan-600 hover:bg-cyan-500 text-white text-base"
          onClick={scrollToWork}
        >
          View My Work
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="text-base text-white hover:text-accent-foreground"
          asChild
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Button>

        <Button
          size="lg"
          variant="ghost"
          className="text-base text-white hover:text-accent-foreground"
          onClick={() => navigate("/ContactMe")}
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default Hero;
