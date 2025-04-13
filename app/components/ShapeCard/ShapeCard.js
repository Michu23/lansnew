import React, { forwardRef } from "react";
import styles from "./Shape.module.css";

const ShapeCard = forwardRef(
  (
    { title, description, icon, buttonText = "Learn More", onButtonClick },
    ref
  ) => {
    return (
      <div ref={ref} className={styles.Frame_1686552174_1_5833}>
        <div className={styles.Frame_1686552172_1_5834}>
          <div className={styles.Frame_1686552134_1_5835}>
            <span className={styles.GetPlacedAbroadWithConfidence_1_5836}>
              {title}
            </span>
            <span
              className={
                styles.EnhanceYourCareerWithExpertLedLanguageTrainingGloballyRecognizedCertificationsAndSeamlessJobPlacementSupport_1_5837
              }
            >
              {description}
            </span>
          </div>
          <div className={styles.Frame_1686552178_1_5838}>
            <div className={styles.Frame_1686552175_1_5839}>
              <div className={styles.Frame_1686552047_1_5840}>
                <div className={styles.Frame_1_5841}>{icon}</div>
              </div>
              <div className={styles.Frame_1686552179_1_5843}>
                <span className={styles.GlobalHealthcareJobPlacement_1_5844}>
                  {title}
                </span>
                <span
                  className={
                    styles.SecureYourCareerInGermanyWithOurDedicatedJobPlacementServicesConnectingYouWithTopHealthcareInstitutionsCorporateFirmsAndMore_1_5845
                  }
                >
                  {description}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.Button_1_5860} onClick={onButtonClick}>
            <span className={styles.LearnMore_1_5861}>{buttonText}</span>
            <div className={styles.ArrowUpRight_1_5862}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.92893 12.0008H19.0711M19.0711 12.0008L12 4.92969M19.0711 12.0008L12 19.0718"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.Image_1_5864}></div>
      </div>
    );
  }
);

ShapeCard.displayName = "ShapeCard";

export default ShapeCard;
