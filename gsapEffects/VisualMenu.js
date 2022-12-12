import { gsap } from "gsap";

export const handleVisualMenuMouseEnter = (imageWrapper, ind) => {
  console.log(imageWrapper[ind])
  gsap.defaults({ duration: 0.65, ease: "expo.out" });
  gsap.set(imageWrapper[ind], {
    scale: 0.8,
    xPercent: 25,
    yPercent: 50,
    rotation: -15,
  });
  gsap.to(imageWrapper[ind], {
    opacity: 1,
    scale: 1,
    yPercent: 0,
    rotation: 4,
  });
};

export const handleVisualMenuMouseLeave = (imageWrapper, ind) => {
  gsap.defaults({ duration: 0.7, ease: "expo.out" });
  gsap.to(imageWrapper[ind], {
    opacity: 0,
    xPercent: 25,
    yPercent: -50,
    rotation: -15,
    scale: 0.8,
  });
};
