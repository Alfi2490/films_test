const FAVORITE = 'FAVORITE';

function initFavorite() {
    localStorage.setItem(FAVORITE, '');
}

function getFavorite() {
    let fav = localStorage.getItem(FAVORITE);
    return fav;
}

function addFavorite(id) {
    let fav = localStorage.getItem(FAVORITE);
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
    fav = fav.split('&');
    let index = fav.indexOf(id);
    fav = fav.filter(i => i !== id);
    localStorage.setItem(FAVORITE, fav);
}
