class content3 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section class="content3">
      <div class="container">
        <h1 class="text-center">
          Kenapa Pilih <span class="text-warning">StuntCare?</span>
        </h1>
        <div class="row justify-content-center">
          <div
            class="card m-2 highlight-hover text-center"
            style="width: 20rem"
          >
            <img
              src="../images/undraw_family_vg76 2.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="..."
              style="height: 200px; object-fit: contain"
            />
            <div class="card-body">
              <h5 class="card-title">Informasi Gizi yang Terpercaya</h5>
              <p class="card-text">
                StuntCare menyediakan informasi gizi balita yang didukung oleh
                penelitian ilmiah dan bukti yang kuat, sehingga Anda dapat
                mempercayai saran dan rekomendasi yang diberikan
              </p>
            </div>
          </div>

          <div
            class="card m-2 highlight-hover text-center"
            style="width: 20rem"
          >
            <img
              src="../images/Group 3473678.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="..."
              style="height: 200px; object-fit: contain"
            />
            <div class="card-body">
              <h5 class="card-title">Kemudahan Akses dan Pengguna</h5>
              <p class="card-text">
                Dengan antarmuka yang ramah pengguna dan dapat diakses melalui
                berbagai perangkat, StuntCare memastikan Anda dapat dengan mudah
                mengakses informasi gizi yang diperlukan kapan saja dan di mana
                saja.
              </p>
            </div>
          </div>

          <div
            class="card m-2 highlight-hover text-center"
            style="width: 20rem"
          >
            <img
              src="../images/undraw_fatherhood_-7-i19 2.png"
              class="card-img-top p-3 mx-auto d-block"
              alt="..."
              style="height: 200px; object-fit: contain"
            />
            <div class="card-body">
              <h5 class="card-title">Interaktif dan Edukatif</h5>
              <p class="card-text">
                StuntCare tidak hanya memberikan informasi, tetapi juga
                menyajikannya dengan cara yang interaktif dan edukatif, membantu
                Anda memahami pentingnya gizi seimbang dalam menjaga kesehatan
                anak Anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("content3-nih", content3);
