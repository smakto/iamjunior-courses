import styles from "./ServiceCards.module.scss";

export function ServiceCard({
  imgSrc,
  imgAlt,
  title,
  name,
  surname,
  address,
  category,
  favoriteMark,
  handleFavoriteMark,
}) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.cardTop}>
        <img src={imgSrc} alt={imgAlt}></img>
      </div>
      <div className={styles.cardBottom}>
        <img src={favoriteMark} onClick={handleFavoriteMark}></img>
        <h6>{category}</h6>
        <h3>{title}</h3>
        <h5>
          {name} {surname}
        </h5>
        <h5>{address}</h5>
        <button>Order now</button>
      </div>
    </div>
  );
}
