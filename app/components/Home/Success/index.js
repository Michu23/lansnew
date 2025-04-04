"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, m } from "framer-motion";
import styles from "./Success.module.css";

const Success = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const metrics = [
    {
      number: "60K",
      label: "Success Stories",
      bg: "#FEFAF0",
      color: "#634818",
      gap: "80px",
    },
    {
      number: "100K",
      label: "Happy Students",
      bg: "#F8F9FF",
      color: "#102643",
      gap: "60px",
    },
    {
      number: "100%",
      label: "Satisfaction Rate",
      bg: "#F8F9FF",
      color: "#102643",
      gap: "60px",
    },
    {
      number: "95%",
      label: "Job Placement Success",
      bg: "#FEFAF0",
      color: "#634818",
      gap: "80px",
    },
  ];

  return (
    <section className={styles.success} ref={ref}>
      <div
        className="container"
        style={{
          width: "98vw",
        }}
      >
        <div className="row w-100">
          <div className="col-12 col-md-6">
            <motion.div
              className={styles.header}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <h2 className="text-start">
                Proven Success: Our Impact in Numbers
              </h2>
              <p>
                Empowering learners with structured training, real-world skills,
                and career-ready certifications.
              </p>
            </motion.div>
          </div>

          <div className="col-12 col-md-6">
            {/* <div className="row">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="col-5 p-3 m-1"
                  style={{
                    backgroundColor: metric.bg,
                    color: metric.color,
                    width: "309px",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: 0.2 * index },
                    },
                  }}
                >
                  <h3>{metric.number}</h3>
                  <p>{metric.label}</p>
                </motion.div>
              ))}
            </div> */}

            <div className="d-flex gap-2">
              <div className={styles.metricCard}>
                {metrics?.slice(0, 2).map((metric, index) => (
                  <motion.div
                    key={index}
                    className={styles.metricCard}
                    style={{
                      backgroundColor: metric.bg,
                      color: metric.color,
                      width: "309px",
                      gap: metric.gap,
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    variants={{
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, delay: 0.2 * index },
                      },
                    }}
                  >
                    <h3>{metric.number}</h3>
                    <p>{metric.label}</p>
                  </motion.div>
                ))}
              </div>
              <div className={styles.metricCard}>
                {metrics.slice(2, 4).map((metric, index) => (
                  <motion.div
                    key={index}
                    className={styles.metricCard}
                    style={{
                      backgroundColor: metric.bg,
                      color: metric.color,
                      width: "309px",
                      gap: metric.gap,
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    variants={{
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, delay: 0.2 * index },
                      },
                    }}
                  >
                    <h3>{metric.number}</h3>
                    <p>{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
