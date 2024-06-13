/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import ArtikelSource from '../../data/artikel-source';
import KomentarSource from '../../data/komentar-source';
import {
  createArtikelDetailTemplate, createArtikelTemplate, renderNotFound, createSkeletonArtikelDetail, formatTanggal,
} from '../templates/template-creator';

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
    const detailartikelContainer = document.querySelector('#ArtikelDetail');
    detailartikelContainer.innerHTML = createSkeletonArtikelDetail();
    const artikel = await ArtikelSource.detailArtikel(url.id);
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
          artikel = await ArtikelSource.getDetailArtikelByPage(page);
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

    detailartikelContainer.innerHTML = createArtikelDetailTemplate(artikel);

    // Event Listener for Comment Form Submission
    const commentForm = document.querySelector('#commentForm');
    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nama = document.querySelector('#nama').value;
      const komentar = document.querySelector('#komentar').value;
      const artikelId = document.querySelector('#artikelId').value;

      const komentarData = { nama, komentar, artikelId };

      try {
        await KomentarSource.createKomentar(komentarData);
        alert('Komentar berhasil ditambahkan!');
        displayComments(artikelId);
      } catch (error) {
        alert('Gagal menambahkan komentar. Silakan coba lagi.');
      }
    });

    // Display comments
    displayComments(artikel.id);
  },
};

const displayComments = async (artikelId) => {
  const commentList = document.querySelector('#commentList');
  const comments = await KomentarSource.getKomentarByArtikelId(artikelId);
  commentList.innerHTML = `
    <h4 class="mb-3 pb-2 border-bottom fw-bold">Komentar</h4>
    ${comments.map((comment) => `
      <div class="mb-3">
        <h5>${comment.nama}</h5>
        <p>${comment.komentar}</p>
        <small class="text-muted">${formatTanggal(comment.createdAt)}</small>
      </div>
    `).join('')}
  `;
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
