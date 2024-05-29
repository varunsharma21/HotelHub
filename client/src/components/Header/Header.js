import React from "react";
import styles from "./Header.module.css";
import logoutBtn from "./../../resources/logout.png";

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
      <div className={styles.btns}>
        <Button
          className={styles["add-hotel-btn"]}
          onClick={() => navigate("/add-hotel")}
          variant="contained"
          color="primary"
        >
          Add your Hotel
        </Button>
        <img
          src={logoutBtn}
          className={styles.logout}
          onClick={() => logout()}
          alt="logout"
        />
      </div>
    </div>
  );
};

export default Header;
