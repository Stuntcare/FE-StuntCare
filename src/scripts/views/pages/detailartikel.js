/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import ArtikelSource from '../../data/artikel-source';
import { createArtikelDetailTemplate, createArtikelTemplate, renderNotFound } from '../templates/template-creator';

const DetailArtikel = {
  async render() {
    return `
      <div id="ArtikelDetail" class="restaurant"></div>
      <div class="container mt-4">
        <div class="row" id="artikel"></div>
        <div id="pagination" class="d-flex justify-content-center mt-4"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const artikel = await ArtikelSource.detailArtikel(url.id);
    console.log(artikel);
    const detailartikelContainer = document.querySelector('#ArtikelDetail');
    const artikelContainer = document.querySelector('#artikel');
    const paginationContainer = document.querySelector('#pagination');

    const loadArtikel = async (query = '', category = 'semua', page = 1) => {
      try {
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
        console.log(data);
        console.log(pages);

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

    detailartikelContainer.innerHTML = createArtikelDetailTemplate(artikel);
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

export default DetailArtikel;
