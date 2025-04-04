"use client";
import React from "react";
import styles from "./Testimonials.module.css";
import Icon from "../../../../public/assets/White.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Amelie",
    location: "Working in Germany",
    quote:
      "Lanstitut helped me pass my TELC B1 exam and get hired in Berlin. The support was incredible!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    isDark: false,
  },
  {
    name: "David",
    location: "Working in Germany",
    quote:
      "The medical language training was exactly what I needed. Now I work in my dream hospital in Munich!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    isDark: true,
  },
  {
    name: "Sarah",
    location: "Working in Austria",
    quote:
      "From struggling with German to confidently treating patients - Lanstitut made it possible!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    isDark: false,
  },
  {
    name: "Michael",
    location: "Working in Switzerland",
    quote:
      "The interview preparation was fantastic. I got multiple job offers thanks to Lanstitut!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    isDark: true,
  },
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialsSection}>
      <div className={styles.backgroundImage} />
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <h2 className={styles.mainTitle}>
            3L+ Healthcare Professionals Have
            <br />
            Transformed Their Careers With Lanstitut
          </h2>
          <p className={styles.subtitle}>
            Real Professionals, Real Success Stories - See How Lanstitut Helped
            Thousands Secure Their Dream Jobs Abroad
          </p>
        </div>
      </div>
      <div className={styles.testimonialsGrid}>
        <div className={styles.testimonialTrack}>
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <div key={`first-${index}`} className={styles.testimonialCard}>
              <div
                className={
                  testimonial.isDark
                    ? styles.testimonialCardDark
                    : styles.testimonialCardContent
                }
                style={{ backgroundImage: `url(${testimonial.image})` }}
              >
                <div className={styles.testimonialCardInner}>
                  <div className={styles.testimonialQuoteContainer}>
                    <div className={styles.quoteIconContainer}>
                      <Image src={Icon} alt="Quote Icon" />
                      <div
                        className={
                          testimonial.isDark
                            ? styles.quoteIconOverlayLight
                            : styles.quoteIconOverlay
                        }
                      />
                    </div>
                    <div className={styles.testimonialText}>
                      <p
                        className={
                          testimonial.isDark
                            ? styles.testimonialQuoteLight
                            : styles.testimonialQuote
                        }
                      >
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <span
                      className={
                        testimonial.isDark
                          ? styles.authorNameLight
                          : styles.authorName
                      }
                    >
                      {testimonial.name}
                    </span>
                    <span
                      className={
                        testimonial.isDark
                          ? styles.authorLocationLight
                          : styles.authorLocation
                      }
                    >
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <div key={`second-${index}`} className={styles.testimonialCard}>
              <div
                className={
                  testimonial.isDark
                    ? styles.testimonialCardDark
                    : styles.testimonialCardContent
                }
                style={{ backgroundImage: `url(${testimonial.image})` }}
              >
                <div className={styles.testimonialCardInner}>
                  <div className={styles.testimonialQuoteContainer}>
                    <div className={styles.quoteIconContainer}>
                      <Image src={Icon} alt="Quote Icon" />
                      <div
                        className={
                          testimonial.isDark
                            ? styles.quoteIconOverlayLight
                            : styles.quoteIconOverlay
                        }
                      />
                    </div>
                    <div className={styles.testimonialText}>
                      <p
                        className={
                          testimonial.isDark
                            ? styles.testimonialQuoteLight
                            : styles.testimonialQuote
                        }
                      >
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <span
                      className={
                        testimonial.isDark
                          ? styles.authorNameLight
                          : styles.authorName
                      }
                    >
                      {testimonial.name}
                    </span>
                    <span
                      className={
                        testimonial.isDark
                          ? styles.authorLocationLight
                          : styles.authorLocation
                      }
                    >
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
