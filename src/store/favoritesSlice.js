export const createFavoritesSlice = (set, get) => ({
    favorites: [],

    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id);
    },

    handleClickFavorite: (recipe) => {
        const isFavorite = get().favoriteExist(recipe.idDrink);

        if (isFavorite) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }));
            get().addNotification(`${recipe.strDrink} eliminado de favoritos`, "error");
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }));
            get().addNotification(`${recipe.strDrink} agregado a favoritos`, "success");
        }

        localStorage.setItem("favorites", JSON.stringify(get().favorites));
    },

    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            });
        }
    }
});
