"use client";
import React, { useState } from "react";
import styles from "./Tutorial.module.css";

export default function Tutorial() {
  const [videos] = useState([
    {
      id: 1,
      title: "First thing to do before migrating to Germany",
      description:
        "First thing to do before migrating to Germany. Best way to get a job in Germany.",
      youtubeId: "70dB4H6tZuY", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/70dB4H6tZuY/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Score GUARANTEED! The Ultimate GOETHE Masterclass",
      description:
        "How to score 100% in Goethe-Zertifikat B1 exam. Best way to get a job in Germany.",
      youtubeId: "-bnEpZKp8aU", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/-bnEpZKp8aU/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "Student Awards for our German A1 Offline Batch!",
      description:
        "Student Awards for our German A1 Offline Batch! Best way to get a job in Germany.",
      youtubeId: "sEnsspfJYZM", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/sEnsspfJYZM/maxresdefault.jpg",
    },
    {
      id: 4,
      title: "Learn German for Free | Malayalam Tutorial",
      description:
        "Start learning German for free with our Malayalam tutorial. Best way to get a job in Germany.",
      youtubeId: "_a0lLkXH9ak", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/_a0lLkXH9ak/maxresdefault.jpg",
    },
  ]);

  return (
    <div className="w-100 d-flex justify-content-center">
      <div className={styles.tutorialContainer}>
        <div className={styles.videoTutorialTitle}>
          <span className={styles.learnGermanTitle}>
            Fluent Steps Toward Your International Role
          </span>
          <span className={styles.courseDescription}>
            Get free expert-led tutorials that make learning German simple,
            practical and fit for your global career Available anytime at your
            pace.
          </span>
        </div>
        <div
          className="d-flex gap-4"
          style={{
            overflow: "scroll",
          }}
        >
          {videos.map((video) => (
            <div key={video.id} className="col-12 col-md-4 mb-4">
              <div className={styles.blogPostCard}>
                <div className={styles.imageContainer}>
                  <div className={styles.frameContainer}>
                    <iframe
                      width="100%"
                      height="300"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      style={{
                        height: "300px",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "10px",
                        border: "none",
                        margin: "0",
                        padding: "0",
                      }}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className={styles.contentSection}>
                  <div className={styles.headingAndSubheading}>
                    <div className={styles.headingAndText}>
                      <div className={styles.headingAndIcon}>
                        <span className={styles.headingText}>
                          {video.title}
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
                        {video.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
