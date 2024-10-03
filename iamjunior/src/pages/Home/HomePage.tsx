import { Searchbar } from "../../components/Searchbar/Searchbar";
import { CategoryField } from "../../components/CategoryField/CategoryField";
import { ServiceContainer } from "../../components/ServiceCards/ServiceContainer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Service } from "../../components/ServiceCards/types-service";

export const HomePage: React.FC = () => {
  const [loading, setIsLoading] = useState<Boolean>(true);
  const [loadedServices, setLoadedServices] = useState<Service[]>([]);

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

  return (
    <>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <h1>Find services near you</h1>
          <h2>Expore best services in your area and beyond</h2>
          <Searchbar />
          <CategoryField />
          <ServiceContainer data={loadedServices} />
        </>
      )}
    </>
  );
};
