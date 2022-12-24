import { gsap } from "gsap/all";

gsap.config({
  nullTargetWarn: false,
});

export const handleVisualMenuMouseEnter = (
  imageWrapper: string[],
  ind: number
): void => {
  gsap.defaults({ duration: 1, ease: "expo.out" });
  gsap.set(imageWrapper[ind], {
    scale: 0.8,
    xPercent: 25,
    yPercent: 10,
    rotation: -15,
  });
  gsap.to(imageWrapper[ind], {
    opacity: 1,
    scale: 1,
    yPercent: 0,
    rotation: 0,
  });
};

export const handleVisualMenuMouseLeave = (
  imageWrapper: string[],
  ind: number
): void => {
  gsap.defaults({ duration: 1, ease: "expo.out" });
  gsap.to(imageWrapper[ind], {
    opacity: 0,
    xPercent: 15,
    yPercent: -10,
    rotation: -15,
    scale: 0.8,
  });
};

export const handleVisualMenuMouseMove = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  imageWrapper: string[]
): void => {
  gsap.to(imageWrapper, {
    x: e.clientX * -0.1,
    y: e.clientY * 0.2,
    delay: 0.3,
  });
};
