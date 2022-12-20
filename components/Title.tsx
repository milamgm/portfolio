import React, { useEffect, useRef } from "react";
import { typingTextEffectSingle } from "../gsapEffects/TypingText";

const Title = ({ title }) => {
  const boxRef = useRef();
  const textRef = useRef();

  // Adding Single Text Typing Effect
  useEffect(() => {
    typingTextEffectSingle(boxRef.current, textRef.current, title);

    return () => {
      typingTextEffectSingle(
        boxRef.current,
        textRef.current,
        `WOR<span>K</span>S`
      );
    };
  }, []);
  return (
    <h2 className="title">
      <span className="box" ref={boxRef}></span>
      <span className="text" ref={textRef}></span>
    </h2>
  );
};

export default Title;
