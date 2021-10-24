const URL = "https://api.themoviedb.org/3/movie/";
const SEARCH_URL = "https://api.themoviedb.org/3/search/";
const KEY = "2c46288716a18fb7aadcc2a801f3fc6b";

async function getData (indicator, search) {

    let response = '';

    if (indicator === 'popular') {
        response = await fetch(`${URL}${indicator}?api_key=${KEY}&language=en-US&page=1`);
    }

    if (indicator === 'now_playing') {
        response = await fetch(`${URL}${indicator}?api_key=${KEY}&language=en-US&page=1`)
    }

    if (indicator === 'search') {
        response = await fetch(`${SEARCH_URL}movie?api_key=${KEY}&language=en-US&query=${search}&page=1`);
    }

    if (response.ok) {
        return response.json();
    } else {
        alert("Error HTTP: " + response.status());
    }

}