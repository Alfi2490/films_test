function renderFilmsList() {    
    let filmsList = document.querySelector(".FilmsList");
    filmsList.innerHTML = '';
    listOfFilms = '';
    films.forEach(f => {
        let inFavs = '';
        if (filmFavorites.includes(f.id.toString())) {
            inFavs = 'InFavs';
        };
        listOfFilms = listOfFilms + `
            <div class="Film" id="${f.id}" onclick="showFullDescription(id)">
                <img class="FilmPoster" src="${IMG_URL}${f.poster_path}" >
                <div class="${inFavs}">
                    <h1>${f.original_title}</h1>
                    <h2>${f.release_date}</h2>
                </div>
             </div>
         `;            
    });
    filmsList.innerHTML = listOfFilms;
};