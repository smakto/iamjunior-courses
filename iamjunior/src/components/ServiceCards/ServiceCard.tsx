import styles from "./ServiceCards.module.scss";
import { Service } from "./types-service";
import { favoriteMarkers } from "../../data/data";

type ServiceCardProps = {
  service: Service;
  handleFavoriteMark: (event: React.MouseEvent<HTMLDivElement>) => void;
  favoriteMarker: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  handleFavoriteMark,
  favoriteMarker,
}) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.cardTop}>
        <img src={service.imgUrl} alt={service.imgAlt}></img>
      </div>
      <div className={styles.cardBottom}>
        <img src={favoriteMarker} onClick={handleFavoriteMark}></img>
        <h6>{service.category}</h6>
        <h3>{service.title}</h3>
        <h5>
          {service.name} {service.surname}
        </h5>
        <h5>{service.address}</h5>
        <button>Order now</button>
      </div>
    </div>
  );
};
