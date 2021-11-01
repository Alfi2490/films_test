function showNowPlaying() {
    getData('now_playing').then(res => {
        films = res.results;
        nowPlayingImplementation();
    }).catch( err => alert(err));
};

function nowPlayingImplementation() {
    currentPage = 1;
    renderPages();
    renderFilmsList();
    activeMenuPosition = 'now_playing';
};