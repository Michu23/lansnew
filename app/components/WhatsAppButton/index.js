import React from "react";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/YOUR_PHONE_NUMBER", "_blank");
  };

  return (
    <div className={styles.whatsappButton} onClick={handleClick}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0ZM16 30.4C8.268 30.4 1.6 23.732 1.6 16C1.6 8.268 8.268 1.6 16 1.6C23.732 1.6 30.4 8.268 30.4 16C30.4 23.732 23.732 30.4 16 30.4Z"
          fill="white"
        />
        <path
          d="M24.8 9.6C24.4 9.2 23.6 9.2 23.2 9.6L20.8 12C20.4 12.4 20.4 13.2 20.8 13.6C21.2 14 22 14 22.4 13.6L24.8 11.2C25.2 10.8 25.2 10 24.8 9.6Z"
          fill="white"
        />
        <path
          d="M9.6 24.8C9.2 24.4 9.2 23.6 9.6 23.2L12 20.8C12.4 20.4 13.2 20.4 13.6 20.8C14 21.2 14 22 13.6 22.4L11.2 24.8C10.8 25.2 10 25.2 9.6 24.8Z"
          fill="white"
        />
        <path
          d="M22.4 9.6C22 9.2 21.2 9.2 20.8 9.6L9.6 20.8C9.2 21.2 9.2 22 9.6 22.4C10 22.8 10.8 22.8 11.2 22.4L22.4 11.2C22.8 10.8 22.8 10 22.4 9.6Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
