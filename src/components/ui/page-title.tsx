import * as React from "react";
import { cn } from "@/lib/utils";

function PageTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="page-title"
      className={cn(
        "text-white text-3xl sm:text-4xl md:text-5xl font-bold",
        className
      )}
      {...props}
    />
  );
}

export { PageTitle };
