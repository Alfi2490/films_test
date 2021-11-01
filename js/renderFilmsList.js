function renderFilmsList() {    

    let filmsList = document.querySelector(".FilmsList");
    filmsList.innerHTML = '';
    listOfFilms = '';

    let filmsForRender = films.slice((currentPage-1)*FILMS_ON_PAGE, (currentPage-1)*FILMS_ON_PAGE+FILMS_ON_PAGE);

    filmsForRender.forEach(f => {

        let inFavs = '';
        let poster = '';

        if (filmFavorites.includes(f.id.toString())) {
            inFavs = 'InFavs';
        };

        if (f.poster_path === null) {
            poster = ALT_POSTER;
        } else {
            poster = `${IMG_URL}${f.poster_path}`;
        }
        
        listOfFilms = listOfFilms + `
            <div class="Film" id="${f.id}" onclick="showFullDescription(id)">
                <img class="FilmPoster" src="${poster}" >
                <div class="${inFavs}">
                    <h1>${f.original_title}</h1>
                    <h2>${f.release_date}</h2>
                </div>
             </div>
         `;            
    });

    filmsList.innerHTML = listOfFilms;
};