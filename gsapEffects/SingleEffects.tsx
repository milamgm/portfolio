import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const FadeIn = ({ children, duration = 1, delay = 0 }) => {
  const element = useRef(null);

  useEffect(() => {
    gsap.from(element.current, {
      opacity: 0,
      ease: "power2.inOut",
    });
    gsap.to(element.current, {
   
      duration: duration,
      opacity: 1,
      ease: "power2.inOut",
    });
  }, []);

  return <div ref={element}>{children}</div>;
};