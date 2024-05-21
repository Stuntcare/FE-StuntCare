

const AboutUs = {
  async render() {
    return `
    <h1 style="text-align: center;" class="fw-bold">Tentang <span class="text-warning">Kami</span></h1>
    <div class="container mt-4" >
    <about-us></about-us>
    <h1 style="text-align: center;" class="text-warning fw-bold">Advisor</h1>
    <div class="container mt-4" >
    <team-advisor></team-advisor>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;
