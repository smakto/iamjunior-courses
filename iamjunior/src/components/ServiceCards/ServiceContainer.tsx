/* eslint-disable react-hooks/exhaustive-deps */
import { ServiceCard } from "./ServiceCard";
import styles from "./ServiceCards.module.scss";
import { favoriteMarkers } from "../../data/data";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/LocalStorage";
import { Service } from "../../types/types-service";
import axios from "axios";

type ServiceContainerProps = {
  servicesData: Service[];
};

export const ServiceContainer: React.FC<ServiceContainerProps> = ({
  servicesData,
}) => {
  servicesData.forEach((item) => {
    console.log(`${item.category}, fav: ${item.favorite}`);
  });

  return (
    <div className={styles.serviceContainer}>
      {servicesData.map((itm) => {
        return <ServiceCard key={itm._id} service={itm} />;
      })}
    </div>
  );
};
