import { Searchbar } from "../../components/Searchbar/Searchbar";
import { CategoryField } from "../../components/CategoryField/CategoryField";
import styles from "./HomePage.module.scss";

export function HomePage() {
  return (
    <main className={styles.mainClass}>
      <h1>Lorem Ipsum</h1>
      <h2>Heading text</h2>
      <Searchbar />
      <CategoryField />
    </main>
  );
}
