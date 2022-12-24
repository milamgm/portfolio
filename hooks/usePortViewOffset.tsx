import { useEffect, useState } from "react";

export function useWindowSize() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
  
      function handleResize() {
        setWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return { width };
}
