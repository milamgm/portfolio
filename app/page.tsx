"use client";
import "./page.scss";
import { useEffect, useRef } from "react";
import { typingTextEffectSingle } from "../gsapEffects/TypingText";
import { FadeIn } from "../gsapEffects/SingleEffects";


const greeting = `Hi! <br> I'm Mila, <br> web developer.`
const HomePage = () => {
  const boxRef = useRef();
  const textRef = useRef();

  // Adding Single Text Typing Effect
  useEffect(() => {
    let box = boxRef.current;
    let text = textRef.current;
    typingTextEffectSingle(box, text, greeting);

    return () => {
      typingTextEffectSingle(box, text, greeting);
    };
  }, []);

  return (
    <div className="home">
      <div className="center">
        <h1>
          <span className="box" ref={boxRef}></span>
          <span className="text" ref={textRef}></span>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
