"use client";
import React from "react";
import styles from "./Shape.module.css";
import ShapeCard from "./ShapeCard";
import ShapeCard2 from "./ShapeCard2";

const ShapeCareer = () => {
  return (
    <div className={styles.containerShapeCareer}>
      <div className="d-flex flex-column align-items-center justify-content-center gap-3">
        <div className={styles.badge}>Lanstitut Language Learning</div>
        <h2 className="component-h2">
          Shape Your Career in
          <br />
          Global Healthcare
        </h2>
        <p className="text-center">
          Let’s start with how we can help you achieve success.
        </p>
      </div>
      <ShapeCard />
      <ShapeCard2 />
    </div>
  );
};

export default ShapeCareer;
