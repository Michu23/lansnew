import React from "react";
import Image from "next/image";
import styles from "./CTA.module.css";

const profiles = [
  {
    name: "Hideena",
    role: "B2 student",
    image: "/assets/Testimonials/B2-Hideena.jpeg",
  },
  {
    name: "Jipes",
    role: "B2 student",
    image: "/assets/Testimonials/B2-Jipes.jpeg",
  },
  {
    name: "Swathi",
    role: "B2 student",
    image: "/assets/Testimonials/B2-Swathi.png",
  },
  {
    name: "Chithara",
    role: "B2 student",
    image: "/assets/Testimonials/B2-Chithara.jpeg",
  },
];

const ProfileCard = ({ profile }) => (
  <div className={styles.profileCard}>
    <div className={styles.profileCardInner}>
      <div className={styles.profileHeader}>
        <div className={styles.profileImageContainer}>
          <div className={styles.profileImage}>
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top 20%",
              }}
            />
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>{profile.name}</span>
            <div className={styles.profileRole}>
              <span className={styles.roleText}>{profile.role}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Function to repeat profiles for infinite scroll
const createInfiniteProfiles = (profiles, repetitions = 4) => {
  return Array(repetitions)
    .fill(profiles)
    .flat()
    .map((profile, index) => ({
      ...profile,
      id: `${profile.name}-${index}`, // Add unique id for key prop
    }));
};

export default function CTASection() {
  const infiniteProfiles = createInfiniteProfiles(profiles);

  return (
    <div className="w-100 d-flex justify-content-center">
      <div className={styles.ctaWrapper}>
        <div className={styles.ctaSection}>
          <div className={styles.heroImage}>
            <Image
              src="/images/cta-hero.jpg"
              alt="Healthcare professionals at work"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className={styles.backgroundVector}>
            <svg
              width="2040"
              height="2052"
              viewBox="0 0 2040 2052"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M865.564 129.463L949.611 249.826C966.998 274.727 991.517 293.778 1019.94 304.474V304.474C1104.18 336.172 1141.89 434.277 1100.57 514.239L1060.81 591.19C1055.24 601.972 1052.26 613.903 1052.1 626.037V626.037C1051.4 680.529 1105.31 718.97 1156.6 700.549L1205.08 683.136C1307.78 646.254 1398.52 761.004 1338.95 852.428L1173.85 1105.84C1143.13 1152.97 1167.22 1216.36 1221.49 1231.2V1231.2C1275.74 1246.04 1299.83 1309.4 1269.16 1356.54L1019.47 1740.17C959.448 1832.4 961.395 1951.82 1024.39 2042.03L1030.9 2051.35"
                stroke="url(#paint0_linear_1_2741)"
                strokeWidth="51"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_2741"
                  x1="1058.57"
                  y1="597.05"
                  x2="888.849"
                  y2="1949.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="#6372FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.textContent}>
              <div className={styles.headerGroup}>
                <span className={styles.mainHeading}>
                  Launch Your International Career With Lanstitut
                </span>
                <span className={styles.subHeading}>
                  Join Now & Get Matched Instantly
                </span>
              </div>
              <div className={styles.ctaButton}>
                <span className={styles.buttonText}>Join Lanstitut</span>
                <div className={styles.buttonIcon}>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.92893 12.4998H19.0711M19.0711 12.4998L12 5.42871M19.0711 12.4998L12 19.5708"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.profilesContainer}>
              <div className={styles.profilesGrid}>
                {/* Left Column - Moving Down */}
                <div className={`${styles.profileColumn} ${styles.left}`}>
                  <div className={styles.profileList}>
                    {infiniteProfiles.map((profile) => (
                      <ProfileCard
                        key={`left-${profile.id}`}
                        profile={profile}
                      />
                    ))}
                    {/* Repeat the first set for seamless loop */}
                    {profiles.map((profile, index) => (
                      <ProfileCard
                        key={`left-repeat-${profile.name}-${index}`}
                        profile={profile}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Column - Moving Up */}
                <div className={`${styles.profileColumn} ${styles.right}`}>
                  <div className={styles.profileList}>
                    {infiniteProfiles.reverse().map((profile) => (
                      <ProfileCard
                        key={`right-${profile.id}`}
                        profile={profile}
                      />
                    ))}
                    {/* Repeat the first set for seamless loop */}
                    {profiles.reverse().map((profile, index) => (
                      <ProfileCard
                        key={`right-repeat-${profile.name}-${index}`}
                        profile={profile}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
