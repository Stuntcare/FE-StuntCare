import { createMpasiTemplate } from "../templates/template-creator";
import MpasiSource from "../../data/mpasi-source";
const Mpasi = {
  async render() {
    return `
      <h1 class="fw-bold mt-4" style="text-align: center; text-transform: uppercase">mpasi Stunting</h1>
      <div class="container mt-4" >
        <div class="row" id="mpasi">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const mpasi = await MpasiSource.getAllMpasi();
    const mpasiContainer = document.querySelector("#mpasi");
    if (mpasiContainer) {
      mpasi.forEach((mpasi) => {
        mpasiContainer.innerHTML += createMpasiTemplate(mpasi);
      });
    } else {
      console.error("Element #mpasi not found");
    }
  },
};

export default Mpasi;
