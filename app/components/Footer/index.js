"use client";
import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.topSection}>
        <div className={styles.brandColumn}>
          <div className={styles.logoContainer}>
            <div className={styles.logo} role="img" aria-label="Company logo" />
          </div>
          <div className={styles.brandInfo}>
            <div className={styles.divider} />
            <div className={styles.brandDescription}>
              <h2 className={styles.brandTitle}>
                Bridging Dreams to Global Healthcare Careers
              </h2>
              <p className={styles.brandTagline}>
                Connecting skilled healthcare professionals with international
                job opportunities through AI-powered matching, language
                training, and visa support.
              </p>
            </div>
          </div>
        </div>
        <nav className={styles.navigation}>
          <div className={styles.navSection}>
            <h3 className={styles.navTitle}>Company</h3>
            <ul className={styles.navList}>
              <li>
                <a href="/about" className={styles.navLink}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/guides" className={styles.navLink}>
                  Career Guides
                </a>
              </li>
              <li>
                <a href="/licensing" className={styles.navLink}>
                  Licensing & Certification
                </a>
              </li>
              <li>
                <a href="/backers" className={styles.navLink}>
                  Backers
                </a>
              </li>
              <li>
                <a href="/faqs" className={styles.navLink}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="/support" className={styles.navLink}>
                  Support
                </a>
              </li>
              <li>
                <a href="/contact" className={styles.navLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.navSection}>
            <h3 className={styles.navTitle}>For Recruiters</h3>
            <ul className={styles.navList}>
              <li>
                <a href="/hire" className={styles.navLink}>
                  Hire Healthcare Professionals
                </a>
              </li>
              <li>
                <a href="/why-recruit" className={styles.navLink}>
                  Why Recruit with Lanstitut?
                </a>
              </li>
              <li>
                <a href="/employer-dashboard" className={styles.navLink}>
                  Employer Dashboard
                </a>
              </li>
              <li>
                <a href="/verification" className={styles.navLink}>
                  Language & Skill Verification
                </a>
              </li>
              <li>
                <a href="/partner" className={styles.navLink}>
                  Partner with Us
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.navSection}>
            <h3 className={styles.navTitle}>For Candidates</h3>
            <ul className={styles.navList}>
              <li>
                <a href="/jobs" className={styles.navLink}>
                  Find Jobs
                </a>
              </li>
              <li>
                <a href="/how-it-works" className={styles.navLink}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="/language-training" className={styles.navLink}>
                  Language Training
                </a>
              </li>
              <li>
                <a href="/visa-assistance" className={styles.navLink}>
                  Visa & Relocation Assistance
                </a>
              </li>
              <li>
                <a href="/candidate-dashboard" className={styles.navLink}>
                  Candidate Dashboard
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.socialLinks}>
          {[
            {
              name: "Facebook",
              href: "https://facebook.com",
              icon: "facebook-icon-svg",
            },
            {
              name: "WhatsApp",
              href: "https://whatsapp.com",
              icon: "whatsapp-icon-svg",
            },
            {
              name: "Instagram",
              href: "https://instagram.com",
              icon: "instagram-icon-svg",
            },
            {
              name: "YouTube",
              href: "https://youtube.com",
              icon: "youtube-icon-svg",
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${social.name} page`}
            >
              {/* SVG icons remain unchanged */}
            </a>
          ))}
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.legalLinks}>
            <span className={styles.copyright}>
              © {new Date().getFullYear()} Lanstitut — Copyright
            </span>
            <a href="/terms" className={styles.termsLink}>
              Terms & Conditions
            </a>
            <a href="/privacy" className={styles.privacyLink}>
              Privacy Policy
            </a>
          </div>
          <button
            style={{
              backgroundColor: "#001220",
              outline: "none",
              border: "none",
            }}
            onClick={scrollToTop}
            className={styles.scrollToTop}
            aria-label="Scroll to top of page"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle opacity="0.2" cx="30" cy="30" r="29.5" stroke="white" />
              <path
                d="M30 37L30 22M30 22L26 26M30 22L34 26"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.backgroundDecoration} aria-hidden="true">
        <svg
          width="1440"
          height="213"
          viewBox="0 0 1440 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0342 4.58065V186.661H126.465V208.419H0V4.58065H24.0342Z"
            fill="url(#paint0_linear_1_2980)"
          />
          <path
            d="M324.341 208.419H298.876L275.128 149.157H182.424L158.963 208.419H133.784L215.042 4.58065H241.938L324.341 208.419ZM191.866 125.109L191.008 127.399H266.544L265.4 124.823C260.631 113.18 248.232 81.7836 228.204 30.6331C214.661 66.8965 202.548 98.3884 191.866 125.109Z"
            fill="url(#paint1_linear_1_2980)"
          />
          <path
            d="M479.921 73.2903V4.58065H503.669V208.419H474.485L406.96 103.351C387.504 72.4314 373.389 49.4328 364.614 34.3548C365.186 61.0753 365.473 96.1936 365.473 139.71V208.419H341.725V4.58065H370.909L438.433 109.649C457.89 140.569 472.005 163.567 480.779 178.645C480.207 151.925 479.921 116.806 479.921 73.2903Z"
            fill="url(#paint2_linear_1_2980)"
          />
          <path
            d="M615.625 213C589.111 213 568.415 206.988 553.537 194.964C538.659 182.94 531.124 164.999 530.933 141.141H555.826C556.398 174.542 576.331 191.242 615.625 191.242C632.22 191.242 644.905 187.997 653.679 181.508C662.644 175.019 667.127 165.571 667.127 153.165C667.127 143.431 663.407 135.892 655.968 130.548C648.72 125.013 635.94 120.242 617.628 116.234L599.602 112.226C579.002 107.454 563.551 100.583 553.251 91.6129C542.95 82.4516 537.8 69.664 537.8 53.25C537.8 37.0269 544.095 24.1438 556.684 14.6008C569.273 4.86694 586.155 0 607.328 0C621.634 0 634.032 1.71774 644.523 5.15323C655.205 8.58871 663.503 13.4556 669.416 19.754C675.329 25.8616 679.621 32.5417 682.291 39.7943C685.152 47.047 686.678 55.0632 686.869 63.8428H662.263C661.118 49.3374 656.35 38.7446 647.957 32.0645C639.755 25.1936 626.211 21.7581 607.328 21.7581C593.021 21.7581 581.958 24.5255 574.138 30.0605C566.508 35.5954 562.693 43.3253 562.693 53.25C562.693 63.1747 566.031 70.9046 572.707 76.4395C579.192 81.9745 591.782 86.8414 610.475 91.0403L628.5 95.0484C651.009 100.011 667.222 107.168 677.141 116.52C687.06 125.681 692.019 137.897 692.019 153.165C692.019 171.679 685.248 186.28 671.705 196.968C658.162 207.656 639.469 213 615.625 213Z"
            fill="url(#paint3_linear_1_2980)"
          />
          <path
            d="M690.692 4.58065H854.067V26.3387H784.825V208.419H759.933V26.3387H690.692V4.58065Z"
            fill="url(#paint4_linear_1_2980)"
          />
          <path
            d="M899.721 208.419H875.687V4.58065H899.721V208.419Z"
            fill="url(#paint5_linear_1_2980)"
          />
          <path
            d="M921.209 4.58065H1084.58V26.3387H1015.34V208.419H990.45V26.3387H921.209V4.58065Z"
            fill="url(#paint6_linear_1_2980)"
          />
          <path
            d="M1260.78 132.839C1260.78 158.223 1253.81 177.882 1239.89 191.815C1225.96 205.747 1206.22 212.714 1180.66 212.714C1155.1 212.714 1135.36 205.747 1121.44 191.815C1107.51 177.882 1100.55 158.223 1100.55 132.839V4.58065H1124.58V132.839C1124.58 171.583 1143.28 190.956 1180.66 190.956C1218.05 190.956 1236.74 171.583 1236.74 132.839V4.58065H1260.78V132.839Z"
            fill="url(#paint7_linear_1_2980)"
          />
          <path
            d="M1276.62 4.58065H1440V26.3387H1370.76V208.419H1345.87V26.3387H1276.62V4.58065Z"
            fill="url(#paint8_linear_1_2980)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2980"
              x1="720"
              y1="466.5"
              x2="720"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#070D30" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_2980"
              x1="720"
              y1="466.5"
              x2="720"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#070D30" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_2980"
              x1="720"
              y1="466.5"
              x2="720"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#070D30" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1_2980"
              x1="720"
              y1="466.5"
              x2="720"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#070D30" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_1_2980"
              x1="720"
              y1="466.5"
              x2="720"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#070D30" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_1_2980"
              x1="720"
              y1="466.5"
              x2="720"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#070D30" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_1_2980"
              x1="720"
              y1="466.5"
              x2="720"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#070D30" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_1_2980"
              x1="720"
              y1="466.5"
              x2="720"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#070D30" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_1_2980"
              x1="720"
              y1="466.5"
              x2="720"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#070D30" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
}
