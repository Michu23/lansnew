"use client";
import { useState, useEffect } from "react";
import styles from "./FormDialog.module.css";

export default function FormDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    state: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit-to-sheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        alert("Form submitted successfully!");
        setIsOpen(false);
      } else {
        console.error("Submission failed:", data.error);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error submitting form:", error);
      alert("Network error. Please check your internet connection.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <div className={styles.header}>
          <h3>Connect with us</h3>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="number">Phone Number</label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="10-digit phone number"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter your state"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
