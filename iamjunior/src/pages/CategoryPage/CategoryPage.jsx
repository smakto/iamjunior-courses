/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { services } from "../../data/data";
import { useFilterCategories } from "../../hooks/FilterCategories";
import { ServiceCard } from "../../components/ServiceCards/ServiceCard";
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/LocalStorage";

export function CategoryPage() {
  const category = useParams();
  const { data } = useFilterCategories({ services, category });
  const { getFavorites } = useLocalStorage();

  useEffect(() => {
    getFavorites();
  }, []);

  return data.map((service) => (
    <ServiceCard
      key={service.id}
      imgSrc={service.img}
      imgAlt={service.imgAlt}
      title={service.title}
      name={service.name}
      surname={service.surname}
      address={service.address}
      category={service.category}
    />
  ));
}
