function addToFavorites(event, id) {
    event.stopPropagation();    
    event.target.innerHTML = "Remove from favorites";
    event.target.setAttribute("onclick", "removeFromFavorites(event, parentElement.id)")
    addFavorite(id);
};