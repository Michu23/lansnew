"use client";
import React from "react";
import styles from "./Shape.module.css";
import ShapeCard from "./ShapeCard";

const ShapeCareer = () => {
  return (
    <div
      className={styles.containerShapeCareer}
      //   style={{
      //     width: "98vw",
      //   }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center gap-3">
        <div className={styles.badge}>Lanstitut Language Learning</div>
        <h2>
          Shape Your Career in
          <br />
          Global Healthcare
        </h2>
        <p className="text-center">
          Let’s start with how we can help you achieve success.
        </p>
      </div>
      <ShapeCard />
    </div>
  );
};

export default ShapeCareer;
