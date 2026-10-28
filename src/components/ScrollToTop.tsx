import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop () {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // This runs every time the pathname changes
if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null; // This component doesn't render anything
};

