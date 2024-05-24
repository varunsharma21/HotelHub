import React from "react";
import styles from "./PageNotFound.module.css";
import pageNotFound from "./../../resources/page-not-found.png";

function PageNotFound() {
  return (
    <div className={styles.container}>
      {/* <p className={styles.name}>Hotel Hub</p> */}
      <div className={styles["container-left"]}>
        <p className={styles.highlight}>Oops!</p>
        <p className={styles.message}>
          We can't seem to find the page you're looking for.
        </p>
        <p className={styles["error-code"]}>Error code: 404</p>
      </div>
      <div className={styles["container-right"]}>
        <img src={pageNotFound} alt="" />
      </div>
    </div>
  );
}

export default PageNotFound;
