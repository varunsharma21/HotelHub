import React, { useContext } from "react";
import styles from "./CityCard.module.css";
import { hotelContext } from "../../store/HotelInfoProvider";

function CityCard(props) {
  const ctx = useContext(hotelContext);

  const clickHandler = () => {
    console.log(`filter setting to ${props.city}`);
    ctx.setLocationFilter(props.city);
  };

  return (
    <div onClick={clickHandler} className={styles.container}>
      <img src={props.photo} alt="" />
      <p>{props.city}</p>
    </div>
  );
}

export default CityCard;
