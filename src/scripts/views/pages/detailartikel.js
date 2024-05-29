import UrlParser from "../../routes/url-parser";
import ArtikelSource from "../../data/artikel-source";
import { createArtikelDetailTemplate } from "../templates/template-creator";

const DetailArtikel = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const artikel = await ArtikelSource.detailArtikel(url.id);
    console.log(artikel);
    const artikelContainer = document.querySelector("#restaurant");
    artikelContainer.innerHTML = createArtikelDetailTemplate(artikel);
  },
};

export default DetailArtikel;
