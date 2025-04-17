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
                <span className={styles.mainTitle}>The Lanstitut Pathway</span>
                <span className={styles.mainDescription}>
                  A structured process designed to build global
                  readiness—through foundational learning, interview-focused
                  training, cultural orientation, on-ground recognition, and
                  continuous career development. Each stage moves professionals
                  closer to success in international healthcare systems.
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
                    Foundational Support
                  </span>
                </div>
                <span className={styles.featureDescription}>
                  Tutoring and mentoring in A1–A2 to build your base.
                </span>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>
                <span className={styles.featureNumberText}>02</span>
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureTitle}>
                  <span className={styles.featureTitleText}>
                    Career-Focused Training
                  </span>
                </div>
                <span className={styles.featureDescription}>
                  Interview readiness built into your B1 level
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
                    Cultural Immersion
                  </span>
                </div>
                <span className={styles.featureDescription}>
                  Learn how to live and work confidently during B2.
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
                    On-Ground Recognition
                  </span>
                </div>
                <span className={styles.featureDescription}>
                  Smooth qualification recognition after landing.
                </span>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>
                <span className={styles.featureNumberText}>05</span>
              </div>
              <div className={styles.featureContent}>
                <div className={styles.featureTitle}>
                  <span className={styles.featureTitleText}>
                    Upskilling Beyond Borders
                  </span>
                </div>
                <span className={styles.featureDescription}>
                  Ongoing learning for long-term career success.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
