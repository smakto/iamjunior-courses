import { useParams } from "react-router-dom";
import { services } from "../../data/data";
import { useFilterCategories } from "../../hooks/FilterCategories";
import { ServiceCard } from "../../components/ServiceCards/ServiceCard";

export function CategoryPage() {
  const category = useParams();
  const { data } = useFilterCategories({ services, category });

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
