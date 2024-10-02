import { Service } from "../components/ServiceCards/types-service";

export function useLocalStorage() {
  function saveFavorites(services: Service[]) {
    const updatedFavs = services.filter((items) => items.favorite === true);
    localStorage.setItem("favoriteServices", JSON.stringify(updatedFavs));
  }

  function getFavorites() {
    try {
      let storedFavorites = localStorage.getItem("favoriteServices");

      return storedFavorites
        ? (JSON.parse(storedFavorites) as Service[])
        : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return { saveFavorites, getFavorites };
}
