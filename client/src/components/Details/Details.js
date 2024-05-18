import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Details.module.css";

const Details = () => {
  const location = useLocation();

  const { state } = location;

  return (
    <div className={styles.container}>
      <div className={styles["details-card"]}>
        <div className={styles["hotel-info"]}>
          <p className={styles.name}>{state.hotelName}</p>
          <p className={styles.city}> {state.city}</p>
          <p className={styles.rating}>{state.starRating}/5</p>
          <p className={styles.category}>{state.category}</p>
          <p className={styles.contactNumber}>{state.contactNumber}</p>
          <p className={styles.minPrice}>
            Starting at just ₹{state.minPrice}/night
          </p>
          <p className={styles.maxPrice}>Till ₹{state.maxPrice}</p>
          <p className={styles.address}>{state.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
