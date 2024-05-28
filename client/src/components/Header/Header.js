import React from "react";
import styles from "./Header.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth0();

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
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};

export default Header;
