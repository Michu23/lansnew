"use client";
import React from "react";
import styles from "./Testimonials.module.css";
import Icon from "../../../../public/assets/BlackLogo.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Selin Sam",
    location: "A2 completed student",
    quote:
      "The class was very good, the teacher also understood, if there was any question, she would tell everyone. I am very happy to attend the class.",
    image: "/assets/Testimonials/Selin.jpeg",
    isDark: false,
  },
  {
    name: "Ajay kumar U",
    location: "A1 student",
    quote:
      "I am learning Deutsch A1 classes since one month our tutor #msAngel she's very good in teaching and clearing doubts of language thank you #lanstitut",
    image: "/assets/Testimonials/Ajay.jpeg",
    isDark: true,
  },
  {
    name: "Arshad Ali",
    location: "Lanstitut student",
    quote:
      "I totally love the institution, the way teachers will understand each and every minute things is awesome and I'm really happy to be part of this institution I really look forward to utilise much more.",
    image: "/assets/Testimonials/Arshad.jpeg",
    isDark: false,
  },
  {
    name: "Dekshitha p Kuruba",
    location: "Lanstitut student",
    quote:
      "The classes are really good and very interesting too, and engaging also , and our teacher Ms Angel is really good she concentrate on each student's and Always clarify our doubts very easily  and she is very supportive too.",
    image: "/assets/Testimonials/Dekshitha.jpeg",
    isDark: true,
  },
  {
    name: "Reema",
    location: "Lanstitut student",
    quote:
      "The classes are really good and very interesting too, and engaging also , and our teacher Ms Angel is really good she concentrate on each student's and Always clarify our doubts very easily  and she is very supportive too.",
    image: "/assets/Testimonials/Reema.jpeg",
    isDark: true,
  },
  {
    name: "Chithara Chandaran",
    location: "B2 completed student",
    quote:
      "It was a great experience for me to learn german in Lanstitut. I liked the way of teaching very easy to understand and also the friendly atmosphere .I am glad that i joined this coaching got to know many things and also enjoyed the classes.",
    image: "/assets/Testimonials/B2-Chithara.jpeg",
    isDark: true,
  },
];
const Testimonials = () => {
  return (
    <div className={styles.testimonialsSection}>
      <div className={styles.backgroundImage} />
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <h2 className={styles.mainTitle}>What Success Sounds Like</h2>
          <p className={styles.subtitle}>
            Professionals share how structured support turned their global
            dreams into dependable careers.
          </p>
        </div>
      </div>
      <div className={styles.testimonialsGrid}>
        <div className={styles.testimonialTrack}>
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
