"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/assets/Logo.svg"
            alt="Lanstitut Logo"
            width={50}
            height={50}
            priority
          />
        </div>

        <nav className={styles.nav}>
          <span>For Candidates</span>
          <span>For Recruiters</span>
          <span>About Us</span>
          <span>Blogs</span>
        </nav>

        <div className={styles.demoButton}>
          Schedule a Demo
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8H15M15 8L8 1M15 8L8 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
