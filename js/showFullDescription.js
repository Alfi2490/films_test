function showFullDescription(id) {

    let film = document.getElementById(id);
    film.className = "FilmFullDescription";
    film.setAttribute("onclick", "hideFullDescription(id)");
    film.innerHTML = '';

    let filmData = films.filter(f => f.id === parseInt(id));

    let favoriteButton = '';

    let poster = '';

    if (filmFavorites.includes(id)) {
        favoriteButton = `
            <button
                class="RemoveFromFavoritesButton"
                onclick="removeFromFavorites(event, parentElement.id)"
            >
                Remove from favorites
            </button>
        `;
    } else {
        favoriteButton = `
            <button 
                class="AddToFavoritesButtton" 
                onclick="addToFavorites(event, parentElement.id)"
            >
                Add to favorites
            </button>
        `;
    }

    if (filmData[0].poster_path === null) {
        poster = ALT_POSTER;
    } else {
        poster = `${IMG_URL}${filmData[0].poster_path}`;
    }

    film.innerHTML = `
        <img class="FullDescriptionFilmPoster" src="${poster}" >
        <div class="FullDescriptionTitleWithDate">
            <h1>${filmData[0].title}</h1>
            <h2>${filmData[0].release_date}</h2>
        </div>
        <p>${filmData[0].overview}</p>
        ${favoriteButton}
    `;
};