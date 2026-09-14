import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = { behavior?: ScrollBehavior };

export default function ScrollToTop({ behavior = "auto" }: Props) {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If navigating to a sub-page, let the browser handle it.
    if (hash) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : behavior,
    });
  }, [pathname, search, hash, behavior]);

  return null;
}
