import Link from "next/link";
import React from "react";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link className="link" href="/">
          <h1>M</h1>
          <h2>Mila</h2>
          <h5>Web Developer</h5>
        </Link>
      </div>
      <nav>
        <Link className="link" href="/">
          Home
        </Link>
        <Link className="link" href="/works">
          Works
        </Link>
        <Link className="link" href="/about">
          About Me
        </Link>
        <Link className="link" href="/contact">
          Contact
        </Link>
      </nav>
      <ul className="social">
        <li>
          <a href="">
            <img src="./linkedin.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="https://github.com/milamgm">
            <img src="./github.svg" alt="Github" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="./twitter.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
