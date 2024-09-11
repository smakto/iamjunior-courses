import styles from "./MainPage.module.scss";

import { Searchbar } from "../Searchbar/Searchbar";
import { CategoryField } from "../CategoryField/CategoryField";

export function MainPage() {
  return (
    <main className={styles.mainClass}>
      <h1>Lorem Ipsum</h1>
      <h2>Heading text</h2>
      <Searchbar />
      <CategoryField />
    </main>
  );
}
