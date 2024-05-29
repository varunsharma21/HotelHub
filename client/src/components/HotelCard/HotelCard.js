import React from "react";
import styles from "./HotelCard.module.css";
import star from "./../../resources/star.png";
import { useNavigate } from "react-router-dom";

const HotelCard = (props) => {
  const navigate = useNavigate();

  const {
    id,
    hotelName,
    address,
    city,
    contactNumber,
    category,
    starRating,
    maxPrice,
    minPrice,
    photo,
  } = props;

  const showDetails = () => {
    console.log(props.address);
    navigate("/details", {
      state: {
        id,
        hotelName,
        address,
        city,
        contactNumber,
        category,
        starRating,
        maxPrice,
        minPrice,
        photo,
      },
    });
  };

  return (
    <div className={styles.container} onClick={showDetails}>
      <img className={styles.hotelImage} src={photo} alt="hotel" />
      <div className={styles["hotel-name"]}>
        <p>{hotelName}</p>
        <p className={styles.starRating}>
          <img src={star} alt="star" />
          {starRating}
        </p>
      </div>
      <p className={styles.city}>{city}</p>
      <p className={styles.price}>
        <span className={styles.minPrice}>₹ {minPrice.toLocaleString()}</span> /
        night
      </p>
    </div>
  );
};

export default HotelCard;
