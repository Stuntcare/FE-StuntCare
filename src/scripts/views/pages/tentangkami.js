const AboutUs = {
  async render() {
    return `
    <about-us></about-us>
    <div class="container my-5" data-aos="">
        <h1 style="text-align: center;" class="fw-bold mb-5">Tentang <span class="text-warning">Kami</span></h1>
        <div class="row">
          <div class="col-sm-6 col-md-4 mb-4">
              <div class="card" data-aos="zoom-out-right">
                  <img data-src="../images/fery-large.webp" class="card-img-top lazyload" alt="muhammad fery syahputra" style="width: 150px height: 150px" crossorigin="anonymous" >
                  <div class="card-body text-center" >
                      <h5 class="card-title text-uppercase fw-bold">Muhammad fery syahputra</h5>
                      <p class="card-text text-capitalize">front-end developer</p>
                      <div class="d-flex justify-content-center " >
                          <a href="https://github.com/MuhammadFerySyahputra" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-github"></i></a>
                          <a href="https://www.linkedin.com/in/muhammadferysyahputra/" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-linkedin"></i></a>
                          <a href="https://www.instagram.com/ferysyahputra456" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-instagram"></i></a>
                          <a href="https://t.me/Ferys2343" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-telegram"></i></a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-sm-6 col-md-4 mb-4">
              <div class="card" data-aos="zoom-out-down">
                  <img data-src="../images/firza.jpg" class="card-img-top lazyload" alt="Team Member 2" crossorigin="anonymous" >
                  <div class="card-body text-center">
                      <h5 class="card-title text-uppercase fw-bold">Muhammad Firza Fernanda</h5>
                      <p class="card-text text-capitalize">project manager</p>
                      <div class="d-flex justify-content-center ">
                  <a href="https://github.com/MuhammadFirzaFernanda17" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-github"></i></a>
                  <a href="https://www.linkedin.com/in/muhammad-firza-fernanda-84abb3221/" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-linkedin"></i></a>
                  <a href="https://www.instagram.com/benarinipiers17/" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-instagram"></i></a>
                  <a href="https://t.me/ngekngek17" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-telegram"></i></a>
              </div>
                  </div>
              </div>
          </div>
          <div class="col-sm-6 col-md-4 mb-4">
              <div class="card" data-aos="zoom-out-left">
                  <img data-src="../images/rizq.jpg" class="card-img-top lazyload" alt="Team Member 3" crossorigin="anonymous" >
                  <div class="card-body text-center">
                      <h5 class="card-title text-uppercase fw-bold">Muhammad Rizq Saputra</h5>
                      <p class="card-text text-capitalize">back-end developer</p>
                      <div class="d-flex justify-content-center ">
                  <a href="https://github.com/Rizq-Saputra" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-github"></i></a>
                  <a href="https://www.linkedin.com/in/muhammad-rizq-saputra-378088281/" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-linkedin"></i></a>
                  <a href="https://www.instagram.com/rizqsptr/" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-instagram"></i></a>
                  <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-telegram"></i></a>
              </div>
                  </div> 
              </div>
          </div>
        </div>
    </div>
    <div class="container mt-4" >
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
