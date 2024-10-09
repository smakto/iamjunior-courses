import { Link } from "react-router-dom";
import styles from "./DropdownMenu.module.scss";
// import { routes } from "../../router/router";

interface DropdownMenuProps {
  onLogout: () => void;
}

// Include routes.

const DropdownMenu = ({ onLogout }: DropdownMenuProps) => {
  return (
    <div className={styles.dropdownMenu}>
      <Link to="/account" className={styles.dropdownItem}>
        My Account
      </Link>
      <Link to="/bookings" className={styles.dropdownItem}>
        My Bookings
      </Link>
      <Link to="/login" className={styles.dropdownItem} onClick={onLogout}>
        Logout
      </Link>
    </div>
  );
};

export default DropdownMenu;
