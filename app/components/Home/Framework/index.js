import React from "react";
import styles from "./Framework.module.css";

export default function FrameworkSection() {
  return (
    <div className="w-100 d-flex justify-content-center">
      <div className={styles.frameworkContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <div className={styles.headerSection}>
              <div className={styles.badgeContainer}>
                <span className={styles.badgeText}>Our Learning Framework</span>
              </div>
              <div className={styles.titleContainer}>
                <span className={styles.mainTitle}>
                  Simple, Structured & Effective
                </span>
                <span className={styles.mainDescription}>
                  Master German from A1 to B2 with a structured curriculum that
                  builds a strong foundation in speaking, reading, writing, and
                  listening. Engage in live sessions, group discussions, and
                  role-plays, with personalized feedback to match your learning
                  style.
                </span>
              </div>
            </div>
            <div className={styles.ctaButton}>
              <span className={styles.ctaButtonText}>Learn More</span>
              <div className={styles.ctaButtonIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.92893 12H19.0711M19.0711 12L12 4.92896M19.0711 12L12 19.0711"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.featuresContainer}>
            <div className={styles.timelineLine}></div>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>
                <span className={styles.featureNumberText}>01</span>
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureTitle}>
                  <span className={styles.featureTitleText}>
                    15-Minute Capsules
                  </span>
                </div>
                <span className={styles.featureDescription}>
                  Bite sized, focused learning sessions designed to fit into
                  your busy schedule, making continuous learning manageable and
                  effective.
                </span>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>
                <span className={styles.featureNumberText}>02</span>
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureTitle}>
                  <span className={styles.featureTitleText}>CECR Method</span>
                </div>
                <span className={styles.featureDescription}>
                  The Common European Framework of Reference for Languages is a
                  guideline for describing the achievements of foreign language
                  learners across Europe and beyond
                </span>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>
                <span className={styles.featureNumberText}>03</span>
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureTitle}>
                  <span className={styles.featureTitleText}>
                    Vernacular Classes
                  </span>
                </div>
                <span className={styles.featureDescription}>
                  Engaging classes conducted proactively in your native
                  language, ensuring clarity and comfort in understanding, while
                  promoting active participation and effective learning.
                </span>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>
                <span className={styles.featureNumberText}>04</span>
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureTitle}>
                  <span className={styles.featureTitleText}>
                    Knowledge Checks & Progress Tracking
                  </span>
                </div>
                <span className={styles.featureDescription}>
                  Regular quizzes to test your knowledge, reinforce learning,
                  and provide instant feedback, helping you track your progress
                  and stay motivated.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
