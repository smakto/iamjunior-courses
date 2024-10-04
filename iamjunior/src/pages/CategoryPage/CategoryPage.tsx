import { useParams } from "react-router-dom";
import { CategoryField } from "../../components/CategoryField/CategoryField";
import { ServiceContainer } from "../../components/ServiceCards/ServiceContainer";
import { Service } from "../../types/types-service";
import axios from "axios";
import { useState, useEffect } from "react";

export function CategoryPage() {
  let { category } = useParams<{ category: string }>();

  const [loading, setIsLoading] = useState<Boolean>(true);
  const [loadedServices, setLoadedServices] = useState<Service[]>([]);
  const [filteredData, setFilteredData] = useState<Service[]>(loadedServices);

  useEffect(() => {
    axios
      .get("http://localhost:3000/business")
      .then((response) => {
        setLoadedServices(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (category) {
      const filteredServies = loadedServices.filter(
        (itm) => itm.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredData(filteredServies);
    } else return;
  }, [loadedServices, category]);

  return loading ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : (
    <div>
      <CategoryField />
      <ServiceContainer data={filteredData} />
    </div>
  );
}
