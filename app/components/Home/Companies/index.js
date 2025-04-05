import React from "react";
import styles from "./Companies.module.css";
import Image from "next/image";

const Companies = () => {
  const flags = [
    { country: "Germany", code: "de" },
    { country: "Italy", code: "it" },
    { country: "United States", code: "us" },
    { country: "Japan", code: "jp" },
    { country: "Saudi Arabia", code: "sa" },
    { country: "United Arab Emirates", code: "ae" },
    { country: "Finland", code: "fi" },
    { country: "Kuwait", code: "kw" },
    { country: "Austria", code: "at" },
    { country: "Australia", code: "au" },
  ];

  return (
    <div className={styles.companiesSection}>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>Our Global Reach</h2>
        <p className={styles.subtitle}>
          Connecting healthcare professionals with opportunities worldwide
        </p>

        <div className={styles.flagsContainer}>
          <div className={styles.marqueeRow}>
            {[...flags, ...flags].map((flag, index) => (
              <div key={`row1-${index}`} className={styles.flagItem}>
                <Image
                  src={`https://flagcdn.com/w80/${flag.code}.png`}
                  alt={`${flag.country} flag`}
                  width={60}
                  height={40}
                  className={styles.flagImage}
                />
                {/* <span className={styles.countryName}>{flag.country}</span> */}
              </div>
            ))}
            {[...flags, ...flags].map((flag, index) => (
              <div key={`row1-${index}`} className={styles.flagItem}>
                <Image
                  src={`https://flagcdn.com/w80/${flag.code}.png`}
                  alt={`${flag.country} flag`}
                  width={60}
                  height={40}
                  className={styles.flagImage}
                />
                {/* <span className={styles.countryName}>{flag.country}</span> */}
              </div>
            ))}
          </div>

          <div className={styles.marqueeRowReverse}>
            {[...flags, ...flags].map((flag, index) => (
              <div key={`row2-${index}`} className={styles.flagItem}>
                <Image
                  src={`https://flagcdn.com/w80/${flag.code}.png`}
                  alt={`${flag.country} flag`}
                  width={60}
                  height={40}
                  className={styles.flagImage}
                />
                {/* <span className={styles.countryName}>{flag.country}</span> */}
              </div>
            ))}
            {[...flags, ...flags].map((flag, index) => (
              <div key={`row2-${index}`} className={styles.flagItem}>
                <Image
                  src={`https://flagcdn.com/w80/${flag.code}.png`}
                  alt={`${flag.country} flag`}
                  width={60}
                  height={40}
                  className={styles.flagImage}
                />
                {/* <span className={styles.countryName}>{flag.country}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
