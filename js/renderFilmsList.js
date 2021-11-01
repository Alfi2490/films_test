function renderFilmsList() {    
    let filmsList = document.querySelector(".FilmsList");
    filmsList.innerHTML = '';
    listOfFilms = '';
    films.forEach(f => {

        let inFavs = '';
        let poster = '';

        if (filmFavorites.includes(f.id.toString())) {
            inFavs = 'InFavs';
        };

        if (f.poster_path === null) {
            poster = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg';
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