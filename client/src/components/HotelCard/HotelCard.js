import React from "react";
import styles from "./HotelCard.module.css";
import location from "./../../resources/location-emoji.png";
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
      },
    });
  };

  return (
    <div className={styles.container} onClick={showDetails}>
      <p className={styles["hotel-name"]}>{hotelName}</p>
      <p className={styles.city}>
        <img className={styles["location-emoji"]} src={location} alt="" />
        {city}
      </p>
      <p className={styles.rating}>{starRating}/5 ⭐</p>
    </div>
  );
};

export default HotelCard;
