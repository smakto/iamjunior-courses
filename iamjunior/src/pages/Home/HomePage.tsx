import { Searchbar } from "../../components/Searchbar/Searchbar";
import { CategoryField } from "../../components/CategoryField/CategoryField";
import { ServiceContainer } from "../../components/ServiceCards/ServiceContainer";
import { useServices } from "../../hooks/useServices";
import { useState } from "react";
import { Service } from "@/types/types-service";

export const HomePage: React.FC = () => {
  const { data, error, isLoading } = useServices();
  const [searchedData, setSearchedData] = useState<Service[] | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  function searchService(input: string) {
    if (data) {
      const searchResults = data.filter(
        (item) =>
          item.category.toLowerCase().includes(input.toLowerCase()) ||
          item.name.toLowerCase().includes(input.toLowerCase()) ||
          item.contactPerson.toLowerCase().includes(input.toLowerCase())
      );

      searchResults.length < 0 && setSearchedData(searchResults);
    }
  }

  function resetSearch() {
    setSearchedData(null);
  }

  return (
    <>
      <h1>Find services near you</h1>
      <h2>Expore best services in your area and beyond</h2>
      <Searchbar searchService={searchService} resetSearch={resetSearch} />
      <CategoryField />
      {data && <ServiceContainer servicesData={searchedData || data} />}
    </>
  );
};
