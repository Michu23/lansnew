import React from "react";
import styles from "./styles.module.css";

const BackgroundElements = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <div className="position-absolute w-100 h-100"></div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cfccf3444021a4f2c7054977eb731e928f6fc04"
        alt="Background overlay"
        className={`position-absolute w-100 h-100 ${styles.overlay}`}
      />
      <div className={styles.blueCircle}>
        <svg
          width="788"
          height="858"
          viewBox="0 0 788 858"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1_3217)">
            <ellipse
              cx="749.5"
              cy="255.5"
              rx="279.5"
              ry="345.5"
              transform="rotate(90 749.5 255.5)"
              fill="#1960AB"
            ></ellipse>
          </g>
          <defs>
            <filter
              id="filter0_f_1_3217"
              x="0"
              y="-428"
              width="1499"
              height="1367"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="202"
                result="effect1_foregroundBlur_1_3217"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
      <div className={styles.waveLine}>
        <svg
          width="1320"
          height="670"
          viewBox="0 0 1320 670"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-888.067 1.97653L-584.331 129.716C-560.731 139.641 -538.663 152.873 -518.789 169.013L-385.043 277.633C-305.903 341.905 -197.307 356.119 -104.291 314.38L-40.8752 285.924C-9.93884 272.042 23.8952 265.845 57.7434 267.861V267.861C146.135 273.127 221.763 333.188 246.91 418.09L257.655 454.367C308.143 624.822 509.145 697.814 657.243 599.472L806.258 500.52C899.99 438.279 1023.99 447.471 1107.51 522.852V522.852C1190.99 598.18 1314.87 607.418 1408.59 545.303L1734.57 329.249C1809.87 279.343 1905.14 270.4 1988.41 305.42L2194.42 392.063"
            stroke="url(#paint0_linear_1_3224)"
            strokeWidth="51"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_1_3224"
              x1="-414.337"
              y1="-233.32"
              x2="1879.93"
              y2="889.992"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="#145497" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default BackgroundElements;
