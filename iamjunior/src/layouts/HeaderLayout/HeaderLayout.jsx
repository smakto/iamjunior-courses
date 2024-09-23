import { Outlet } from "react-router-dom";
import { Topbar } from "../../components/Topbar/Topbar";
import styles from "./HeaderLayout.module.scss";

export function HeaderLayout() {
  return (
    <div>
      <Topbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
