import { Button } from "@/components/ui/button";
import {
  ExternalLinkIcon,
  Link2Icon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

interface ProjBtnsProps {
  githubUrl?: string;
  liveDemoUrl?: string;
  websiteUrl?: string;
}

const ProjBtns: React.FC<ProjBtnsProps> = ({
  githubUrl,
  liveDemoUrl,
  websiteUrl,
}) => {
  return (
    <div className="flex gap-4">
      {githubUrl && (
        <Button asChild variant="outline" className="gap-2">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <GitHubLogoIcon className="h-4 w-4" />
            View Code
          </a>
        </Button>
      )}
      {websiteUrl && (
        <Button asChild variant="secondary" className="gap-2">
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <Link2Icon className="h-4 w-4" />
            Website
          </a>
        </Button>
      )}
      {liveDemoUrl && (
        <Button asChild className="gap-2">
          <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="h-4 w-4" />
            Live Demo
          </a>
        </Button>
      )}
    </div>
  );
};

export { ProjBtns };
