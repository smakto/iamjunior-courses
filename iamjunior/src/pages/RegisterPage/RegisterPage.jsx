import { NavLink } from "react-router-dom";

export function RegisterPage() {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm password" />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <NavLink to="/login">Login here</NavLink>
      </p>
    </div>
  );
}
