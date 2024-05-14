class content1 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section class="content1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 col-lg-5">
              <h1>
                Aplikasi Pengelolaan Gizi Balita untuk Pencegahan Stunting
              </h1>
              <p class="lead">
                Temukan solusi terbaik untuk mencegah stunting pada balita
                dengan StuntCare. Dapatkan informasi gizi yang tepat dan
                rekomendasi yang terpercaya untuk kesehatan optimal anak Anda.
              </p>
              <p class="mt-4">
                <a class="btn btn-warning text-white" href="#">Mari Mulai! ></a>
              </p>
            </div>
            <div class="col-12 col-md-6 ms-md-auto mt-4 mt-md-0">
              <img
                alt="image"
                class="img-fluid"
                src="../images/Group 3473674.png"
              />
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("content1-nih", content1);
