import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./AddHotel.module.css";
import { Button } from "@mui/material";

const inputInfo = [
  { label: "Hotel Name", stateKey: "hotel" },
  { label: "Address", stateKey: "address" },
  { label: "City", stateKey: "city" },
  { label: "Contact Number", stateKey: "contactNumber" },
  { label: "Min Price", stateKey: "minPrice" },
  { label: "Max Price", stateKey: "maxPrice" },
];

const AddHotel = () => {
  const initialState = {
    hotel: "",
    address: "",
    city: "",
    contactNumber: "",
    minPrice: "",
    maxPrice: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e, stateKey) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [stateKey]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // POST request

    console.log(formData);
    setFormData(initialState);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        {inputInfo.map((info, index) => (
          <TextField
            key={index}
            value={formData[info.stateKey]}
            onChange={(e) => handleChange(e, info.stateKey)}
            // required={true}
            id="outlined-basic"
            label={info.label}
            variant="outlined"
          />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddHotel;
