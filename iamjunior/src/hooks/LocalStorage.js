export function useLocalStorage({ services }) {
  function saveFavorites() {
    const updatedFavs = services.filter((items) => {
      return items.favorite === true;
    });
    localStorage.setItem("favoriteServices", JSON.stringify(updatedFavs));
  }

  function saveUserInfo() {}

  return { saveFavorites, saveUserInfo };
}
