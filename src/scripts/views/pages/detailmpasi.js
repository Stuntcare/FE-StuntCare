import UrlParser from "../../routes/url-parser";
import MpasiSource from "../../data/mpasi-source";
import { createMPASIDetailTemplate } from "../templates/template-creator";

const DetailMpasi = {
  async render() {
    return `
      <div id="mpasi" class="restaurant">      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const mpasi = await MpasiSource.detailMpasi(url.id);
    console.log(mpasi);
    const mpasiContainer = document.querySelector("#mpasi");
    mpasiContainer.innerHTML = createMPASIDetailTemplate(mpasi);
  },
};

export default DetailMpasi;
