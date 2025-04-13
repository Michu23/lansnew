import React from "react";
import styles from "./styles.module.css";
import { ArrowIcon } from "./Icons";

const ContentSection = () => {
  return (
    <div
      className={` d-flex flex-column align-items-center gap-4 ${styles.contentSection}`}
    >
      <div className="d-flex flex-column align-items-center gap-3 w-100">
        <header className="d-flex flex-column align-items-center">
          <h1 className={`text-center text-white ${styles.title}`}>
            You’re Qualified.
            <br />
            We Prove It Globally.
          </h1>
        </header>
        <p className={`text-center text-white ${styles.description}`}>
          Join thousands of nurses advancing their careers with Lanstitute.
        </p>
      </div>
      <div className="d-flex justify-content-center gap-3">
        <button
          className={`d-flex gap-2 justify-content-center align-items-center btn ${styles.ctaButton}`}
        >
          <span>Explore our Service</span>
          <ArrowIcon />
        </button>
        <button
          className={`d-flex gap-2 justify-content-center align-items-center btn ${styles.ctaButton}`}
        >
          <span>Learn How We Help!</span>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default ContentSection;
