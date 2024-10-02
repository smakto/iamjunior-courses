import { NavLink } from "react-router-dom";
import styles from "./registerPage.module.scss";

export const RegisterPage: React.FC = () => {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
        <h2>Register</h2>
        <form>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="registerEmail"
              placeholder="Enter email"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              name="registerPassword"
              placeholder="Enter password"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="registerPasswordConfirm"
              placeholder="Confirm password"
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
