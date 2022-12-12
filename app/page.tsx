"use client";
import "./page.scss";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);
import { typingTextEffect } from "../gsapEffects/TypingText";
import Work from "./works/page";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const cursorRef = useRef();
  const boxRef = useRef();
  const hiRef = useRef();
  const textRef = useRef();


  // Adding Text Typing Effect
  useEffect(() => {
    let cursor = cursorRef.current;
    let box = boxRef.current;
    let hi = hiRef.current;
    let text = textRef.current;

    typingTextEffect(cursor, box, hi, text);
  }, []);

  return (
    <div className="page">
      <div className="center">
        <h1>
          <span className="box" ref={boxRef}></span>
          <span className="hi" ref={hiRef}>
            Hi! I
          </span>
          <span className="text" ref={textRef}></span>
          <span className="cursor" ref={cursorRef}>
            _
          </span>
        </h1>
      </div> 
    </div>
  );
};

export default HomePage;
