function pageClick(page) {        

    const activePage = document.getElementById(currentPage);
    activePage.className = "Page";

    currentPage = page;

    const willBeActivePage = document.getElementById(currentPage);
    willBeActivePage.className = "Page Active";

    renderFilmsList();

}