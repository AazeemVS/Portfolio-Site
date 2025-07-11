import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

// ProjBtns Component Implementation
interface ProjBtnsProps {
  githubUrl: string;
  liveDemoUrl: string;
}

const ProjBtns: React.FC<ProjBtnsProps> = ({ githubUrl, liveDemoUrl }) => {
  return (
    <div className="flex gap-4">
      <Button asChild variant="outline" className="gap-2">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" />
          View Code
        </a>
      </Button>
      <Button asChild className="gap-2">
        <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </a>
      </Button>
    </div>
  );
};

export { ProjBtns };
