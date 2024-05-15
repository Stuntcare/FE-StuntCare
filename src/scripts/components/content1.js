class content1 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section class="content1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 col-lg-5">
<<<<<<< HEAD
              <h1 class="heading-title">
                Aplikasi Edukasi<br><span class="text-warning">Gizi Balita</span> untuk Pencegahan <span class="text-warning">Stunting</span>
              </h1>
              <p class="lead">
                Temukan solusi terbaik untuk <span class="text-warning">mencegah stunting</span> pada balita
                dengan <span class="text-warning">StuntCare</span>. Dapatkan informasi gizi yang tepat dan
=======
              <h1>
                Aplikasi Pengelolaan Gizi Balita untuk Pencegahan Stunting
              </h1>
              <p class="lead">
                Temukan solusi terbaik untuk mencegah stunting pada balita
                dengan StuntCare. Dapatkan informasi gizi yang tepat dan
>>>>>>> 11c1f1a1556149fcb8deca543d7081f4dabb3dd4
                rekomendasi yang terpercaya untuk kesehatan optimal anak Anda.
              </p>
              <p class="mt-4">
                <a class="btn btn-warning text-white" href="#">Mari Mulai! ></a>
              </p>
            </div>
            <div class="col-12 col-md-6 ms-md-auto mt-4 mt-md-0">
              <img
                alt="image"
<<<<<<< HEAD
                class="img-fluid image__1"
=======
                class="img-fluid"
>>>>>>> 11c1f1a1556149fcb8deca543d7081f4dabb3dd4
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
