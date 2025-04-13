"use client";
import React from "react";
import styles from "./Weapon.module.css";

export default function Weapon() {
  return (
    <div className={styles.weaponSection}>
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.titleContainer}>
            <span className={styles.mainTitle}>
              Lanstitut Language Learning
            </span>
            <span className={styles.subtitle}>
              Why We Still Lead the Way to Germany
            </span>
          </div>
          <span className={styles.description}>
            We are deeply committed to planning and tracking your progress
            toward success. Every step is carefully monitored as part of our
            service, with a focus on impactful outcomes. Here's how we
            confidently stand apart—through the key features that shape your
            future.
          </span>
        </div>
        <span className={styles.featuresTitle}>
          With Lanstitut&#x2019;s Medical Language Training, candidates gain:
        </span>
      </div>
      <div className="d-flex justify-content-center w-100">
        <div className="row ">
          <div
            className="col-12 col-md-4 mb-4 px-3 px-md-3"
            style={{
              maxWidth: "400px",
            }}
          >
            <div className={styles.featureCard}>
              <div className={styles.iconContainer}>
                <div className={styles.iconWrapper}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.032 23.2334L20.907 10.9834C20.8344 10.8381 20.7226 10.7159 20.5844 10.6305C20.4462 10.5451 20.2869 10.4998 20.1245 10.4998C19.962 10.4998 19.8027 10.5451 19.6645 10.6305C19.5263 10.7159 19.4146 10.8381 19.3419 10.9834L16.9673 15.7336C15.1061 15.6289 13.3153 14.986 11.8125 13.883C13.5757 12 14.6441 9.57207 14.8411 7H17.5C17.7321 7 17.9546 6.90781 18.1187 6.74372C18.2828 6.57962 18.375 6.35706 18.375 6.125C18.375 5.89294 18.2828 5.67038 18.1187 5.50628C17.9546 5.34219 17.7321 5.25 17.5 5.25H11.375V3.5C11.375 3.26794 11.2828 3.04538 11.1187 2.88128C10.9546 2.71719 10.7321 2.625 10.5 2.625C10.2679 2.625 10.0454 2.71719 9.88128 2.88128C9.71719 3.04538 9.625 3.26794 9.625 3.5V5.25H3.5C3.26794 5.25 3.04538 5.34219 2.88128 5.50628C2.71719 5.67038 2.625 5.89294 2.625 6.125C2.625 6.35706 2.71719 6.57962 2.88128 6.74372C3.04538 6.90781 3.26794 7 3.5 7H13.0845C12.8896 9.14446 11.9794 11.1611 10.5 12.7258C9.57814 11.7531 8.87024 10.5981 8.42188 9.33516C8.38501 9.22497 8.32656 9.12323 8.24995 9.03587C8.17334 8.94851 8.0801 8.87728 7.97567 8.82635C7.87124 8.77541 7.75771 8.74579 7.6417 8.7392C7.5257 8.73261 7.40954 8.74919 7.30001 8.78798C7.19049 8.82676 7.08978 8.88697 7.00377 8.9651C6.91776 9.04322 6.84818 9.13769 6.79907 9.243C6.74997 9.3483 6.72233 9.46233 6.71776 9.57843C6.7132 9.69454 6.73181 9.81039 6.7725 9.91922C7.29451 11.3956 8.1168 12.7479 9.1875 13.8906C7.53896 15.102 5.54578 15.7537 3.5 15.75C3.26794 15.75 3.04538 15.8422 2.88128 16.0063C2.71719 16.1704 2.625 16.3929 2.625 16.625C2.625 16.8571 2.71719 17.0796 2.88128 17.2437C3.04538 17.4078 3.26794 17.5 3.5 17.5C6.03814 17.5028 8.50354 16.6523 10.5 15.085C12.1292 16.358 14.0741 17.1637 16.1263 17.4158L13.2169 23.2334C13.1655 23.3362 13.1348 23.4481 13.1266 23.5627C13.1184 23.6773 13.1329 23.7925 13.1692 23.9015C13.2425 24.1217 13.4003 24.3037 13.6079 24.4076C13.8154 24.5114 14.0557 24.5286 14.2759 24.4552C14.4961 24.3819 14.6782 24.2241 14.782 24.0166L16.2903 21H23.9586L25.4669 24.0166C25.5396 24.1619 25.6514 24.2842 25.7897 24.3696C25.9281 24.4549 26.0874 24.5001 26.25 24.5C26.3991 24.4999 26.5458 24.4617 26.676 24.389C26.8062 24.3164 26.9157 24.2116 26.994 24.0847C27.0724 23.9578 27.117 23.813 27.1237 23.664C27.1303 23.515 27.0988 23.3668 27.032 23.2334ZM17.1653 19.25L20.125 13.3317L23.0836 19.25H17.1653Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <span className={styles.featureText}>
                Conversational &#x26; medical-specific language skills tailored
                for their target country.
              </span>
            </div>
          </div>

          <div
            className="col-12 col-md-4 mb-4 px-3 px-md-3"
            style={{
              maxWidth: "400px",
            }}
          >
            <div className={styles.featureCard}>
              <div className={styles.iconContainer}>
                <div className={styles.iconWrapper}>
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3334 14.875C14.3334 15.1071 14.2412 15.3296 14.0771 15.4937C13.913 15.6578 13.6904 15.75 13.4584 15.75H8.20837C7.97631 15.75 7.75375 15.6578 7.58966 15.4937C7.42556 15.3296 7.33337 15.1071 7.33337 14.875C7.33337 14.6429 7.42556 14.4204 7.58966 14.2563C7.75375 14.0922 7.97631 14 8.20837 14H13.4584C13.6904 14 13.913 14.0922 14.0771 14.2563C14.2412 14.4204 14.3334 14.6429 14.3334 14.875ZM13.4584 10.5H8.20837C7.97631 10.5 7.75375 10.5922 7.58966 10.7563C7.42556 10.9204 7.33337 11.1429 7.33337 11.375C7.33337 11.6071 7.42556 11.8296 7.58966 11.9937C7.75375 12.1578 7.97631 12.25 8.20837 12.25H13.4584C13.6904 12.25 13.913 12.1578 14.0771 11.9937C14.2412 11.8296 14.3334 11.6071 14.3334 11.375C14.3334 11.1429 14.2412 10.9204 14.0771 10.7563C13.913 10.5922 13.6904 10.5 13.4584 10.5ZM25.7084 17.6608V24.5C25.7098 24.6543 25.6703 24.8061 25.5941 24.9403C25.5179 25.0744 25.4075 25.1859 25.2743 25.2637C25.141 25.3414 24.9896 25.3825 24.8353 25.3829C24.6811 25.3832 24.5295 25.3428 24.3959 25.2656L21.7709 23.7628L19.1459 25.2656C19.0123 25.3428 18.8607 25.3832 18.7064 25.3829C18.5521 25.3825 18.4007 25.3414 18.2675 25.2637C18.1342 25.1859 18.0239 25.0744 17.9476 24.9403C17.8714 24.8061 17.832 24.6543 17.8334 24.5V21.875H4.70837C4.24425 21.875 3.79913 21.6906 3.47094 21.3624C3.14275 21.0342 2.95837 20.5891 2.95837 20.125V6.125C2.95837 5.66087 3.14275 5.21575 3.47094 4.88756C3.79913 4.55937 4.24425 4.375 4.70837 4.375H23.9584C24.4225 4.375 24.8676 4.55937 25.1958 4.88756C25.524 5.21575 25.7084 5.66087 25.7084 6.125V9.46422C26.2615 9.9939 26.7017 10.6301 27.0024 11.3344C27.3031 12.0387 27.4581 12.7967 27.4581 13.5625C27.4581 14.3283 27.3031 15.0863 27.0024 15.7906C26.7017 16.4949 26.2615 17.1311 25.7084 17.6608ZM17.8334 20.125V17.6608C16.8799 16.7412 16.2772 15.5176 16.1295 14.2012C15.9818 12.8847 16.2982 11.558 17.0242 10.4499C17.7502 9.34189 18.8402 8.52201 20.1062 8.13179C21.3721 7.74157 22.7345 7.80548 23.9584 8.3125V6.125H4.70837V20.125H17.8334ZM23.9584 18.8125C23.2654 19.102 22.5219 19.2511 21.7709 19.2511C21.0199 19.2511 20.2763 19.102 19.5834 18.8125V22.9928L21.3334 21.9909C21.4656 21.9154 21.6153 21.8756 21.7676 21.8756C21.9199 21.8756 22.0696 21.9154 22.2018 21.9909L23.9518 22.9928L23.9584 18.8125ZM25.7084 13.5625C25.7084 12.7837 25.4774 12.0225 25.0448 11.3749C24.6121 10.7274 23.9972 10.2227 23.2777 9.92472C22.5582 9.6267 21.7665 9.54873 21.0027 9.70066C20.2389 9.85259 19.5373 10.2276 18.9866 10.7783C18.436 11.3289 18.061 12.0305 17.909 12.7943C17.7571 13.5581 17.8351 14.3498 18.1331 15.0693C18.4311 15.7888 18.9358 16.4038 19.5833 16.8364C20.2308 17.2691 20.9921 17.5 21.7709 17.5C22.288 17.5 22.8 17.3982 23.2777 17.2003C23.7554 17.0024 24.1895 16.7124 24.5551 16.3467C24.9207 15.9811 25.2108 15.547 25.4086 15.0693C25.6065 14.5916 25.7084 14.0796 25.7084 13.5625Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <span className={styles.featureText}>
                Certification support for IELTS, OET, TELC, and other required
                exams.
              </span>
            </div>
          </div>

          <div
            className="col-12 col-md-4 mb-4 px-3 px-md-3"
            style={{
              maxWidth: "400px",
            }}
          >
            <div className={styles.featureCard}>
              <div className={styles.iconContainer}>
                <div className={styles.iconWrapper}>
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.6987 23.2334L21.5737 10.9834C21.501 10.8381 21.3893 10.7159 21.2511 10.6305C21.1128 10.5451 20.9536 10.4998 20.7911 10.4998C20.6286 10.4998 20.4693 10.5451 20.3311 10.6305C20.1929 10.7159 20.0812 10.8381 20.0085 10.9834L17.634 15.7336C15.7727 15.6289 13.9819 14.986 12.4791 13.883C14.2423 12 15.3107 9.57207 15.5077 7H18.1666C18.3987 7 18.6213 6.90781 18.7853 6.74372C18.9494 6.57962 19.0416 6.35706 19.0416 6.125C19.0416 5.89294 18.9494 5.67038 18.7853 5.50628C18.6213 5.34219 18.3987 5.25 18.1666 5.25H12.0416V3.5C12.0416 3.26794 11.9494 3.04538 11.7853 2.88128C11.6213 2.71719 11.3987 2.625 11.1666 2.625C10.9346 2.625 10.712 2.71719 10.5479 2.88128C10.3838 3.04538 10.2916 3.26794 10.2916 3.5V5.25H4.16663C3.93456 5.25 3.712 5.34219 3.54791 5.50628C3.38381 5.67038 3.29163 5.89294 3.29163 6.125C3.29163 6.35706 3.38381 6.57962 3.54791 6.74372C3.712 6.90781 3.93456 7 4.16663 7H13.7512C13.5563 9.14446 12.646 11.1611 11.1666 12.7258C10.2448 11.7531 9.53686 10.5981 9.0885 9.33516C9.05163 9.22497 8.99319 9.12323 8.91658 9.03587C8.83997 8.94851 8.74673 8.87728 8.6423 8.82635C8.53786 8.77541 8.42433 8.74579 8.30833 8.7392C8.19232 8.73261 8.07617 8.74919 7.96664 8.78798C7.85711 8.82676 7.75641 8.88697 7.6704 8.9651C7.58439 9.04322 7.5148 9.13769 7.4657 9.243C7.41659 9.3483 7.38895 9.46233 7.38439 9.57843C7.37983 9.69454 7.39843 9.81039 7.43913 9.91922C7.96114 11.3956 8.78342 12.7479 9.85413 13.8906C8.20559 15.102 6.21241 15.7537 4.16663 15.75C3.93456 15.75 3.712 15.8422 3.54791 16.0063C3.38381 16.1704 3.29163 16.3929 3.29163 16.625C3.29163 16.8571 3.38381 17.0796 3.54791 17.2437C3.712 17.4078 3.93456 17.5 4.16663 17.5C6.70477 17.5028 9.17016 16.6523 11.1666 15.085C12.7958 16.358 14.7407 17.1637 16.7929 17.4158L13.8835 23.2334C13.8321 23.3362 13.8014 23.4481 13.7932 23.5627C13.785 23.6773 13.7995 23.7925 13.8358 23.9015C13.9092 24.1217 14.067 24.3037 14.2745 24.4076C14.4821 24.5114 14.7224 24.5286 14.9426 24.4552C15.1628 24.3819 15.3448 24.2241 15.4487 24.0166L16.9569 21H24.6252L26.1335 24.0166C26.2062 24.1619 26.318 24.2842 26.4564 24.3696C26.5947 24.4549 26.7541 24.5001 26.9166 24.5C27.0658 24.4999 27.2124 24.4617 27.3426 24.389C27.4728 24.3164 27.5823 24.2116 27.6607 24.0847C27.739 23.9578 27.7836 23.813 27.7903 23.664C27.7969 23.515 27.7654 23.3668 27.6987 23.2334ZM17.8319 19.25L20.7916 13.3317L23.7502 19.25H17.8319Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <span className={styles.featureText}>
                Interview coaching to boost confidence and secure job offers.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
