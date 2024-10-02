/* eslint-disable react-hooks/exhaustive-deps */
import { ServiceCard } from "./ServiceCard";
import styles from "./ServiceCards.module.scss";
import { services as initialServices } from "../../data/data";
import { favoriteMarkers } from "../../data/data";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/LocalStorage";
import { Service } from "./types-service";

type ServiceContainerProps = {
  data: Service[];
};

export const ServiceContainer: React.FC<ServiceContainerProps> = ({ data }) => {
  const [services, setServices] = useState(data ? data : initialServices);
  const { saveFavorites } = useLocalStorage();

  useEffect(() => {
    setServices(data ? data : initialServices);
  }, [data]);

  useEffect(() => {
    saveFavorites(services);
  }, [services]);

  function handleFavoriteMark(favService: Service) {
    const updatedServices = services.map((service) => {
      if (service._id === favService._id) {
        return { ...service, favorite: !service.favorite };
      }
      return service;
    });
    setServices(updatedServices);
  }

  return (
    <div className={styles.serviceContainer}>
      {services.map((itm) => {
        return (
          <ServiceCard
            key={itm._id}
            service={itm}
            favoriteMarker={
              itm.favorite ? favoriteMarkers.true : favoriteMarkers.false
            }
            handleFavoriteMark={() => handleFavoriteMark(itm)}
          />
        );
      })}
    </div>
  );
};
