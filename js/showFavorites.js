function showFavorites() {

    films = getFavoriteFilms();
    showFavoritesImplementation();
    hidePages();

};

function hidePages() {
    const filmsPages = document.querySelector(".FilmsPages");
    filmsPages.innerHTML = '';
}

function showFavoritesImplementation() {

    let filmsList = document.querySelector(".FilmsList");
    filmsList.innerHTML = '';

    let listOfFilms = '';
    let poster = '';

    films.forEach(f => {

        if (f.poster_path === null) {
            poster = ALT_POSTER
        } else {
            poster = `${IMG_URL}${f.poster_path}`;
        }

        listOfFilms = listOfFilms + `
            <div class="FilmFavorite" id="${f.id}">
                <img class="FilmPosterFavorite" src="${poster}" >
                <div>
                    <h1>${f.original_title}</h1>
                    <h2>${f.release_date}</h2>
                </div>
                <div class="AdditionalInformationInFavs">
                    <h1>Original language: ${f.original_language}</h1>
                    <h1>Popularity: ${f.popularity}</h1>
                </div>
                <button onclick="removeFromFavorites(event, parentElement.id, 'clickFromFavorites')">Remove from favorites</button>
            </div>
        `;

    });

    filmsList.innerHTML = listOfFilms;
    activeMenuPosition = 'favorites';
}