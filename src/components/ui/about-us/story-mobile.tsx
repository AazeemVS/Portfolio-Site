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
              I've been playing video games since I was a kid, but around age 15
              (in 2021, during quarantine) I started noticing glitches and
              errors. Madden was my go-to, and I'd see players fail to register
              certain moves or weird interactions causing funny bugs. I couldn't
              help but wonder why those bugs happened, and dreamt about how I
              might fix them to make my favorite game even better.
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
              Once quarantine ended, I dove into coding at school. I took an
              intro course, then AP Computer Science Principles and a robotics
              class in my senior year, using Python and MIT App Inventor. Those
              classes and extracurriculars cemented my love for programming.
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
              The summer before college, I tackled online CS courses from MIT
              and Harvard to sharpen my skills. Both used Python, and they gave
              me confidence heading into my first year.
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
              In my second year, I took an intro to web development class and
              fell in love with HTML, CSS, and JavaScript. From there, I built
              personal projects and dove deeper, taking Software Engineering
              courses where I learned Java, TypeScript, and Angular, and
              explored full-stack web development.
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
            Last semester I wrapped up rigorous Software Engineering and OOP
            classes, and I've been experimenting with HTML, Tailwind CSS, React,
            and shadcn/ui to level up my web-dev skills even more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoryMobile;
