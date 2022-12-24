"use client";
import React, { useState } from "react";
import Title from "../../components/Title";
import { FadeIn } from "../../gsapEffects/SingleEffects";
import "./contact.scss";

const initialState = "milagm89@outlook.de";

// Copy email to clipboard
const handleCopyToClipboard = () => {
  navigator.clipboard.writeText(initialState);
};

const page = () => {
  const [multiStringLink, setMultiStringLink] = useState(initialState);

  return (
    <div className="contact">
      <Title title="Cont<span>a</span>ct" />
      <FadeIn>
        <div className="center">
          <h1>Let's get in touch!</h1>
          <hr />
          <p>
            Got a question, proposal or project or want to work together on
            something? <br />
            Feel free to reach out.
          </p>
          <a href="mailto: milagm89@outlook.de">
            <button className="btn btn-2">
              <p>Contact me!</p>
            </button>
          </a>
          <p
            className={`email ${
              multiStringLink === "Copied to Clipboard!" ? "copied" : ""
            }`}
            onClick={handleCopyToClipboard}
            onMouseEnter={() => setMultiStringLink("Copy to Clipboard")}
            onMouseLeave={() => setMultiStringLink(initialState)}
            onMouseDown={() => setMultiStringLink("Copied to Clipboard!")}
          >
            {multiStringLink}
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default page;
