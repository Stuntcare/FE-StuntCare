class content5 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section class="content5 bg-gray">
      <div class="container">
        <div class="row text-center justify-content-center">
          <div class="col-12 col-md-8 col-lg-7 tester">
            <p class="h2 fw-bold">Silahkan Periksa <span class="text-warning">Gizi Balita</span> Anda Sekarang</p>
            <p class="lead deskripsi">Dapatkan informasi penting tentang kesehatan dan nutrisi anak Anda<br> untuk memastikan tumbuh kembang yang optimal dengan mengklik tombol di bawah ini.</p>
            <a href="#/kalkulator" class="btn btn-warning text-white align-content-center">Periksa Gizi</a>
          </div>
        </div>
      </div>
    </section>
      `;
  }
}

customElements.define('content5-nih', content5);
