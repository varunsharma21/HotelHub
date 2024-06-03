import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Details.module.css";

const Details = () => {
  const location = useLocation();

  const { state } = location;

  return (
    <div className={styles.container}>
      <div className={styles["details-card"]}>
        <img src={state.photo} alt="" />
        <div className={styles["hotel-info"]}>
          <p className={styles.name}>{state.hotelName}</p>
          <p className={styles.city}> {state.city}</p>
          <p className={styles.rating}>
            <span className={styles.highlighted}>Rating:</span>{" "}
            {state.starRating} / 5
          </p>
          <p className={styles.category}>
            <span className={styles.highlighted}>Category: </span>
            {state.category}
          </p>
          <p className={styles.contactNumber}>
            <span className={styles.highlighted}>Contact Number: </span>
            {state.contactNumber}
          </p>
          <p className={styles.minPrice}>
            <span className={styles.highlighted}>Price Range: </span>
            {state.minPrice.toLocaleString()} -{" "}
            {state.maxPrice.toLocaleString()} / night
          </p>
          <p className={styles.address}>
            <span className={styles.highlighted}>Address: </span>
            {state.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
