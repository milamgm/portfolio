"use client";
import { useEffect, useRef, useState } from "react";
import { RefObject } from "react";
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
import { MdKeyboardArrowUp } from "react-icons/md";
import { WorkImgProps } from "../../types/types";

const Work = () => {
  //Creating two refs, each one with multiple elements.
  const revealRefs = useRef<HTMLDivElement[]>([]);
  revealRefs.current = [];

  const revealImageWrapperRef = useRef([]);
  revealImageWrapperRef.current = [];
  let imageWrapper = revealImageWrapperRef.current;

  const mainDivRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(mainDivRef);

  const addToRefs = (el: HTMLDivElement, ref: RefObject<HTMLDivElement[]>) => {
    if (el && !ref.current!.includes(el)) {
      ref.current!.push(el);
    }
  };

  return (
    <div className="works" style={{ height: ` 100vh` }}>
      <div className="main" ref={mainDivRef} id="main">
        <Title title={`WOR<span>K</span>S`} />
        <FadeIn>
          <nav className="menu">
            {works.map(({ id, title, subtitle, img }, ind) => (
              <div
                key={id}
                className="item"
                ref={(el: HTMLDivElement) => addToRefs(el, revealRefs)}
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
                  ref={(el: HTMLDivElement) =>
                    addToRefs(el, revealImageWrapperRef)
                  }
                >
                  <img src={img} alt="" />
                </div>
                <span className="text">
                  <span className="innertext">
                    <a href={`#${title}`}>
                      <h4>{title}</h4>
                      <div className="subtitle">{subtitle}</div>
                    </a>
                  </span>
                </span>
              </div>
            ))}
          </nav>
        </FadeIn>
      </div>
      {works.map(
        ({
          id,
          title,
          subtitle,
          img,
          img2,
          img3,
          desc,
          technologies,
          webLink,
        }) => (
          <section key={id} id={title}>
            <div className="center">
              <div className="side">
                <div className="info">
                  <a href={webLink}>
                    <div className="title">
                      <h2>{title}</h2>
                      <h3>{subtitle}</h3>
                    </div>
                    <p>{desc}</p>
                    <div className="technologies">
                      {technologies.map((technologie) => (
                        <img
                          key={technologie}
                          src={`${technologie}.png`}
                          alt={technologie}
                        />
                      ))}
                    </div>
                  </a>
                </div>
                <WorkImg img={img} img2={img2} img3={img3} title={title} />
              </div>
            </div>
          </section>
        )
      )}
      <a href="#main" style={{ opacity: `${isInViewport ? "0" : "1"}` }}>
        <div className="arrow">
          <MdKeyboardArrowUp />
        </div>
      </a>
    </div>
  );
};

export default Work;

const WorkImg: React.FC<WorkImgProps> = ({ img, img2, img3, title }) => {
  const imgs = [img, img2, img3];
  const [random, setRandom] = useState(0);

  //Shows a random image

  useEffect(() => {
    let random = 0;
    const interval = setInterval(() => {
      random <= 1 ? random ++  : random = 0;
      setRandom(random)
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
