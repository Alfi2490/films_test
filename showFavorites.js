function showFavorites() {
    films = getFavoriteFilms();
    showFavoritesImplementation();
};

function showFavoritesImplementation() {
    renderFilmsList();
    activeMenuPosition = 'favorites';
}