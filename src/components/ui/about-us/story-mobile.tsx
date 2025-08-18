import { Card } from "@/components/ui/card";

const StoryMobile = () => {
  return (
    <section className="px-4">
      {/* Story header */}
      <Card className="border-none bg-transparent shadow-none">
        <div className="text-white text-left text-3xl mt-8 ml-2 font-bold">
          <h1>Story</h1>
        </div>
      </Card>

      <div className="w-full mt-8">
        <div className="w-full flex justify-center mb-2">
          <div className="relative w-full flex justify-center items-center">
            <div className="h-6 w-1 bg-cyan-800"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center">
              1
            </div>
          </div>
        </div>
        {/* Note 1 */}
        <div className="w-full mb-2">
          <div className="w-full bg-cyan-800 rounded p-4">
            <h1 className="text-white text-xl font-medium py-2">Beginnings</h1>
            <p className="text-white text-sm font-semibold">
              Since I was a kid, video games weren’t just entertainment, they
              sparked my curiosity. Around 2021, during quarantine, I started
              noticing glitches and unexpected bugs in my favorite game Madden.
              Instead of ignoring them, I found myself asking why they happened
              and imagining how I could fix them. That curiosity planted the
              seed that I could be more than just a player, I could be a creator
              and problem solver.
            </p>
          </div>
        </div>

        {/* Timeline line and dot */}
        <div className="w-full flex justify-center mb-2">
          <div className="relative w-full flex justify-center items-center">
            <div className="h-6 w-1 bg-cyan-800"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center">
              2
            </div>
          </div>
        </div>

        {/* Timeline line and dot */}

        {/* Note 2 */}
        <div className="w-full mb-2">
          <div className="w-full bg-cyan-800 rounded p-4">
            <h1 className="text-white text-xl font-medium py-2">First Steps</h1>
            <p className="text-white text-sm font-semibold">
              Once school reopened, I dove headfirst into coding. I took my
              first intro coding class, then AP Computer Science Principles, and
              even explored robotics in my senior year. I explored tools like
              Python and MIT App Inventor, and discovered the power of
              programming. These experiences weren’t just classes; they lit a
              fire in me to keep pushing further, honing my skills.
            </p>
          </div>
        </div>

        {/* Timeline line and dot */}
        <div className="w-full flex justify-center mb-2">
          <div className="relative w-full flex justify-center items-center">
            <div className="h-6 w-1 bg-cyan-800"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center">
              3
            </div>
          </div>
        </div>

        {/* Note 3 */}
        <div className="w-full mb-2">
          <div className="w-full bg-cyan-800 rounded p-4">
            <h1 className="text-white text-xl font-medium py-2">
              Pre-College Summer
            </h1>
            <p className="text-white text-sm font-semibold">
              The summer before college, I couldn’t wait for classes to begin. I
              challenged myself with online CS courses from MIT and Harvard,
              both centered on Python. The classes weren’t easy, but they gave
              me confidence and taught me that with enough drive and
              self-discipline, I could pick up any new skill and excel in it.
            </p>
          </div>
        </div>
        {/* Timeline line and dot */}
        <div className="w-full flex justify-center mb-2">
          <div className="relative w-full flex justify-center items-center">
            <div className="h-6 w-1 bg-cyan-800"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center">
              4
            </div>
          </div>
        </div>

        {/* Note 4 */}
        <div className="w-full mb-2">
          <div className="w-full bg-cyan-800 rounded p-4">
            <h1 className="text-white text-xl font-medium py-2">College</h1>
            <p className="text-white text-sm font-semibold">
              By my second year in college, I was ready to branch out. I fell in
              love with web development, HTML, CSS, and JavaScript/TypeScript
              opened up a new world of creativity for me. From there, I built
              personal projects, tackled Software Engineering courses in Java,
              TypeScript, and Angular, and began to see the whole picture of
              full-stack development. Every new skill further equipped me with
              the means to bring my ideas to life.
            </p>
          </div>
        </div>

        {/* Final timeline dot (no line after last item) */}
        <div className="w-full flex justify-center w-full flex justify-center items-center">
          <div className="w-6 h-6 rounded-full bg-cyan-800 z-10 text-white text-center flex items-center justify-center mb-2">
            5
          </div>
        </div>
      </div>

      {/* Note 5 */}
      <div className="w-full mb-2">
        <div className="w-full bg-cyan-800 rounded p-4">
          <h1 className="text-white text-xl font-medium py-2">Present</h1>
          <p className="text-white text-sm font-semibold">
            Today, I’m pushing myself further than ever. I’ve built a strong
            foundation in Software Engineering and OOP, and now I’m delving into
            modern tools like React, Tailwind CSS, and shadcn/ui. I don’t just
            want to code; I want to create, problem-solve, and keep learning.
            Every project I build is a step toward the kind of developer I
            aspire to be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoryMobile;
