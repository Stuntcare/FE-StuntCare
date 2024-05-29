import ArtikelSource from "../../data/artikel-source";
import UrlParser from '../../routes/url-parser';
import { createArtikelTemplate } from "../templates/template-creator";
// ! import RestaurantSource from "../../data/restaurant-source";

const Artikel = {
  async render() {
    return `
      <h1 class="fw-bold mt-4" style="text-align: center;">Artikel Terkait <span class="text-warning">Stunting</span></h1>
      <div class="container mt-4" >
        <div class="row" id="artikel">
        </div>
      </div>
    `;
  },

  async afterRender() {
    // ! MANGGIL DATA
    // const restaurants = await RestaurantSource.getListOfRestaurants();
    // const restaurantsContainer = document.querySelector("#restaurants");
    // if (restaurantsContainer) {
    //   restaurants.forEach((restaurant) => {
    //     restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    //   });
    // } else {
    //   console.error("Element #restaurants not found");
    // }

    // const mpasi = await MpasiSource.getAllMpasi();
    // const mpasiContainer = document.querySelector("#restaurants");
    // if (mpasiContainer) {
    //   mpasi.forEach((mpasi) => {
    //     mpasiContainer.innerHTML += createMpasiTemplate(mpasi);
    //   });
    // } else {
    //   console.error("Element #mpasi not found");
    // }

    const artikel = await ArtikelSource.getAllArtikel();
    const artikelContainer = document.querySelector("#artikel");
    if (artikelContainer) {
      artikel.forEach((artikel) => {
        artikelContainer.innerHTML += createArtikelTemplate(artikel);
      });
    } else {
      console.error("Element #artikel not found");
    }
  },
};

export default Artikel;
