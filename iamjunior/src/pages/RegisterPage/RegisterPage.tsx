import { NavLink } from "react-router-dom";
import styles from "./registerPage.module.scss";
import { useState } from "react";
import { User } from "../../types/types-user";
import axios from "axios";

export const RegisterPage: React.FC = () => {
  const [passwordsMatch, setPasswordsMatch] = useState<Boolean>(true);
  const [userToRegister, setUserToRegister] = useState<User>({
    name: "",
    email: "",
    age: 0,
    password: "",
  });

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setUserToRegister((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function checkPasswords(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value === userToRegister.password) {
      setPasswordsMatch(true);
    } else setPasswordsMatch(false);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user",
        userToRegister
      );
    } catch (error) {
      console.error("Error during user registration:", error);
    }
  }

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input
              type="name"
              name="name"
              value={userToRegister.name}
              placeholder="Enter user name"
              onChange={handleInput}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={userToRegister.email}
              placeholder="Enter email"
              onChange={handleInput}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={userToRegister.age}
              placeholder="Enter user age"
              onChange={handleInput}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={userToRegister.password}
              placeholder="Enter password"
              onChange={handleInput}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm password"
              onBlur={checkPasswords}
              style={{ borderColor: passwordsMatch ? "black" : "red" }}
            />
          </div>
          <button type="submit" className={styles.registerButton}>
            Register
          </button>
        </form>
        <p className={styles.loginLink}>
          Already have an account? <NavLink to="/login">Login here</NavLink>
        </p>
      </div>
    </div>
  );
};
