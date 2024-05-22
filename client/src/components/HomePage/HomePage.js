import React, { useContext, useState } from "react";
import styles from "./HomePage.module.css";
import { hotelContext } from "./../../store/HotelInfoProvider";
import HotelCard from "../HotelCard/HotelCard";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";
import { Button, Slider, TextField } from "@mui/material";
// import Slider from '@mui/material/Slider';

const HomePage = () => {
  const ctx = useContext(hotelContext);
  const navigate = useNavigate();
  // console.log(ctx);

  const priceFilterHandler = (e, newValue) => {
    console.log(`price will change to ${newValue}`);
    ctx.setPriceFilter(newValue);
  };

  const applyFilters = (hotel) =>
    hotel.minPrice <= ctx.priceFilter &&
    hotel.city.toLowerCase().trim() === ctx.locationFilter.toLowerCase().trim();

  const filteredHotel = ctx.hotelsInfo
    ? ctx.hotelsInfo.filter((hotel) => applyFilters(hotel))
    : [];

  return (
    <div className={styles.container}>
      <div className={styles["famous-destinations"]}></div>
      <Button
        className={styles["add-hotel"]}
        onClick={() => navigate("/add-hotel")}
        variant="contained"
        color="primary"
      >
        Add your Hotel
      </Button>
      <p className={styles["filter-heading"]}>Filters</p>
      <div className={styles["filters"]}>
        <div className={styles["location-filter"]}>
          <p className={styles.label}>Search By City</p>
          <TextField
            className={styles.input}
            value={ctx.locationFilter}
            onChange={(e) => ctx.setLocationFilter(e.target.value)}
            required={false}
            id="outlined-basic"
            label="Search Location"
            variant="outlined"
          />
        </div>
        <div className={styles["price-filter"]}>
          <p className={styles.label}>Filter By Price</p>
          <Slider
            className={styles.slider}
            onChange={priceFilterHandler}
            value={ctx.priceFilter}
            aria-label="Temperature"
            defaultValue={5000}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={1000}
            marks
            min={1000}
            max={50000}
          />
        </div>
      </div>

      {ctx.isLoading && (
        <div className={styles.progressbar}>
          <LinearProgress />
        </div>
      )}
      <hr />

      {ctx.locationFilter === "" && (
        <p className={styles.message}>Search a destination</p>
      )}
      {ctx.locationFilter !== "" && filteredHotel.length === 0 && (
        <p className={styles.message}>
          No Hotels in '{ctx.locationFilter}' found
        </p>
      )}

      {filteredHotel.length > 0 &&
        filteredHotel.map((hotel, idx) => (
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
