import React from "react";
import styles from "./Header.module.css";
import { Button, Slider, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <p>Hotel Hub</p>
      <Button
        className={styles["add-hotel"]}
        onClick={() => navigate("/add-hotel")}
        variant="contained"
        color="primary"
      >
        Add your Hotel
      </Button>
    </div>
  );
};

export default Header;
