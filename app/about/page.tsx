"use client";
import { useEffect, useRef } from "react";
import "./about.scss";
import gsap from "gsap";
import listStyle from "../../public/list_style.svg";
import Title from "../../components/Title";
import { FadeIn } from "../../gsapEffects/SingleEffects";

const about = () => {
  const tvBgRef = useRef();
  const tvRef = useRef();

  useEffect(() => {
    const mouseMove = document.addEventListener("mousemove", (e) => {
      gsap.to(tvBgRef.current, {
        rotate: e.clientX * 0.002,
        stagger: -0.02,
      });
      gsap.to(tvRef.current, {
        rotate: e.clientY * 0.007,
        stagger: -0.02,
      });
    });
    return () => {
      mouseMove;
    };
  }, []);

  return (
    <div className="about">
      <Title title="Abo<span>u</span>t" />
      <FadeIn>
        <div className="center">
          <div className="greeting">
            <img src="./hey.svg" alt="" className="greeting" />
            <div className="img_wrapper" ref={tvBgRef}>
              <div className="tvframe" ref={tvRef}>
                <img src="./TV.png" alt="" className="tv" />
                <div className="photowrapper">
                  <div className="phototv">
                    <img src="/test.gif" alt="" />
                  </div>
                  <div className="bgtv">
                    <img src="/tvbg.gif" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            My name is Mila Gonzalez and I am passionate about web development
            and UI/UX design, often doing both at the same time. As an
            enthusiast, I enjoy learning about emerging technologies every day,
            in order to keep my skills up to date.
          </p>
          <br />
          <p>
            As a jack of all trades, my experience also includes graphic design,
            video editing, animation and sound design.
          </p>
          <br />
          <p>Here are a few technologies I’ve been working with recently: </p>
          <div className="technologies">
            <ul>
              <li data-icon={listStyle}>JavaScript (ES6+)</li>
              <li data-icon={listStyle}>React</li>
              <li data-icon={listStyle}>TypeScript</li>
            </ul>
            <ul>
              <li data-icon={listStyle}>Next.js</li>
              <li data-icon={listStyle}>GraphQL</li>
              <li data-icon={listStyle}>Unit Testing</li>
              <li data-icon={listStyle}>Redux</li>
            </ul>
            <ul>
              <li data-icon={listStyle}>SASS</li>
              <li data-icon={listStyle}>Bootstrap</li>
              <li data-icon={listStyle}>Tailwind</li>
              <li data-icon={listStyle}>Figma</li>
            </ul>
            <ul>
              <li data-icon={listStyle}>Headless CMS</li>
              <li data-icon={listStyle}>PWA</li>
              <li data-icon={listStyle}>Wordpress</li>
            </ul>
          </div>
          <br />
        </div>
      </FadeIn>
    </div>
  );
};

export default about;
