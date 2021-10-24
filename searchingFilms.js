function searchingFilms(search) {
    search = search.trim().toLowerCase();    
    getData('search', search).then(res => {
        films = res.results;
        searchFilmsImplemetation();
    }).catch(err => alert(err));

};

function searchFilmsImplemetation() {
    renderFilmsList();
    activeMenuPosition = 'search';
};