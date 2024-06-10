import '../../components/main';
import '../../components/loader';

const konsultasi = {
  async render() {
    return `
      <section class="py-0 mt-3">
        <div class="container-fluid px-0">
          <div class="row justify-content-between align-items-center g-0">
            <div class="col-md-6 d-flex justify-content-center order-first order-md-last">
              <img src="../../images/doc1.webp" style="width: 100%; max-height: 400px; object-fit: cover;" />
            </div>
            <div class="col-md-6 text-center py-5 px-4 px-md-5">
              <h2>Dr. Sarah Fitriani, M.Sc.</h2>
              <p class="lead">
                Pakar Gizi dan Kesehatan Anak
              </p>
              <p class="mt-4 mb-5">
                "Apakah balita Anda mengalami masalah pertumbuhan? Ayo berkonsultasi dengan ahli gizi untuk mendapatkan solusi terbaik."
              </p>
              <p class="mt-4 mb-5">
                <a class="btn btn-secondary" href="#" target="_blank">
                  <i class=""></i> Hubungi Kami
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-0 mt-3">
        <div class="container-fluid px-0">
          <div class="row justify-content-between align-items-center g-0">
            <div class="col-md-6 d-flex justify-content-center order-first order-md-last">
              <img src="../../images/doc2.webp" style="width: 100%; max-height: 400px; object-fit: cover;" />
            </div>
            <div class="col-md-6 text-center py-5 px-4 px-md-5">
              <h2>Prof. Dr. Budi Susanto, Sp.GK.</h2>
              <p class="lead">
                Ahli Gizi Klinis
              </p>
              <p class="mt-4 mb-5">
                "Perhatikan pola makan balita Anda. Dapatkan saran langsung dari pakar gizi untuk meningkatkan asupan nutrisi yang dibutuhkan."
              </p>
              <p class="mt-4 mb-5">
                <a class="btn btn-secondary" href="#" target="_blank">
                  <i class=""></i> Hubungi Kami
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-0 mt-3">
        <div class="container-fluid px-0">
          <div class="row justify-content-between align-items-center g-0">
            <div class="col-md-6 d-flex justify-content-center order-first order-md-last">
              <img src="../../images/doc3.webp" style="width: 100%; max-height: 400px; object-fit: cover;" />
            </div>
            <div class="col-md-6 text-center py-5 px-4 px-md-5">
              <h2>Dra. H. Sucipto, MPH.</h2>
              <p class="lead">
                Peneliti Bidang Gizi dan Kesehatan Masyarakat
              </p>
              <p class="mt-4 mb-5">
                "Jika Anda sedang hamil, pastikan asupan gizi Anda terpenuhi untuk mencegah stunting pada janin. Temui peneliti gizi untuk informasi lebih lanjut."
              </p>
              <p class="mt-4 mb-5">
                <a class="btn btn-secondary" href="#" target="_blank">
                  <i class=""></i> Hubungi Kami
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  },
};

export default konsultasi;
