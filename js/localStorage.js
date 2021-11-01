const FAVORITE = 'FAVORITE';
const FAVS_FILMS = 'FAVS_FILMS';

function initFavorite() {
    localStorage.setItem(FAVORITE, '');
    localStorage.setItem(FAVS_FILMS, '[]');
}

function getFavorite() {
    let fav = localStorage.getItem(FAVORITE);
    return fav;
}

function getFavoriteFilms() {
    let fav = JSON.parse(localStorage.getItem(FAVS_FILMS));
    return fav;
}

function addFavorite(id, film) {

    let fav = localStorage.getItem(FAVORITE);
    let favFilms = JSON.parse(localStorage.getItem(FAVS_FILMS));

    favFilms.push(film);
    localStorage.setItem(FAVS_FILMS, JSON.stringify(favFilms));

    if (fav === '') {
        fav = id;
        localStorage.setItem(FAVORITE, fav);
        return
    }

    fav = fav + '&' + id;
    localStorage.setItem(FAVORITE, fav);

}

function removeFavorite(id) {
    let fav = localStorage.getItem(FAVORITE);
    let favFilms = JSON.parse(localStorage.getItem(FAVS_FILMS));
    favFilms = favFilms.filter(f => f.id !== parseInt(id));
    fav = fav.split('&');
    fav = fav.filter(i => i !== id);
    fav = fav.join('&');
    localStorage.setItem(FAVS_FILMS, JSON.stringify(favFilms));
    localStorage.setItem(FAVORITE, fav);
};
