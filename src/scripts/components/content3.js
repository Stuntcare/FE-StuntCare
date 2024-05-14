class content3 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section class="content3">
        <div class="container">
          <div class="row text-center">
            <div class="col-12">
              <h1>Kenapa Pilih StuntCare ?</h1>
            </div>
          </div>

          <div class="row text-center  justify-content-center mt-5">
            <div class="border border-warning col-12 col-sm-4 col-xl-3 pt-4 m-md-auto">
              <img
                alt="image"
                class="img-fluid"
                src="../images/undraw_family_vg76 2.png"
              />
              <h3><strong>Informasi Gizi yang Terpercaya</strong></h3>
              <p>
                StuntCare menyediakan informasi gizi balita yang didukung oleh
                penelitian ilmiah dan bukti yang kuat, sehingga Anda dapat
                mempercayai saran dan rekomendasi yang diberikan
              </p>
            </div>

            <div class="border border-warning col-12 col-sm-4 col-xl-3 m-auto pt-4 pt-sm-0">
              <img
                alt="image"
                class="img-fluid"
                src="../images/undraw_family_vg76 2.png"
              />
              <h3><strong>Kemudahan Akses dan Pengguna</strong></h3>
              <p>
                Dengan antarmuka yang ramah pengguna dan dapat diakses melalui
                berbagai perangkat, StuntCare memastikan Anda dapat dengan mudah
                mengakses informasi gizi yang diperlukan kapan saja dan di mana
                saja.
              </p>
            </div>

            <div class="border border-warning col-12 col-sm-4 col-xl-3 m-auto pt-4 pt-sm-0">
              <img
                alt="image"
                class="img-fluid"
                src="../images/undraw_family_vg76 2.png"
              />
              <h3><strong>Interaktif dan Edukatif</strong></h3>
              <p>
                StuntCare tidak hanya memberikan informasi, tetapi juga
                menyajikannya dengan cara yang interaktif dan edukatif, membantu
                Anda memahami pentingnya gizi seimbang dalam menjaga kesehatan
                anak Anda
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("content3-nih", content3);
