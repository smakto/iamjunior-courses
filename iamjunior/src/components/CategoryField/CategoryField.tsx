import styles from "./CategoryField.module.scss";
import { CategoryCard } from "./CategoryCard/CategoryCard";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";

export function CategoryField() {
  const { data, error, isLoading } = useCategories();
  const navigate = useNavigate();

  function handleClick(category: string) {
    let categoryLowercase = category.toLowerCase();
    navigate(`/search/${categoryLowercase}`);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div className={styles.categoryDiv}>
      {data &&
        data.map((category) => (
          <CategoryCard
            key={category.name}
            icon={category.icon}
            iconAlt={`icon${category.name}`}
            header={category.name}
            onClick={() => handleClick(category.name)}
          />
        ))}
    </div>
  );
}
