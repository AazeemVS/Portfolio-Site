import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const AbtMe = () => {
  return (
    <Card className="bg-slate-900 text-card-foreground rounded-xl border-2 border-solid border-[#27272a] shadow-sm w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] mt-10 md:mt-20 mx-auto">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4 sm:gap-2">
            {/* Name (full width on mobile, left-aligned on desktop) */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold m-0">
              Aazeem Vaidya Shaikh
            </h1>

            {/* Social links (full width on mobile, right-aligned on desktop) */}
            <div className="flex gap-2 w-full sm:w-auto justify-start sm:justify-end">
              {/* Email */}
              <a
                href="mailto:av7304@rit.edu"
                target="_blank"
                aria-label="Email"
                className="card p-2 sm:p-3 border-2 border-solid border-[#27272a] hover:bg-[#27272a] rounded-lg 
                  transition-all duration-200 ease-in-out 
                  transform hover:-translate-y-1"
              >
                <EnvelopeClosedIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AazeemVS"
                target="_blank"
                aria-label="GitHub"
                className="card p-2 sm:p-3 border-2 border-solid border-[#27272a] hover:bg-[#27272a] rounded-lg 
                  transition-all duration-200 ease-in-out 
                  transform hover:-translate-y-1"
              >
                <GitHubLogoIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/AazeemVS"
                target="_blank"
                aria-label="LinkedIn"
                className="card p-2 sm:p-3 border-2 border-solid border-[#27272a] hover:bg-[#27272a] rounded-lg 
                  transition-all duration-200 ease-in-out 
                  transform hover:-translate-y-1"
              >
                <LinkedInLogoIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base">
          Hey, I’m Aazeem. I'm a full stack developer passionate about web,
          software, and game development. I love blending human-centered design
          with coding to create engaging, user-friendly experiences.
        </p>
      </CardContent>
    </Card>
  );
};

export default AbtMe;
