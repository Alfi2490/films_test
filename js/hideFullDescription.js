function hideFullDescription(id) {

    filmFavorites = getFavorite().split('&');

    let inFavs = '';

    if (filmFavorites.includes(id)) {
        inFavs = 'InFavs';
    }

    let film = document.getElementById(id);
    film.className = "Film";
    film.setAttribute("onclick", "showFullDescription(id)");
    film.innerHTML = '';

    let filmData = films.filter(f => f.id === parseInt(id));

    film.innerHTML = `
        <img class="FilmPoster" src="${IMG_URL}${filmData[0].poster_path}" >
        <div class="${inFavs}">
            <h1>${filmData[0].original_title}</h1>
            <h2>${filmData[0].release_date}</h2>
        </div>
    `;
    
};
