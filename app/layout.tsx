"use client";
import NavBar from "../components/NavBar";
import "../styles/globals.scss";
import "../styles/button.scss";
import "./layout.scss";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import Intro from "../components/Intro";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html>
      <head />
      <body>
       {!loaded &&  <Intro/>}
        {loaded && (
          <>
            <div
              className="mobile_menu_icon"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              {!openMenu ? <GiHamburgerMenu /> : <GrClose />}
            </div>
            <div className={`nav_div ${openMenu === true ? "active" : ""}`}>
              <NavBar setOpenMenu={setOpenMenu} />
            </div>
            <main className="content">{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
