class content6 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section class="content6 mt-4">
      <div class="container" style="
      margin-top: 100px;">
        <h1 class="text-center fw-bold">
          Layanan <span class="text-warning">StuntCare</span>
        </h1>
        <div class="row justify-content-center">
          <div
            class="shadow p-3 mb-5 card m-2 mx-4 text-center"
            style="width: 15rem"
          >
            <img
              src="../images/icon artikel.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="..."
              style="object-fit: contain; height: 100px;"
            />
            <div class="card-body">
              <h5 class="card-title">Artikel</h5>
              <a class="btn btn-outline-warning fw-bold mt-3" style="font-size: 14px" href="#">Lihat Selengkapnya</a>
            </div>
          </div>

          <div
            class="shadow p-3 mb-5 card m-2 mx-4 text-center"
            style="width: 15rem"
          >
            <img
              src="../images/icon kalkulator.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="..."
              style="object-fit: contain; height: 100px;"
            />
            <div class="card-body">
              <h5 class="card-title">Kalkulator Gizi</h5>
              <a class="btn btn-outline-warning fw-bold mt-3" style="font-size: 14px" href="#">Lihat Selengkapnya</a>
            </div>
          </div>

          <div
            class="shadow p-3 mb-5 card m-2 mx-4 text-center"
            style="width: 15rem"
            >
            <img
              src="../images/icon makanan.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="..."
              style="object-fit: contain; height: 100px;"
            />
            <div class="card-body">
              <h5 class="card-title">Gizi Makanan</h5>
              <a class="btn btn-outline-warning fw-bold mt-3" style="font-size: 14px" href="#">Lihat Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("content6-nih", content6);
