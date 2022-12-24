import React, { useEffect, useRef } from "react";
import { typingTextEffectSingle } from "../gsapEffects/TypingText";

type TitleProps = {
  title: string;
};
const Title: React.FC<TitleProps> = ({ title }) => {
  const boxRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // Adding Single Text Typing Effect
  useEffect(() => {
    typingTextEffectSingle(textRef.current, boxRef.current, title);
  }, []);
  return (
    <h2 className="title">
      <span className="box" ref={boxRef}></span>
      <span className="text" ref={textRef}></span>
    </h2>
  );
};

export default Title;
