/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { useLoginStore } from "./useLoginStore";
import { useState } from "react";
import { routes } from "../../router/router";

export function LoginPage() {
  const user = useLoginStore((state) => state.currentUser);
  const logIn = useLoginStore((state) => state.logIn);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  function handleUserNameInput(event) {
    setUserName(event.target.value);
  }

  function handleLogin(event) {
    event.preventDefault();
    logIn(userName);
    navigate(routes.home);
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              onChange={handleUserNameInput}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <button
            type="submit"
            className={styles.loginButton}
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <p className={styles.registerLink}>
          Don't have an account? <NavLink to="/register">Register here</NavLink>
        </p>
      </div>
    </div>
  );
}
