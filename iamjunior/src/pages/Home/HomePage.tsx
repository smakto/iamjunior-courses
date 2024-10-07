import { Searchbar } from "../../components/Searchbar/Searchbar";
import { CategoryField } from "../../components/CategoryField/CategoryField";
import { ServiceContainer } from "../../components/ServiceCards/ServiceContainer";
import { useServices } from "../../hooks/useServices";

export const HomePage: React.FC = () => {
  const { data, error, isLoading } = useServices();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <>
      <h1>Find services near you</h1>
      <h2>Expore best services in your area and beyond</h2>
      <Searchbar />
      <CategoryField />
      {data && <ServiceContainer servicesData={data} />}
    </>
  );
};
