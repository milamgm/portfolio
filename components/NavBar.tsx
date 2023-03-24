"use client";
import Link from "next/link";
import React from "react";
import "./navbar.scss";
interface INavBarProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = ({ setOpenMenu }: INavBarProps) => {
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
        <Link className="link" href="/" onClick={() => setOpenMenu(false)}>
          Home
        </Link>
        <Link className="link" href="/works" onClick={() => setOpenMenu(false)}>
          Works
        </Link>
        <Link className="link" href="/about" onClick={() => setOpenMenu(false)}>
          About
        </Link>
        <Link
          className="link"
          href="/contact"
          onClick={() => setOpenMenu(false)}
        >
          Contact
        </Link>
      </nav>
      <ul className="social">
        <li>
          <a href="https://www.linkedin.com/in/milagros-c-gonzalez-montero-b4a7b0266/">
            <img src="./linkedin.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="https://github.com/milamgm">
            <img src="./github.svg" alt="Github" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
