import { NavLink, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { useLoginStore } from "./useLoginStore";
import { useState } from "react";
import { routes } from "../../router/router";
import axios from "axios";

export const LoginPage: React.FC = () => {
  const { logIn } = useLoginStore();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null); // Handle errors

  function handleFormInput(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  }

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        userInfo
      );
      const { token, user } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("loggedUserInfo", JSON.stringify(user));
      logIn(user.email);
      navigate(routes.home);
    } catch (error: any) {
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      ); // Display error
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
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
          <button type="submit" className={styles.loginButton}>
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
};
