import { NavLink, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { useLoginStore } from "./useLoginStore";
import { useState } from "react";
import { routes } from "../../router/router";

export function LoginPage() {
  const { logIn } = useLoginStore();
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleFormInput(event) {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    logIn(userInfo.username);
    localStorage.setItem("loggedUserInfo", JSON.stringify(userInfo));
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
              name="username"
              placeholder="Enter username"
              onChange={(event) => {
                handleFormInput(event);
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={(event) => {
                handleFormInput(event);
              }}
            />
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
          Don't have an account?
          <NavLink to={routes.register}>Register here</NavLink>
        </p>
      </div>
    </div>
  );
}
