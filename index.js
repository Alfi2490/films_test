const IMG_URL = "https://www.themoviedb.org/t/p/w1280";
let films = [];
let filmFavorites = getFavorite();
let activeMenuPosition = '';

if (filmFavorites === null) {
    initFavorite();
} else {
    filmFavorites = filmFavorites.split('&');
};

getData('popular').then(res => {

    films = res.results;
    let root = document.querySelector("#root");
        
    let filmsList = document.createElement("div");
    filmsList.className = "FilmsList";
    filmsList.innerHTML = '';

    let listOfFilms = '';

    films.forEach(f => {

        let inFavs = '';

        if (filmFavorites === null) {
            filmFavorites = [];
        } else if (filmFavorites.includes(f.id.toString())) {
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
    root.append(filmsList);

}).catch(err => alert(err));