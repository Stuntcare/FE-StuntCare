class content4 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <section class="content4">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-md-6 col-lg-5">
                <h1 class="fw-bold" style="margin-top: 15px">
                  Makanan <span class="text-warning"> Bernutrisi </span><br> dan <span class="text-warning"> Bergizi </span> untuk<br> <span class="text-warning">Balita</span> Anda
                </h1>
                <p class="lead">
                Dapatkan informasi lengkap mengenai gizi makanan yang diperlukan untuk pertumbuhan optimal balita Anda. 
                Temukan rekomendasi gizi yang dapat dipercaya untuk menjaga kesehatan anak Anda.
                </p>
                <p class="mt-4">
                  <a class="btn btn-warning text-white" href="#">Gizi Makanan ></a>
                </p>
              </div>
              <div class="col-12 col-md-6 ms-md-auto mt-4 mt-md-0">
                <img
                  alt="image"
                  class="img-fluid p-5"
                  src="../images/fotomakanan.png"
                  
                />
              </div>
            </div>
          </div>
        </section>
      `;
  }
}

customElements.define("content4-mungkin", content4);
