import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Topbar.module.scss";
import { routes } from "../../router/router";
import { useLoginStore } from "../../pages/LoginPage/useLoginStore";
import clsx from "clsx";

export function Topbar() {
  const navigate = useNavigate();
  const { currentUser, logged, logOut } = useLoginStore();

  function navToLoginPage() {
    navigate(routes.login);
  }

  // To review based on comments:
  function handleLogout() {
    logOut();
    localStorage.removeItem("loggedUserInfo");
    navigate(routes.login);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img
          src="https://seeklogo.com/images/L/Lorem_Ipsum-logo-1662AFAE6D-seeklogo.com.png"
          alt="Logo"
        ></img>
        <nav>
          <NavLink
            className={({ isActive }) => clsx(isActive && styles.active)}
            to={routes.home}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(isActive && styles.active)}
            to={routes.services}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(isActive && styles.active)}
            to={routes.about}
          >
            About Us
          </NavLink>
        </nav>
      </div>
      <div className={styles.headerRight}>
        {logged ? (
          <>
            <div>{currentUser}</div>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={navToLoginPage}>Login / Sign-up</button>
        )}
      </div>
    </header>
  );
}
