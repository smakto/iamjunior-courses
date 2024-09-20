import styles from "./CategoryCard.module.scss";

export function CategoryCard({ icon, header, onClick, iconAlt }) {
  return (
    <div className={styles.categoryCard} onClick={onClick}>
      <img src={icon} alt={iconAlt}></img>
      <h5>{header}</h5>
    </div>
  );
}
