import styles from "./CategoryField.module.scss";
import { CategoryCard } from "./CategoryCard/CategoryCard";
import { useNavigate } from "react-router-dom";
import { categories } from "../../data/data";

export function CategoryField() {
  const navigate = useNavigate();

  function handleClick(category: string) {
    let categoryLowercase = category.toLowerCase();
    navigate(`/search/${categoryLowercase}`);
  }

  return (
    <div className={styles.categoryDiv}>
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          icon={category.img}
          iconAlt={`icon${category.name}`}
          header={category.name}
          onClick={() => handleClick(category.name)}
        />
      ))}
    </div>
  );
}
