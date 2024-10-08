import styles from "./ServiceCards.module.scss";
import { Service } from "../../types/types-service";
// import { favoriteMarkers } from "../../data/data";
import { useNavigate } from "react-router-dom";

type ServiceCardProps = {
  service: Service;
  // handleFavoriteMark: (event: React.MouseEvent<HTMLDivElement>) => void;
  // favoriteMarker: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  // handleFavoriteMark,
  // favoriteMarker,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.serviceCard}>
      <div
        className={styles.cardTop}
        onClick={() => {
          navigate(`/business/${service._id}`);
        }}
      >
        <img src={service.imageUrl[0].imgUrl}></img>
      </div>
      <div className={styles.cardBottom}>
        {/* <img src={favoriteMarker} onClick={handleFavoriteMark}></img> */}
        <h6>{service.category}</h6>
        <h3>{service.name}</h3>
        <h5>{service.contactPerson}</h5>
        <h5>{service.address}</h5>
        <button>Order now</button>
      </div>
    </div>
  );
};
