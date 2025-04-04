"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/Logo.svg"
            alt="Lanstitut Logo"
            width={50}
            height={50}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="/for-candidates">For Candidates</Link>
          <Link href="/for-recruiters">For Recruiters</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/blogs">Blogs</Link>
        </nav>

        <Link href="/schedule-demo" className={styles.demoButton}>
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
        </Link>
      </div>
    </header>
  );
};

export default Header;
