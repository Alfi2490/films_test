function renderPages() {

    const filmsPages = document.querySelector(".FilmsPages");
    filmsPages.innerHTML = '';

    let pagesCount = '';
    let pages = Math.floor(films.length/FILMS_ON_PAGE);

    for(let i = 0; i <= pages; i++) {
        if (i+1 === parseInt(currentPage)) {
            pagesCount = pagesCount + `<span class="Page Active" onclick="pageClick(event.target.id)" id="${i + 1}">${i + 1}</span>`;
        } else {
            pagesCount = pagesCount + `<span class="Page" onclick="pageClick(event.target.id)" id="${i + 1}">${i + 1}</span>`;
        }
        
    };
    
    filmsPages.innerHTML = `${pagesCount}`;
}