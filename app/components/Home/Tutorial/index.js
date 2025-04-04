import React from "react";
import styles from "./Tutorial.module.css";

export default function Tutorial() {
  console.log("Tutorial");
  return (
    <div className="w-100 d-flex justify-content-center">
      <div className={styles.tutorialContainer}>
        <div className={styles.videoTutorialTitle}>
          <span className={styles.learnGermanTitle}>
            Learn German with Our
            <br />
            Free Video Tutorials
          </span>
          <span className={styles.courseDescription}>
            Master German with our expert-led crash course! Learn at your own
            pace with structured lessons designed for beginners and advanced
            learners alike.
          </span>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className={styles.blogPostCard}>
              <div className={styles.imageContainer}>
                <div className={styles.frameContainer}>
                  <svg
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="86"
                      height="86"
                      rx="43"
                      fill="black"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M57.9146 45.6624L33.291 59.7721C31.2013 60.9683 28.5195 59.5199 28.5195 57.1084V28.8891C28.5195 26.4814 31.1974 25.0292 33.291 26.2292L57.9146 40.3388C58.39 40.6068 58.7851 40.9942 59.0599 41.4617C59.3348 41.9291 59.4795 42.4601 59.4795 43.0006C59.4795 43.5412 59.3348 44.0721 59.0599 44.5396C58.7851 45.0071 58.39 45.3944 57.9146 45.6624Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.contentSection}>
                <div className={styles.headingAndSubheading}>
                  <div className={styles.headingAndText}>
                    <div className={styles.headingAndIcon}>
                      <span className={styles.headingText}>
                        Free German Crash Course | Part 9
                      </span>
                      <div className={styles.iconWrapper}>
                        <div className={styles.arrowIcon}>
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.66666 17L17.6667 7M17.6667 7H7.66666M17.6667 7V17"
                              stroke="#101828"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span className={styles.supportingText}>
                      How do you create compelling presentations that wow your
                      colleagues and impress your managers?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className={styles.blogPostCard}>
              <div className={styles.imageContainer}></div>
              <div className={styles.contentSection}>
                <div className={styles.headingAndSubheading}>
                  <div className={styles.headingAndText}>
                    <div className={styles.headingAndIcon}>
                      <span className={styles.headingText}>
                        Free German Crash Course | Part 8
                      </span>
                      <div className={styles.iconWrapper}>
                        <div className={styles.arrowIcon}>
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.33337 17L17.3334 7M17.3334 7H7.33337M17.3334 7V17"
                              stroke="#101828"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span className={styles.supportingText}>
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking. Here's how to get started.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className={styles.blogPostCard}>
              <div className={styles.imageContainer}></div>
              <div className={styles.contentSection}>
                <div className={styles.headingAndSubheading}>
                  <div className={styles.headingAndText}>
                    <div className={styles.headingAndIcon}>
                      <span className={styles.headingText}>
                        Free German Crash Course | Part 7
                      </span>
                      <div className={styles.iconWrapper}>
                        <div className={styles.arrowIcon}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="#101828"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span className={styles.supportingText}>
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and managing them.
                    </span>
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
