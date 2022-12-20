import { gsap } from "gsap/all";

// Effect for multiple sentences, with cursor detail
const words = [
  "'m Mila.",
  " love tech.",
  "'m a front-end dev.",
  " love smoothies🥤",
];
export const typingTextEffectMultiple = (cursor, box, hi, text) => {
  gsap.to(cursor, { opacity: 0.5, ease: "power2.inOut", repeat: -1 });

  let masterTl = gsap.timeline({ repeat: -1 }).pause();
  let boxTl = gsap.timeline();

  boxTl
    .to(box, {
      duration: 1,
      width: "17vw",
      delay: 0.5,
      ease: "power4.inOut",
    })
    .from(hi, { duration: 0.2, y: "7vw", ease: "power3.out" })
    .to(box, {
      duration: 1,
      height: "7vw",
      ease: "elastic.out",
      onComplete: () => masterTl.play(),
    })
    .to(box, {
      duration: 0.5,
      autoAlpha: 0.7,
      yoyo: true,
      repeat: -1,
      ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
    });
  words.forEach((word) => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tl.to(text, { duration: 1, text: word });
    masterTl.add(tl);
  });
};

// Effect for a single sentence, no repeat

export const typingTextEffectSingle = (box, text, sentence) => {
  
  let boxTl = gsap.timeline();

  boxTl
    .to(box, {
      duration: 1,
      width: "17vw",
      ease: "power4.inOut",
    })
    .to(box, {
      duration: 1,
      height: "7vw",
      ease: "elastic.out",
    })
    .to(box, {
      duration: 0.5,
      autoAlpha: 0.7,
      ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
    });
    let phrase = [sentence]
    phrase.forEach((word) => {
    let tl = gsap.timeline();
    tl.to(text, { duration: 1, text: word });

  });
};
