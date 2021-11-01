function showPopular() {
    getData('popular').then(res => {
        films = res.results;
        showPopularImplementation();
    }).catch(err => alert(err));
};

function showPopularImplementation() {
    currentPage = 1;
    renderPages();
    renderFilmsList();
    activeMenuPosition = 'popular';
}