import React from "react";
import styles from "./styles.module.css";
import { ArrowIcon } from "./Icons";

const ContentSection = () => {
  return (
    <div
      className={`position-absolute d-flex flex-column align-items-center gap-4 ${styles.contentSection}`}
    >
      <div className="d-flex flex-column align-items-center gap-3 w-100">
        <header className="d-flex flex-column align-items-center">
          <h1 className={`text-center text-white ${styles.title}`}>
            Work, Grow, and Thrive
            <br />
            in Global Healthcare
          </h1>
        </header>
        <p className={`text-center text-white ${styles.description}`}>
          The world needs healthcare professionals, and you have the skills.
        </p>
      </div>
      <button
        className={`d-flex gap-2 justify-content-center align-items-center btn ${styles.ctaButton}`}
      >
        <span>Get Started</span>
        <ArrowIcon />
      </button>
    </div>
  );
};

export default ContentSection;
