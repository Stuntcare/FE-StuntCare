class content2 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section class="content2">
        <div class="container">
          <div class="row align-items-center">
<<<<<<< HEAD
            <div class="col-12 col-md-7 ms-md-auto mt-4 mt-md-0">
=======
            <div class="col-12 col-md-6 ms-md-auto mt-4 mt-md-0">
>>>>>>> 11c1f1a1556149fcb8deca543d7081f4dabb3dd4
              <img
                alt="image"
                class="img-fluid"
                src="../images/Group 33.png"
              />
            </div>
            <div class="col-12 col-md-6 col-lg-5">
<<<<<<< HEAD
              <h2 class="subheading">Apa itu <span class="text-warning">Stunting?</span></h2>
=======
              <h2>Apa itu Stunting?</h2>
>>>>>>> 11c1f1a1556149fcb8deca543d7081f4dabb3dd4
              <p class="lead">
                Stunting adalah kondisi terhambatnya pertumbuhan fisik dan
                perkembangan otak pada anak-anak, biasanya disebabkan oleh
                kurangnya asupan gizi yang memadai dan infeksi pada masa awal
                kehidupan. Untuk mengetahui mengenai stunting lebih lengkap,
                Anda bisa klik tombol yang di bawah ini
              </p>
              <p class="mt-4">
<<<<<<< HEAD
                <a class="btn btn-outline-warning fw-bold" href="#">Baca Selengkapnya</a>
              </p>

=======
                <a class="btn btn-outline-warning" href="#"
                  >Baca Selengkapnya</a
                >
>>>>>>> 11c1f1a1556149fcb8deca543d7081f4dabb3dd4
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("content2-nih", content2);
