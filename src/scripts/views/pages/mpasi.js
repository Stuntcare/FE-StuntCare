/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import {
  createMpasiTemplate,
  renderNotFound,
  createSkeletonMpasiItemTemplate,
} from '../templates/template-creator';
import MpasiSource from '../../data/mpasi-source';
import FavoriteMpasiIdb from '../../data/favorite-mpasi-idb';

const Mpasi = {
  async render() {
    return `
      <h1 class="fw-bold mt-4" style="text-align: center;"><span class="text-warning">Makanan</span> Pendamping Air Susu Ibu</h1>
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
                  <option value="Favorite">Favorite</option>
                  <option value="6-8 bulan">6-8 bulan</option>
                  <option value="9-12 bulan">9-12 bulan</option>
                  <option value="12-23 bulan">12-23 bulan</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row" id="mpasi"></div>
        <div id="pagination" class="d-flex justify-content-center mt-4"></div>
      </div>
    `;
  },

  async afterRender() {
    const mpasiContainer = document.querySelector('#mpasi');
    const searchForm = document.querySelector('#searchForm');
    const searchKeywordInput = document.querySelector('#searchKeyword');
    const filterKategori = document.querySelector('#filterKategori');
    const paginationContainer = document.querySelector('#pagination');

    const loadMpasi = async (query = '', category = 'semua', page = 1) => {
      try {
        // Render skeletons
        mpasiContainer.innerHTML = createSkeletonMpasiItemTemplate(12);

        let mpasi;

        if (query || category !== 'semua') {
          if (query) {
            mpasi = await MpasiSource.searchMpasi(query);
          } else {
            mpasi = await MpasiSource.kategoriMpasi(category);
          }
        } else {
          mpasi = await MpasiSource.getMpasiByPage(page);
        }

        const { data, pages } = mpasi;

        if (!data || data.length === 0) {
          mpasiContainer.innerHTML = renderNotFound();
        } else {
          mpasiContainer.innerHTML = data.map(createMpasiTemplate).join('');
        }

        if (category === 'Favorite') {
          const favoriteMpasi = await FavoriteMpasiIdb.getAllMpasi();
          if (favoriteMpasi.length > 0) {
            mpasiContainer.innerHTML = favoriteMpasi.map(createMpasiTemplate).join('');
          } else {
            mpasiContainer.innerHTML = renderNotFound();
          }
        }

        if (pages > 1) {
          renderPagination(pages);
          addPaginationEventListeners(loadMpasi, query, category);
        } else {
          paginationContainer.innerHTML = '';
        }
      } catch (error) {
        console.error('Error fetching mpasi:', error);
        alert('Gagal memuat data MPASI. Silakan coba lagi nanti.');
      }
    };

    loadMpasi();

    if (searchForm && filterKategori) {
      searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const keyword = searchKeywordInput.value;
        const category = filterKategori.value;
        loadMpasi(keyword, category);
      });

      filterKategori.addEventListener('change', (event) => {
        const category = event.target.value;
        const keyword = searchKeywordInput.value;
        loadMpasi(keyword, category);
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

export default Mpasi;
