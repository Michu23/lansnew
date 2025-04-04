import React from "react";
import styles from "./styles.module.css";
import BackgroundElements from "./BackgroundElements";
import ContentSection from "./ContentSection";
import FeatureCard from "./FeatureCard";
import { LanguageIcon, VisaIcon, GlobeIcon } from "./Icons";
import Image from "next/image";
import Grid from "./Grid.svg";

const HeroSection = () => {
  return (
    <div className="w-100 d-flex justify-content-center">
      <section
        className={`position-relative maincontainer overflow-hidden rounded-5 ${styles.heroSection}`}
      >
        <BackgroundElements />
        <div className="w-100 d-flex justify-content-center">
          <ContentSection />
        </div>
        {/* <div className="d-flex justify-content-center w-100 h-100">
          <Image src={Grid} alt="Doctor" width="100%" height="100%" />
        </div> */}

        <FeatureCard
          className={styles.firstFeatureCard}
          title="Global Job Opportunities"
          description="Access jobs in top healthcare destinations."
          icon={<GlobeIcon />}
        />

        <FeatureCard
          className={styles.secondFeatureCard}
          title="Language & Certification Support"
          description="Meet employer & visa language requirements."
          icon={<LanguageIcon />}
        />

        <FeatureCard
          className={styles.thirdFeatureCard}
          title="Visa Support"
          description="Assistance with visa application process."
          icon={<VisaIcon />}
        />
        <div className="w-100 d-flex justify-content-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/97cd5a1ca556c29344cb9c56f96d0c24c206d566"
            alt="Healthcare professional"
            className={`position-absolute ${styles.doctorImage}`}
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
