import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./AddHotel.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { hotelContext } from "../store/HotelInfoProvider";

const inputInfo = [
  { label: "Hotel Name", stateKey: "hotel" },
  { label: "Address", stateKey: "address" },
  { label: "City", stateKey: "city" },
  { label: "Contact Number", stateKey: "contactNumber" },
  { label: "Min Price", stateKey: "minPrice" },
  { label: "Max Price", stateKey: "maxPrice" },
  { label: "Category", stateKey: "category" },
  { label: "Star Rating", stateKey: "starRating" },
];

const AddHotel = () => {
  const initialState = {
    hotel: "",
    address: "",
    city: "",
    contactNumber: "",
    minPrice: "",
    maxPrice: "",
    category: "",
    starRating: "",
  };

  const [formData, setFormData] = useState(initialState);
  const { fetchHotelData } = useContext(hotelContext);
  const navigate = useNavigate();

  const backToHotels = () => {
    navigate("/");
  };

  const handleChange = (e, stateKey) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [stateKey]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("entered the function.", formData);

    // POST request
    try {
      const response = await fetch("http://localhost:5500/api/v1/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(formData), this will be wrong here.
        // Bcoz backend is expecting an object with keys hotelName,address...etc.
        body: JSON.stringify({
          hotelName: formData.hotel,
          address: formData.address,
          city: formData.city,
          contactNumber: formData.contactNumber,
          category: formData.category,
          starRating: formData.starRating,
          maxPrice: formData.maxPrice,
          minPrice: formData.minPrice,
        }),
      });

      console.log(response);

      if (!response.ok) {
        throw Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Data:", data);

      // Fetching data again to render recently added hotel on homepage.
      fetchHotelData();
    } catch (error) {
      console.error("Error:", error.message);
    }
    console.log(formData);
    setFormData(initialState);
    // navigate("/");
  };

  return (
    <div className={styles.container}>
      <Button
        className={styles.showHotels}
        onClick={backToHotels}
        variant="contained"
        color="primary"
      >
        Show Hotels
      </Button>
      <form className={styles.form} onSubmit={submitHandler}>
        {inputInfo.map((info, index) => (
          <TextField
            className={styles.input}
            key={index}
            value={formData[info.stateKey]}
            onChange={(e) => handleChange(e, info.stateKey)}
            required={true}
            id="outlined-basic"
            label={info.label}
            variant="outlined"
          />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Add Hotel
        </Button>
      </form>
    </div>
  );
};

export default AddHotel;
