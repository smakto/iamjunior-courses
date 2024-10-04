import styles from "./CategoryCard.module.scss";
import { Category } from "../../../types/types-category";

type CategoryCardProps = {
  icon: string;
  iconAlt: string;
  header: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  header,
  onClick,
  iconAlt,
}) => {
  return (
    <div className={styles.categoryCard} onClick={onClick}>
      <img src={icon} alt={iconAlt}></img>
      <h5>{header}</h5>
    </div>
  );
};
