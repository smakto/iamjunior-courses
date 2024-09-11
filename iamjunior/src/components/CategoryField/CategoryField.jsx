import styles from "./CategoryField.module.scss";
import { CategoryCard } from "./CategoryCard/CategoryCard";

const categories = [
  {
    name: "Puzzle",
    img: "https://img.icons8.com/?size=100&id=tAjvBYh8Emhg&format=png&color=000000",
  },
  {
    name: "Shooter",
    img: "https://img.icons8.com/?size=100&id=IKhZIPPRvxIo&format=png&color=000000",
  },
  {
    name: "Defense",
    img: "https://img.icons8.com/?size=100&id=Nn5bPQ0mMNSv&format=png&color=000000",
  },
];

export function CategoryField() {
  return (
    <div className={styles.categoryDiv}>
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          icon={category.img}
          header={category.name}
          cardClass={styles.categoryCard}
        />
      ))}
    </div>
  );
}
