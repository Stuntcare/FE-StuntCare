/* eslint-disable no-use-before-define */
import UrlParser from '../../routes/url-parser';
import MpasiSource from '../../data/mpasi-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createMPASIDetailTemplate, createLikeButtonTemplate, createSkeletonMpasiDetail, formatTanggal,
} from '../templates/template-creator';
import FavoriteMpasiIdb from '../../data/favorite-mpasi-idb';
import KomentarSource from '../../data/komentar-source';

const DetailMpasi = {
  async render() {
    return `
      <div id="mpasi" class="restaurant"></div>
      <div class="like" id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const mpasiContainer = document.querySelector('#mpasi');
    mpasiContainer.innerHTML = createSkeletonMpasiDetail();
    const mpasi = await MpasiSource.detailMpasi(url.id);
    mpasiContainer.innerHTML = createMPASIDetailTemplate(mpasi);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteMpasi: FavoriteMpasiIdb,
      mpasi: {
        id: mpasi.id,
        makanan: mpasi.makanan,
        porsi: mpasi.porsi,
        bahan: mpasi.bahan,
        cara_masak: mpasi.cara_masak,
        kategori: mpasi.kategori,
        gambar: mpasi.gambar,
        kalori: mpasi.kalori,
        protein: mpasi.protein,
        lemak: mpasi.lemak,
        karbohidrat: mpasi.karbohidrat,
      },
    });

    // Event Listener for Comment Form Submission
    const commentForm = document.querySelector('#commentForm');
    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nama = document.querySelector('#nama').value;
      const komentar = document.querySelector('#komentar').value;
      const mpasiId = document.querySelector('#mpasiId').value;

      const komentarData = { nama, komentar, mpasiId };

      try {
        await KomentarSource.createKomentar(komentarData);
        alert('Komentar berhasil ditambahkan!');
        displayComments(mpasiId);
      } catch (error) {
        alert('Gagal menambahkan komentar. Silakan coba lagi.');
      }
    });

    // Display comments
    displayComments(mpasi.id);
  },
};

const displayComments = async (mpasiId) => {
  const commentList = document.querySelector('#commentList');
  const comments = await KomentarSource.getKomentarByMpasiId(mpasiId);
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

export default DetailMpasi;
