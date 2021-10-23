function removeFromFavorites(e, id, indicator) {
    e.stopPropagation();
    if (indicator === 'clickFromFavorites') {
        e.target.parentElement.remove();
    };
    e.target.innerHTML = "Add to favorites";
    e.target.setAttribute("onclick", "addToFavorites(event, parentElement.id)");
    removeFavorite(id);
}