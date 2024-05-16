import React, { useContext } from "react";
import styles from "./HomePage.module.css";
import { hotelContext } from "./../../store/HotelInfoProvider";
import HotelCard from "../HotelCard/HotelCard";
import LinearProgress from "@mui/material/LinearProgress";
import hotelImage from "./../../resources/hotel-image.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  const ctx = useContext(hotelContext);
  const navigate = useNavigate();
  // console.log(ctx);
  return (
    <div className={styles.container}>
      <div className={styles.filter}></div>
      {/* <img className={styles.hotelImage} src={hotelImage} alt="hotel" /> */}
      <Button
        className={styles["add-hotel"]}
        onClick={() => navigate("/add-hotel")}
        variant="contained"
        color="primary"
      >
        Add Hotel
      </Button>
      {ctx.isLoading && (
        <div className={styles.progressbar}>
          <LinearProgress />
        </div>
      )}

      {ctx.hotelsInfo &&
        ctx.hotelsInfo.map((hotel, idx) => (
          <HotelCard
            key={idx}
            id={hotel.id}
            hotelName={hotel.hotelName}
            address={hotel.address}
            city={hotel.city}
            contactNumber={hotel.contactNumber}
            category={hotel.category}
            starRating={hotel.starRating}
            maxPrice={hotel.maxPrice}
            minPrice={hotel.minPrice}
          />
        ))}
      {ctx.error && <p>Error: {ctx.error}</p>}
    </div>
  );
};

export default HomePage;
