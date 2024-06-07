import '../../components/main';
import '../../components/loader';

const Home = {
  async render() {
    return `
      <content1-nih></content1-nih>
      <content2-nih></content2-nih>
      <content3-nih></content3-nih>
      <content4-mungkin></content4-mungkin>
      <content5-nih></content5-nih>
      <content6-nih></content6-nih>
      <custom-loader></custom-loader>
    `;
  },

  async afterRender() {
    const loader = document.querySelector('custom-loader');

    if (loader) {
      loader.show();
    }

    setTimeout(() => {
      if (loader) {
        loader.hide();
      }
    }, 2000);
  },
};

export default Home;
