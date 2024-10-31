import { useEffect, useCallback } from "react";

export const useInfiniteScroll = (callback: () => void) => {
  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
};