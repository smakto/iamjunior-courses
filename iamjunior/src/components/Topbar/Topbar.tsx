import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Topbar.module.scss";
import { routes } from "../../router/router";
import { useLoginStore } from "../../pages/authPages/LoginPage/useLoginStore";
import clsx from "clsx";
import Avatar from "./Avatar";

export function Topbar() {
  const navigate = useNavigate();
  const { currentUser, logged, logOut } = useLoginStore();

  // To review based on comments:
  function handleLogout() {
    logOut();
    localStorage.removeItem("loggedUserInfo");
    navigate(routes.login);
  }

  // console.log(currentUser);

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
          <Avatar onLogout={handleLogout}>
            {currentUser && currentUser[0]}
          </Avatar>
        ) : (
          <button onClick={() => navigate(routes.login)}>
            Login / Sign Up
          </button>
        )}
      </div>
    </header>
  );
}

// (
//   <>
//     <div>{currentUser}</div>
//     <button onClick={handleLogout}>Logout</button>
//   </>
// ) : (
//   <button onClick={navToLoginPage}>Login / Sign-up</button>
// )
