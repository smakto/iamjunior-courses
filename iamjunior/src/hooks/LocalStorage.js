export function useLocalStorage() {
  function saveFavorites(services) {
    const updatedFavs = services.filter((items) => {
      return items.favorite === true;
    });
    localStorage.setItem("favoriteServices", JSON.stringify(updatedFavs));
  }

  function saveUserInfo(userInfo) {
    localStorage.setItem("loggedUserInfo", JSON.stringify(userInfo));
  }

  return { saveFavorites, saveUserInfo };
}
