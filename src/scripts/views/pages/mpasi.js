import UrlParser from "../../routes/url-parser";
import { createMPASIDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
      <div id="mpasi" class="mpasi"></div>
    `;
  },

  async afterRender() {
    // Data MPASI yang akan digunakan
    const mpasi = {
      makanan: "Bubur bayi",
      porsi: 2,
      bahan: {
        kentang: "50gr",
        telur: "1 butir",
        kaldu_sapi: "50 ml",
      },
      cara_masak: [
        "Kupas dan potong kentang menjadi potongan kecil-kecil.",
        "Rebus kentang hingga empuk, lalu tiriskan.",
        "Kocok telur dan tambahkan ke dalam kentang yang telah dihaluskan.",
        "Panaskan kaldu sapi dan tambahkan ke dalam campuran kentang dan telur. Aduk hingga merata.",
        "Masak campuran tersebut dengan api kecil hingga mengental dan menjadi bubur yang lembut.",
        "Angkat dan biarkan dingin sebelum disajikan kepada bayi.",
      ],
      kandungan: {
        kalori: "100 kkal",
        protein: "6 gr",
        lemak: "3,5 gr",
        karbohidrat: "7,8 gr",
      },
      kategori: "6-8 bulan",
      gambar: "https://sardjito.co.id/wp-content/uploads/2019/08/stunting.jpg",
    };

    // Memasukkan hasil template ke dalam elemen dengan id "mpasi"
    const mpasiContainer = document.querySelector("#mpasi");
    mpasiContainer.innerHTML = createMPASIDetailTemplate(mpasi);
  },
};

export default Detail;
