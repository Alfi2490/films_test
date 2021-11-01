function sortByName() {

    films.sort((a,b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    });

    if (activeMenuPosition === 'popular') {
        showPopularImplementation();
    };

    if (activeMenuPosition === 'now_playing') {
        nowPlayingImplementation();
    };
    
    if (activeMenuPosition === 'favorites') {
        showFavoritesImplementation();
    };

    if (activeMenuPosition === 'search') {
        searchFilmsImplemetation();
    }
    
};