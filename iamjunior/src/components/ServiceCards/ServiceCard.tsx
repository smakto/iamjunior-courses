import styles from "./ServiceCards.module.scss";
import { Service } from "../../types/types-service";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "@/hooks/useSaveFavorites";
import { useEffect, useState } from "react";
import { favoriteMarkers } from "@/data/data";

type ServiceCardProps = {
  service: Service;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();
  const { setFavorite, removeFavorite, favoriteStatus } = useFavorites(service);
  const [isFavorite, setIsFavorite] = useState(favoriteStatus);

  useEffect(() => {
    setIsFavorite(favoriteStatus);
  }, [favoriteStatus]);

  const handleFavoriteToggle = async () => {
    if (isFavorite) {
      await removeFavorite(service._id);
    } else {
      await setFavorite(service._id);
    }
    setIsFavorite(!isFavorite);
  };

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
        <img
          src={isFavorite ? favoriteMarkers.true : favoriteMarkers.false}
          onClick={handleFavoriteToggle}
        ></img>
        <h6>{service.category}</h6>
        <h3>{service.name}</h3>
        <h5>{service.contactPerson}</h5>
        <h5>{service.address}</h5>
        <button>Order now</button>
      </div>
    </div>
  );
};
