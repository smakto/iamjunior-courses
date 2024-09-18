import { useParams } from "react-router-dom";
import { services } from "../../data/data";
import { useFilterCategories } from "../../hooks/FilterCategories";
import { ServiceCard } from "../../components/ServiceCards/ServiceCard";
import { useEffect } from "react";

export function CategoryPage() {
  const category = useParams();
  const { data } = useFilterCategories({ services, category });

  useEffect(() => {
    JSON.parse(localStorage.getItem("favoriteServices"));
  }, []);

  return data.map((service, index) => (
    <ServiceCard
      key={index}
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
