import styles from "./Topbar.module.scss";

export function Topbar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img
          src="https://cdn.worldvectorlogo.com/logos/lorem-lorem-1.svg"
          alt="Logo"
        ></img>
        <nav>
          <p>Home</p>
          <p>Services</p>
          <p>About us</p>
        </nav>
      </div>
      <div className={styles.headerRight}>
        <button>Login / Sign-up</button>
      </div>
    </header>
  );
}
