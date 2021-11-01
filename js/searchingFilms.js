const titleInput = document.getElementById('Title');
titleInput.addEventListener('input', updateTitle);
let searchTimeOut;

let title = '';

function updateTitle(e) {

    clearTimeout(searchTimeOut);    
    title = e.target.value.trim().toLowerCase();
    if(title.length <= 1) {
        return
    } else {
        searchTimeOut = setTimeout(searchingFilms, 1000);
    }    

}

function searchingFilms() {    

    getData('search', title).then(res => {
        films = res.results;
        searchFilmsImplemetation();
    }).catch(err => alert(err));

};

function searchFilmsImplemetation() {

    renderFilmsList();
    activeMenuPosition = 'search';

};