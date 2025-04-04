import React from "react";
import styles from "./styles.module.css";

const FeatureCard = ({ title, description, icon, className = "" }) => {
  return (
    <article
      className={`d-inline-flex flex-column gap-2 p-3 bg-white rounded-3 ${styles.featureCard} ${className}`}
    >
      {icon && <div>{icon}</div>}
      <div className="d-flex flex-column gap-2">
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
