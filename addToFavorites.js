function addToFavorites(event, id) {
    event.stopPropagation();    
    event.target.innerHTML = "Remove from favorites";
    event.target.setAttribute("onclick", "removeFromFavorites(event, parentElement.id)");
    let film = films.filter(f => f.id === parseInt(id));
    film = film[0];
    addFavorite(id, film);
};