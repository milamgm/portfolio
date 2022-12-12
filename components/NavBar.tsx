import Link from "next/link";
import React from "react";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
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
    </div>
  );
};

export default NavBar;
