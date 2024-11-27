import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "../styles/ResumeButton.css";

const ResumeButton = () => {
  return (
    <a className="learn-more" href="/Resume.pdf"  target="_blank"  rel="noreferrer noopener">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Download Resume</span>
          </a>
  );
};

export default ResumeButton;
