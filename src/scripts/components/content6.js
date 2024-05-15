class content6 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section class="content6">
      <div class="container">
        <h1 class="text-center">
          Layanan <span class="text-warning">StuntCare</span>
        </h1>
        <div class="row justify-content-center">
          <div
            class="card m-2 text-center"
            style="width: 17.5rem"
          >
            <img
              src="../images/icon artikel.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="..."
              style="object-fit: contain"
            />
            <div class="card-body">
              <h5 class="card-title">Artikel</h5>
              <a class="btn btn-outline-warning fw-bold" href="#">Lihat Selengkapnya</a>
            </div>
          </div>

          <div
            class="card m-2 text-center"
            style="width: 17.5rem"
          >
            <img
              src="../images/icon kalkulator.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="..."
              style="object-fit: contain"
            />
            <div class="card-body">
              <h5 class="card-title">Kalkulator Makanan</h5>
              <a class="btn btn-outline-warning fw-bold" href="#">Lihat Selengkapnya</a>
            </div>
          </div>

          <div
            class="card m-2 text-center"
            style="width: 17.5rem"
          >
            <img
              src="../images/icon makanan.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="..."
              style="object-fit: contain"
            />
            <div class="card-body">
              <h5 class="card-title">Gizi Makanan</h5>
              <a class="btn btn-outline-warning fw-bold" href="#">Lihat Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("content6-nih", content6);
