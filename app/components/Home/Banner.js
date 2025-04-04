import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css";
import heroImage from "@/public/assets/Home/Hero.svg";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerBackground}></div>
      <div className={styles.bannerImage}>
        <Image
          src="/assets/Home/Banner/banner-bg.jpg"
          alt="Healthcare professionals working together"
          fill
          priority
          className={styles.image}
        />
      </div>
      <div className={styles.bannerGlow}></div>
      <div className={styles.bannerWave}>
        <svg
          width="3156"
          height="2345"
          viewBox="0 0 3156 2345"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72.9335 902.977L376.669 1030.72C400.269 1040.64 422.337 1053.87 442.211 1070.01L575.957 1178.63C655.097 1242.91 763.693 1257.12 856.709 1215.38L920.125 1186.92C951.061 1173.04 984.895 1166.85 1018.74 1168.86V1168.86C1107.13 1174.13 1182.76 1234.19 1207.91 1319.09L1218.66 1355.37C1269.14 1525.82 1470.14 1598.81 1618.24 1500.47L1767.26 1401.52C1860.99 1339.28 1984.99 1348.47 2068.51 1423.85V1423.85C2151.99 1499.18 2275.87 1508.42 2369.59 1446.3L2695.57 1230.25C2770.87 1180.34 2866.14 1171.4 2949.41 1206.42L3155.42 1293.06"
            stroke="url(#paint0_linear_1_3224)"
            strokeWidth="51"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_3224"
              x1="546.663"
              y1="667.68"
              x2="2840.93"
              y2="1790.99"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#145497" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <div className={styles.headingContainer}>
            <div className={styles.headingLine}>
              <span className={styles.headingText}>Work, Grow, and Thrive</span>
            </div>
            <div className={styles.headingLine}>
              <span className={styles.headingText}>in Global Healthcare</span>
            </div>
          </div>
          <span className={styles.subheadingText}>
            The world needs healthcare professionals, and you have the skills.
          </span>
        </div>
        <button className={styles.ctaButton}>
          <span className={styles.buttonText}>Get Started</span>
          <div className={styles.buttonIcon}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.42893 12H19.5711M19.5711 12L12.5 4.92892M19.5711 12L12.5 19.0711"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className={styles.featureCard}>
        <div className={styles.featureContent}>
          <span className={styles.featureTitle}>Global Job Opportunities</span>
          <span className={styles.featureDescription}>
            Access jobs in top healthcare destinations.
          </span>
        </div>
      </div>
      <div className={styles.featureCard}>
        <div className={styles.featureContent}>
          <span className={styles.featureTitle}>
            Language & Certification Support
          </span>
          <span className={styles.featureDescription}>
            Meet employer & visa language requirements.
          </span>
        </div>
      </div>
      <div className={styles.heroImage}>
        <Image
          src={heroImage}
          alt="Healthcare professional"
          fill
          priority
          className={styles.image}
        />
      </div>
    </div>
  );
}
