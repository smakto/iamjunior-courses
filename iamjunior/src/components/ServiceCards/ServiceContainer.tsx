/* eslint-disable react-hooks/exhaustive-deps */
import { ServiceCard } from "./ServiceCard";
import styles from "./ServiceCards.module.scss";
import { favoriteMarkers } from "../../data/data";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/LocalStorage";
import { Service } from "../../types/types-service";
import axios from "axios";

type ServiceContainerProps = {
  data: Service[];
};

export const ServiceContainer: React.FC<ServiceContainerProps> = ({ data }) => {
  /// TODO: implement saving favorites
  // const [favServices, setFavServices] = useState<Service[]>([]);
  // const { saveFavorites } = useLocalStorage();

  return (
    <div className={styles.serviceContainer}>
      {data.map((itm) => {
        return (
          <ServiceCard
            key={itm._id}
            service={itm}
            // favoriteMarker={
            //   itm.favorite ? favoriteMarkers.true : favoriteMarkers.false
            // }
            // handleFavoriteMark={() => handleFavoriteMark(itm)}
          />
        );
      })}
    </div>
  );
};
