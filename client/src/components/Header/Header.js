import React from "react";
import styles from "./Header.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>Hotel Hub</p>
      </div>

      <Button
        className={styles["add-hotel-btn"]}
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
