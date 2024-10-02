import { useParams } from "react-router-dom";
import { services } from "../../data/data";
import { useFilterCategories } from "../../hooks/FilterCategories";
import { CategoryField } from "../../components/CategoryField/CategoryField";
import { ServiceContainer } from "../../components/ServiceCards/ServiceContainer";

export function CategoryPage() {
  let { category } = useParams<{ category: string }>();
  const { data } = useFilterCategories({ services, category: category || "" });

  return (
    <div>
      <CategoryField />
      <ServiceContainer data={data || []} />
    </div>
  );
}
