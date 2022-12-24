import { useEffect, useMemo, useState, RefObject } from "react";

export const useIsInViewport = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
