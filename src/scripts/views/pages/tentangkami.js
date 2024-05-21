import RestaurantSource from "../../data/restaurant-source";

const AboutUs = {
  async render() {
    return `
        <h2>Tentang Kami</h2>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;
