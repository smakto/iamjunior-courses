import styles from "./CategoryField.module.scss";
import { CategoryCard } from "./CategoryCard/CategoryCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "./types-category";

export function CategoryField() {
  const [loadedCategories, setLoadedCategories] = useState<Category[] | null>(
    null
  );
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setLoadedCategories(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigate = useNavigate();

  function handleClick(category: string) {
    let categoryLowercase = category.toLowerCase();
    navigate(`/search/${categoryLowercase}`);
  }

  return (
    <>
      {loading ? (
        <div>
          <p>Data is loading</p>
        </div>
      ) : (
        <div className={styles.categoryDiv}>
          {loadedCategories &&
            loadedCategories.map((category) => (
              <CategoryCard
                key={category.name}
                icon={category.icon}
                iconAlt={`icon${category.name}`}
                header={category.name}
                onClick={() => handleClick(category.name)}
              />
            ))}
        </div>
      )}
    </>
  );
}
