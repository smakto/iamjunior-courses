import { useState } from "react";
import styles from "./Searchbar.module.scss";

type SearchBarProps = {
  searchService: (input: string) => void;
  resetSearch: () => void;
};

export const Searchbar: React.FC<SearchBarProps> = ({
  searchService,
  resetSearch,
}) => {
  const [searchInput, setSearchInput] = useState<string>();

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchInput) searchService(searchInput);
      }}
      className={styles.searchForm}
    >
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={handleSearchInput}
      ></input>
      <button type="submit"> Search</button>
      <button type="button" onClick={resetSearch}>
        Reset search
      </button>
    </form>
  );
};
