import { useState } from "react";
import styles from "./Searchbar.module.scss";

export function Searchbar() {
  const [searchInput, setSearchInput] = useState<string>();

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  return (
    <form className={styles.searchForm}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={handleSearchInput}
      ></input>
      <button type="submit"> Search</button>
    </form>
  );
}
