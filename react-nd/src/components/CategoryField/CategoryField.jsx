import styles from "./CategoryField.module.scss";
import { CategoryCard } from "./CategoryCard/CategoryCard";
import { useNavigate } from "react-router-dom";
import { categories } from "../../data/data";

export function CategoryField() {
  const navigate = useNavigate("");

  function handleClick(category) {
    let categoryLowercase = category.toLowerCase();
    navigate(`/search/${categoryLowercase}`);
  }

  return (
    <div className={styles.categoryDiv}>
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          icon={category.img}
          iconAlt={`icon${category.name}`}
          header={category.name}
          cardClass={styles.categoryCard}
          clickEvent={() => {
            handleClick(category.name);
          }}
        />
      ))}
    </div>
  );
}
