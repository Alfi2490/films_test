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


    films = res.results;

    let root = document.querySelector("#root");
        
    let filmsList = document.createElement("div");
    filmsList.className = "FilmsList";
    filmsList.innerHTML = '';

    let filmsPages = document.createElement("div");
    filmsPages.className = "FilmsPages";
    filmsPages.innerHTML = '';

    root.append(filmsList);
    root.append(filmsPages);

    renderFilmsList();
    renderPages();

}).catch(err => alert(err));