import React, { useContext } from "react";
import styles from "./HomePage.module.css";
import { hotelContext } from "./../../store/HotelInfoProvider";

const HomePage = () => {
  const ctx = useContext(hotelContext);
  // console.log(ctx);
  return (
    <div className={styles.container}>
      {ctx.isLoading && <p>Loading...</p>}
      {ctx.hotelsInfo &&
        ctx.hotelsInfo.map((hotel, idx) => (
          <p key={idx}>
            {hotel.hotelName}, {hotel.city} and {hotel.category}
          </p>
        ))}
      {ctx.error && <p>Error hai: {ctx.error}</p>}
    </div>
  );
};

export default HomePage;
