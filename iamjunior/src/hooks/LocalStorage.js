export function useLocalStorage() {
  function saveFavorites(services) {
    const updatedFavs = services.filter((items) => {
      return items.favorite === true;
    });
    localStorage.setItem("favoriteServices", JSON.stringify(updatedFavs));
  }

  function getFavorites() {
    try {
      return JSON.parse(localStorage.getItem("favoriteServices"));
    } catch (error) {
      console.error(error);
    }
  }

  return { saveFavorites, getFavorites };
}
