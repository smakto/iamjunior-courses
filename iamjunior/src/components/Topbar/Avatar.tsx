import { PropsWithChildren, useState } from "react";
import styles from "./Avatar.module.scss";
import DropdownMenu from "./DropdownMenu";

interface AvatarProps {
  onLogout: () => void;
}

const Avatar = ({ children, onLogout }: PropsWithChildren<AvatarProps>) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatar} onClick={toggleDropdown}>
        {children}
      </div>
      {isDropdownOpen && <DropdownMenu onLogout={onLogout} />}
    </div>
  );
};

export default Avatar;
