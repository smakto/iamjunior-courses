import { Searchbar } from "../../components/Searchbar/Searchbar";
import { CategoryField } from "../../components/CategoryField/CategoryField";
import styles from "./HomePage.module.scss";
import { ServiceContainer } from "../../components/ServiceCards/ServiceContainer";

export function HomePage() {
  return (
    <main className={styles.mainClass}>
      <h1>Find services near you</h1>
      <h2>Expore best services in your area and beyond</h2>
      <Searchbar />
      <CategoryField />
      <ServiceContainer />
    </main>
  );
}
