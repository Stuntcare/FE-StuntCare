import "../../components/main";

const Home = {
  async render() {
    return `
      <content1-nih></content1-nih>
      <content2-nih></content2-nih>
      <content3-nih></content3-nih>
      <content4-mungkin></content4-mungkin>
      <content5-nih></content5-nih>
      <content6-nih></content6-nih>
    `;
  },

async afterRender() {
    // Fungsi ini akan dipanggil setelah render(), bisa dibiarkan kosong jika tidak dibutuhkan
  },
};

export default Home;
