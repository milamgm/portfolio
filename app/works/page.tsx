"use client";
import { useRef } from "react";
import {
  handleVisualMenuMouseEnter,
  handleVisualMenuMouseLeave,
} from "../../gsapEffects/VisualMenu";
import "./works.scss";

//WORKS ARRAY
const works = [
  {
    id: 1,
    title: "Shinjuku",
    img: "https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Shinnjuku",
    img: "https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Ramen",
    img: "https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Neko",
    img: "https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Kabukicho",
    img: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "Bboba Tea",
    img: "https://images.pexels.com/photos/942317/pexels-photo-942317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Work = () => {
  //Creating two refs, each one with multiple elements.
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const revealImageWrapperRef = useRef([]);
  revealImageWrapperRef.current = [];
  let imageWrapper = revealImageWrapperRef.current;

  const addToRefs = (el, ref) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <div className="container">
      <nav className="menu">
        {works.map(({ id, title, img }, ind) => (
          <div
            key={id}
            className="item"
            ref={(el) => addToRefs(el, revealRefs)}
            onMouseEnter={() => handleVisualMenuMouseEnter(imageWrapper, ind)}
            onMouseLeave={() => handleVisualMenuMouseLeave(imageWrapper, ind)}
          >
            <div
              className="img_wrapper"
              ref={(el) => addToRefs(el, revealImageWrapperRef)}
            >
              <div className="window_squares">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
              </div>
              <div className="inner">
                <img src={img} alt="" />
              </div>
            </div>
            <span className="text">
              <span className="innertext">{title}</span>
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Work;
