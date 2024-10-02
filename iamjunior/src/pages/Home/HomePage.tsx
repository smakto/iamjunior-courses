import { Searchbar } from "../../components/Searchbar/Searchbar";
import { CategoryField } from "../../components/CategoryField/CategoryField";
import { ServiceContainer } from "../../components/ServiceCards/ServiceContainer";
import { services } from "../../data/data";

export const HomePage: React.FC = () => {
  return (
    <>
      <h1>Find services near you</h1>
      <h2>Expore best services in your area and beyond</h2>
      <Searchbar />
      <CategoryField />
      <ServiceContainer data={services} />
    </>
  );
};
