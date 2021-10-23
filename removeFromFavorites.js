function removeFromFavorites(e, id) {
    e.stopPropagation();
    e.target.innerHTML = "Add to favorites";
    e.target.setAttribute("onclick", "addToFavorites(event, parentElement.id)")
    removeFavorite(id);
}