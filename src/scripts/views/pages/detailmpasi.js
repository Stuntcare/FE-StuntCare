/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import MpasiSource from '../../data/mpasi-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createMPASIDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import FavoriteMpasiIdb from '../../data/favorite-mpasi-idb';

const DetailMpasi = {
  async render() {
    return `
      <div id="mpasi" class="restaurant"></div>
      <div class="like" id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const mpasi = await MpasiSource.detailMpasi(url.id);
    const mpasiContainer = document.querySelector('#mpasi');
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
  },
};

export default DetailMpasi;
