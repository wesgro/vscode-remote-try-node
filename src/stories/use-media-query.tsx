import { useEffect, useState } from "react";

/**
 * Custom hook that tells you whether a given media query is active.
 *
 * Inspired by https://usehooks.com/useMedia/
 * https://gist.github.com/gragland/ed8cac563f5df71d78f4a1fefa8c5633
 */
export function useMediaQuery(query: string) {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState<boolean>(getMatches(query));
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return matches;
}

interface BreakpointValues {
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  active: "xs" | "sm" | "md" | "lg";
}
/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 *
 * Inspired by: https://github.com/contra/react-responsive/issues/162#issuecomment-592082035
 */
export function useBreakpoints() {
  const breakpoints: BreakpointValues = {
    isXs: useMediaQuery("(max-width: 640px)"),
    isSm: useMediaQuery("(min-width: 641px) and (max-width: 768px)"),
    isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
    isLg: useMediaQuery("(min-width: 1025px)"),
    active: "xs",
  };
  if (breakpoints.isXs) breakpoints.active = "xs";
  if (breakpoints.isSm) breakpoints.active = "sm";
  if (breakpoints.isMd) breakpoints.active = "md";
  if (breakpoints.isLg) breakpoints.active = "lg";
  return breakpoints;
}
