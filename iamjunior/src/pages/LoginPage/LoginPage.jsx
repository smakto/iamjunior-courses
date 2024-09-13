import { NavLink } from "react-router-dom";

export function LoginPage() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <NavLink to="/register">Register here</NavLink>
      </p>
    </div>
  );
}
