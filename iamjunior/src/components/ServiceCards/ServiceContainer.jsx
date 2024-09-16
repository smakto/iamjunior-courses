import { ServiceCard } from "./ServiceCard";
import styles from "./ServiceCards.module.scss";
import { services as initialServices } from "../../data/data";
import { favoriteMarkers } from "../../data/data";
import { useState } from "react";

export function ServiceContainer() {
  const [services, setServices] = useState(initialServices);

  function handleFavoriteMark(favService) {
    const updatedServices = services.map((service) => {
      if (
        service.title === favService.title &&
        service.name === favService.name &&
        service.surname === favService.surname
      ) {
        return { ...service, favorite: !service.favorite };
      }
      return service;
    });
    setServices(updatedServices);
  }

  return (
    <div className={styles.serviceContainer}>
      {services.map((service, index) => {
        return (
          <ServiceCard
            key={index}
            imgSrc={service.img}
            imgAlt={service.imgAlt}
            title={service.title}
            category={service.category}
            name={service.name}
            surname={service.surname}
            address={service.address}
            favoriteMark={
              service.favorite ? favoriteMarkers.true : favoriteMarkers.false
            }
            handleFavoriteMark={() => {
              handleFavoriteMark(service);
            }}
          />
        );
      })}
    </div>
  );
}
