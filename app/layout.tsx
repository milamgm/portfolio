"use client";
import NavBar from "../components/NavBar";
import "../styles/globals.scss";
import "../styles/button.scss";
import { gsap, ScrollTrigger, TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
import "./layout.scss"
import {GrClose} from "react-icons/Gr";
import {useState} from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <html>
      <head />
      <body>
        <div className="nav_div">
        <div className="close"><GrClose/></div>
          <NavBar />
        </div>
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
