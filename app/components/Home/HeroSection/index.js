import React from "react";
import styles from "./styles.module.css";
import BackgroundElements from "./BackgroundElements";
import ContentSection from "./ContentSection";
import FeatureCard from "./FeatureCard";
import { LanguageIcon, VisaIcon, GlobeIcon } from "./Icons";

const HeroSection = () => {
  return (
    <section
      className={`position-relative overflow-hidden rounded-5 ${styles.heroSection}`}
    >
      <BackgroundElements />
      <ContentSection />

      <FeatureCard
        className={`position-absolute start-130 top-441 ${styles.firstFeatureCard}`}
        title="Global Job Opportunities"
        description="Access jobs in top healthcare destinations."
        icon={<GlobeIcon />}
      />

      <FeatureCard
        className={`position-absolute start-872 top-516 ${styles.secondFeatureCard}`}
        title="Language & Certification Support"
        description="Meet employer & visa language requirements."
        icon={<LanguageIcon />}
      />

      <FeatureCard
        className={`position-absolute start-130 top-441 ${styles.thirdFeatureCard}`}
        title="Visa Support"
        description="Assistance with visa application process."
        icon={<VisaIcon />}
      />

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/97cd5a1ca556c29344cb9c56f96d0c24c206d566"
        alt="Healthcare professional"
        className={`position-absolute ${styles.doctorImage}`}
      />
    </section>
  );
};

export default HeroSection;
