import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = { behavior?: ScrollBehavior };

export default function ScrollToTop({ behavior = "smooth" }: Props) {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If navigating to a sub-page, let the browser handle it.
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, search, hash, behavior]);

  return null;
}
