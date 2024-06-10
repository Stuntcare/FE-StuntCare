/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import ArtikelSource from '../../data/artikel-source';
import {
  createArtikelTemplate,
  renderNotFound,
  createSkeletonArtikelItemTemplate,
} from '../templates/template-creator';

const Artikel = {
  async render() {
    return `
    <h1 class="fw-bold mt-4" style="text-align: center;">Artikel Terkait <span class="text-warning">Stunting</span></h1>
    <div class="container mt-4">
      <div class="row g-3">
        <div class="col-12 d-flex flex-nowrap">
          <div class="flex-grow-1 me-2 mb-3">
            <div class="input-group">
              <form id="searchForm" class="w-100 d-flex flex-row">
                <input type="text" id="searchKeyword" class="form-control" placeholder="Cari...">
              </form>
            </div>
          </div>
          <div class="mb-3">
            <div class="input-group">
              <select class="form-select" id="filterKategori" aria-label="Filter">
                <option value="semua">Semua Kategori</option>
                <option value="6-8 bulan">6-8 bulan</option>
                <option value="9-12 bulan">9-12 bulan</option>
                <option value="12-23 bulan">12-23 bulan</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="artikel"></div>
      <div id="pagination" class="d-flex justify-content-center mt-4"></div>
    </div>
    `;
  },

  async afterRender() {
    const artikelContainer = document.querySelector('#artikel');
    const searchForm = document.querySelector('#searchForm');
    const searchKeywordInput = document.querySelector('#searchKeyword');
    const filterKategori = document.querySelector('#filterKategori');
    const paginationContainer = document.querySelector('#pagination');

    const loadArtikel = async (query = '', category = 'semua', page = 1) => {
      try {
        artikelContainer.innerHTML = createSkeletonArtikelItemTemplate(6);
        let artikel;
        if (query || category !== 'semua') {
          if (query) {
            artikel = await ArtikelSource.searchArtikel(query);
          } else {
            artikel = await ArtikelSource.kategoriArtikel(category);
          }
        } else {
          artikel = await ArtikelSource.getArtikelByPage(page);
        }

        const { data } = artikel;
        const { pages } = artikel;

        if (!data || data.length === 0) {
          artikelContainer.innerHTML = renderNotFound();
        } else {
          artikelContainer.innerHTML = data.map(createArtikelTemplate).join('');
        }

        if (pages > 1) {
          renderPagination(pages);
          addPaginationEventListeners(loadArtikel, query, category);
        } else {
          paginationContainer.innerHTML = '';
        }
      } catch (error) {
        console.error('Error fetching artikel:', error);
        alert('Gagal memuat data Artikel. Silakan coba lagi nanti.');
      }
    };

    loadArtikel();

    if (searchForm && filterKategori) {
      searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const keyword = searchKeywordInput.value;
        const category = filterKategori.value;
        loadArtikel(keyword, category);
      });

      filterKategori.addEventListener('change', (event) => {
        const category = event.target.value;
        const keyword = searchKeywordInput.value;
        loadArtikel(keyword, category);
      });
    }
  },
};

const addPaginationEventListeners = (loadMpasi, query, category) => {
  const paginationButtons = document.querySelectorAll('#pagination button');
  paginationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const { page } = button.dataset;
      loadMpasi(query, category, page);
    });
  });
};

const renderPagination = (pages) => {
  const paginationContainer = document.querySelector('#pagination');
  if (paginationContainer) {
    let paginationHtml = '';
    for (let i = 1; i <= pages; i++) {
      paginationHtml += `<button class="btn mx-1 mb-2" data-page="${i}" style="background-color: #019973; color:white;">${i}</button>`;
    }
    paginationContainer.innerHTML = paginationHtml;
  }
};

export default Artikel;
