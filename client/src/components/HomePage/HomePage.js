import React, { useContext } from "react";
import styles from "./HomePage.module.css";
import { hotelContext } from "./../../store/HotelInfoProvider";
import HotelCard from "../HotelCard/HotelCard";
import LinearProgress from "@mui/material/LinearProgress";
import { Slider, TextField } from "@mui/material";

import mumbai from "./../../resources/gate.png";
import bali from "./../../resources/bali.png";
import newYork from "./../../resources/statue-of-liberty.png";
import london from "./../../resources/big-ben.png";
import paris from "./../../resources/eiffel-tower.png";
import CityCard from "../CityCard/CityCard";
import Header from "../Header/Header";

const famousLocations = [
  { city: "Bali", photo: bali },
  { city: "Mumbai", photo: mumbai },
  { city: "Paris", photo: paris },
  { city: "New York", photo: newYork },
  { city: "London", photo: london },
];

const HomePage = () => {
  const ctx = useContext(hotelContext);

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
      <Header />
      <div className={styles["famous-destinations"]}>
        {famousLocations.map((city) => (
          <CityCard photo={city.photo} city={city.city} />
        ))}
      </div>

      <p className={styles["filter-heading"]}>Filters</p>
      <div className={styles["filters"]}>
        <div className={styles["location-filter"]}>
          <p className={styles.label}>Search Destination</p>
          <TextField
            className={styles.input}
            value={ctx.locationFilter}
            onChange={(e) => ctx.setLocationFilter(e.target.value)}
            required={false}
            id="outlined-basic"
            label="Search City"
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
