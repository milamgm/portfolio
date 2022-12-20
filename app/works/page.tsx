"use client";
import { useEffect, useRef, useState } from "react";
import {
  handleVisualMenuMouseEnter,
  handleVisualMenuMouseLeave,
  handleVisualMenuMouseMove,
} from "../../gsapEffects/VisualMenu";
import "./works.scss";
import works from "./data/works.json";
import Title from "../../components/Title";
import { FadeIn } from "../../gsapEffects/SingleEffects";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { MdKeyboardArrowUp } from "react-icons/Md";

const Work = () => {
  //Creating two refs, each one with multiple elements.
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const revealImageWrapperRef = useRef([]);
  revealImageWrapperRef.current = [];
  let imageWrapper = revealImageWrapperRef.current;

  const mainDivRef = useRef(null);
  const isInViewport = useIsInViewport(mainDivRef);

  const addToRefs = (el, ref) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <div className="works" style={{ height: ` 100vh` }}>
      <div className="main" ref={mainDivRef} id="main">
        <Title title={`WOR<span>K</span>S`} />
        <FadeIn>
          <nav className="menu">
            {works.map(({ id, title, img }, ind) => (
              <div
                key={id}
                className="item"
                ref={(el) => addToRefs(el, revealRefs)}
                onMouseEnter={() =>
                  handleVisualMenuMouseEnter(imageWrapper, ind)
                }
                onMouseLeave={() =>
                  handleVisualMenuMouseLeave(imageWrapper, ind)
                }
                onMouseMove={(e) => handleVisualMenuMouseMove(e, imageWrapper)}
              >
                <div
                  className="img_wrapper"
                  ref={(el) => addToRefs(el, revealImageWrapperRef)}
                >
                  <img src={img} alt="" />
                </div>
                <span className="text">
                  <span className="innertext">
                    {" "}
                    <a href={`#${title}`}>{title}</a>
                  </span>
                </span>
              </div>
            ))}
          </nav>
        </FadeIn>
      </div>
      {works.map(({ id, title, img, img2, img3, desc, technologies }) => (
        <section key={id}>
          <div className="center" id={title}>
            <div className="side">
              {id % 2 === 0 && (
                <WorkInfo title={title} desc={desc} techn={technologies} />
              )}
              {id % 2 !== 0 && (
                <WorkImg img={img} img2={img2} img3={img3} title={title} />
              )}
            </div>
            <div className="side">
              {id % 2 !== 0 && (
                <WorkInfo title={title} desc={desc} techn={technologies} />
              )}
              {id % 2 === 0 && (
                <WorkImg img={img} img2={img2} img3={img3} title={title} />
              )}
            </div>
          </div>
        </section>
      ))}
      <a href="#main" style={{ opacity: `${isInViewport ? "0" : "1"}` }}>
        <div className="arrow"><MdKeyboardArrowUp/></div>
      </a>
    </div>
  );
};

export default Work;

const WorkInfo = ({ title, desc, techn }) => {
  return (
    <div className="info">
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="technologies">
        {techn.map((technologie) => (
          <img src={`${technologie}.png`} alt={technologie} />
        ))}
      </div>
    </div>
  );
};

const WorkImg = ({ img, img2, img3, title }) => {
  const imgs = [img, img2, img3];
  const [random, setRandom] = useState(0);

  //Shows a random image

  useEffect(() => {
    let random = 0;
    const interval = setInterval(() => {
      random = Math.floor(Math.random() * imgs.length);
      setRandom(random);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="works_img_wrapper">
        <img src={imgs[random]} alt={title} />
      </div>
    </>
  );
};
