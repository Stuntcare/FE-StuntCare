const search = async () => {
    const searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const keyword = document.getElementById("searchKeyword").value;
        const searchUrl = `?q=${keyword}`;
        await loadPageData(searchUrl);
        });
    }
};

const filter = async () => {
    const filterKategori = document.getElementById("filter-kategori");
    if (filterKategori) {
        filterKategori.addEventListener("change", async (e) => {
        const keyword = e.target.value;
        if (keyword !== "semua") {
            filter = `?kategori=${keyword}`;
        }
        await loadPageData(filter);
        });
    }
};

export { search, filter };
