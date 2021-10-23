const URL = "https://api.themoviedb.org/3/movie/";
const KEY = "2c46288716a18fb7aadcc2a801f3fc6b";

async function getData (indicator) {

    let response = '';

    if (indicator === 'popular') {
        response = await fetch(`${URL}${indicator}?api_key=${KEY}&language=en-US&page=1`);
    }

    if (indicator === 'now_playing') {
        response = await fetch(`${URL}${indicator}?api_key=${KEY}&language=en-US&page=1`)
    }

    if (response.ok) {
        return response.json();
    } else {
        alert("Error HTTP: " + response.status());
    }

}