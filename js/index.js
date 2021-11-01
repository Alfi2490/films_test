const IMG_URL = "https://www.themoviedb.org/t/p/w1280";
const ALT_POSTER = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg';
const FILMS_ON_PAGE = 8;
let films = [];
let filmFavorites = getFavorite();
let activeMenuPosition = '';
let currentPage = 1;


if (filmFavorites === null) {
    initFavorite();
} else {
    filmFavorites = filmFavorites.split('&');
};

getData('popular').then(res => {

    let pagesCount = '';

    films = res.results;
    let pages = Math.floor(films.length/FILMS_ON_PAGE);

    let root = document.querySelector("#root");
        
    let filmsList = document.createElement("div");
    filmsList.className = "FilmsList";
    filmsList.innerHTML = '';

    for(let i = 0; i <= pages; i++) {

        if (i === 0) {
            pagesCount = pagesCount + `<span class="Page Active" onclick="pageClick(event.target.id)" id="${i + 1}">${i + 1}</span>`;
        } else {
            pagesCount = pagesCount + `<span class="Page" onclick="pageClick(event.target.id)" id="${i + 1}">${i + 1}</span>`;
        }
        
    }

    let filmsPages = document.createElement("div");
    filmsPages.className = "FilmsPages";
    filmsPages.innerHTML = `
        ${pagesCount}
    `;

    let listOfFilms = '';

    let filmsForRender = films.slice(currentPage-1, currentPage+7);

    filmsForRender.forEach(f => {

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
    root.append(filmsPages);

}).catch(err => alert(err));