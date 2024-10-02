import { Outlet } from "react-router-dom";
import { Topbar } from "../../components/Topbar/Topbar";
import styles from "./HeaderLayout.module.scss";

export const HeaderLayout: React.FC = () => {
  return (
    <div>
      <Topbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
