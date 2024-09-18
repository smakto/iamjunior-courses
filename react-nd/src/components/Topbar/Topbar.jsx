import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Topbar.module.scss";
import { routes } from "../../router/router";
import { useLoginStore } from "../../pages/LoginPage/useLoginStore";

export function Topbar() {
  const navigate = useNavigate("");
  const user = useLoginStore((state) => state.currentUser);
  const loggedStatus = useLoginStore((state) => state.logged);
  const logOut = useLoginStore((state) => state.logOut);

  function navToLoginPage() {
    navigate(routes.login);
  }

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
          <NavLink to={routes.home}>Home</NavLink>
          <NavLink to={routes.services}>Services</NavLink>
          <NavLink to={routes.about}>About Us</NavLink>
        </nav>
      </div>
      <div className={styles.headerRight}>
        {loggedStatus ? (
          <>
            <div>{user}</div>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={navToLoginPage}>Login / Sign-up</button>
        )}
      </div>
    </header>
  );
}
