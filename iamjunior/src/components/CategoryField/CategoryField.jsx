import styles from "./CategoryField.module.scss";
import { CategoryCard } from "./CategoryCard/CategoryCard";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Cleaning",
    img: "https://img.icons8.com/?size=100&id=6avKvhBwY9Oa&format=png&color=000000",
  },
  {
    name: "Repair",
    img: "https://img.icons8.com/?size=100&id=19287&format=png&color=000000",
  },
  {
    name: "Painting",
    img: "https://img.icons8.com/?size=100&id=9fS8epYOUvtK&format=png&color=000000",
  },
  {
    name: "Shifting",
    img: "https://img.icons8.com/?size=100&id=sbV9vt0Sb5VY&format=png&color=000000",
  },
  {
    name: "Plumbing",
    img: "https://img.icons8.com/?size=100&id=dHchA6ABNS7I&format=png&color=000000",
  },
  {
    name: "Electric",
    img: "https://img.icons8.com/?size=100&id=69682&format=png&color=000000",
  },
];

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
