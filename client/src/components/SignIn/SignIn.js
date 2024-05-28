import React from "react";
import styles from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import poster from "./../../resources/sign-in-poster.jpg";
import googleLogo from "./../../resources/google-logo.png";

const SignIn = () => {
  const navigate = useNavigate();
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log("Current User: ", user);

  return (
    <div className={styles.container}>
      <img className={styles.poster} src={poster} alt="" />
      <div className={styles.form}>
        <button onClick={loginWithRedirect} className={styles["google-btn"]}>
          <img src={googleLogo} alt="" />
          Sign in with Google
        </button>
        <p>OR</p>
        <button
          className={styles["guest-btn"]}
          onClick={() => navigate("/hotels")}
        >
          Sign in as Guest
        </button>
      </div>
    </div>
  );
};

export default SignIn;
