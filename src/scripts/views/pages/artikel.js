// import { createArtikelTemplate } from '../templates/template-creator';

const Artikel = {
    async render() {
      return `
        <h1>tester</h1>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
      // const data = await document.getElementById('main-resto_list');
      // data.innerHTML += createArtikelTemplate();
    },
  };
   
  export default Artikel;