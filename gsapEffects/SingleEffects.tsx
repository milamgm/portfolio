import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FadeInProps } from "../types/types";

export const FadeIn: React.FC<FadeInProps> = ({
  children
}) => {
  const element = useRef(null);

  useEffect(() => {
    gsap.from(element.current, {
      opacity: 0,
      ease: "power2.inOut",
    });
    gsap.to(element.current, {
      duration: 1,
      opacity: 1,
      ease: "power2.inOut",
    });
  }, []);

  return <div ref={element}>{children}</div>;
};
