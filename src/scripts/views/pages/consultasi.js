/* eslint-disable no-empty-function */
import '../../components/main';

const konsultasi = {
  async render() {
    return `
      <section class="konsultasi py-3 mt-3">
        <div class="container">
        <h1 class="text-center fw-bold mb-4" tabindex="0">Konsultasi</h1>
          <div class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col">
              <div class="card h-100 d-flex flex-row">
                <img tabindex="0" src="../images/doc1-large.jpg" class="card-img-left" style="object-fit: cover; width: 250px; height: 250px;" alt="Dr. Sarah Fitriani, M.Sc.">
                <div class="card-body d-flex flex-column justify-content-center">
                  <h5 tabindex="0" class="card-title fw-bold text-center">Dr. Sarah Fitriani, M.Sc.</h5>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Pakar Gizi dan Kesehatan Anak
                  </p>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Apakah balita Anda mengalami masalah pertumbuhan? Ayo berkonsultasi dengan ahli gizi untuk mendapatkan solusi terbaik.
                  </p>
                  <a tabindex="0" href="#" class="btn btn-custom align-self-center align-content-center" target="_blank"><i class="bi bi-whatsapp"></i> Hubungi Dokter</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 d-flex flex-row">
                <img tabindex="0" src="../images/doc2-large.jpg" class="card-img-left" style="object-fit: cover; width: 250px; height: 250px;" alt="Prof. Dr. Budi Susanto, Sp.GK.">
                <div class="card-body d-flex flex-column justify-content-center">
                  <h5 tabindex="0" class="card-title fw-bold text-center">Prof. Dr. Budi Susanto, Sp.GK.</h5>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Ahli Gizi Klinis
                  </p>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Perhatikan pola makan balita Anda. Dapatkan saran langsung dari pakar gizi untuk meningkatkan asupan nutrisi yang dibutuhkan.
                  </p>
                  <a tabindex="0" href="#" class="btn btn-custom align-self-center align-content-center" target="_blank"><i class="bi bi-whatsapp"></i> Hubungi Dokter</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 d-flex flex-row">
                <img tabindex="0" src="../images/doc3-large.jpg" class="card-img-left" style="object-fit: cover; width: 250px; height: 250px;" alt="Dra. H. Sucipto, MPH.">
                <div class="card-body d-flex flex-column justify-content-center">
                  <h5 tabindex="0" class="card-title fw-bold text-center">Dra. H. Sucipto, MPH.</h5>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Peneliti Bidang Gizi dan Kesehatan Masyarakat
                  </p>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Jika Anda sedang hamil, pastikan asupan gizi Anda terpenuhi untuk mencegah stunting pada janin. Temui peneliti gizi untuk informasi lebih lanjut.
                  </p>
                  <a tabindex="0" href="#" class="btn btn-custom align-self-center align-content-center" target="_blank"><i class="bi bi-whatsapp"></i> Hubungi Dokter</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 d-flex flex-row">
                <img tabindex="0" src="../images/doc1-large.jpg" class="card-img-left" style="object-fit: cover; width: 250px; height: 250px;" alt="Dr. Sarah Fitriani, M.Sc.">
                <div class="card-body d-flex flex-column justify-content-center">
                  <h5 tabindex="0" class="card-title fw-bold text-center">Dr. Sarah Fitriani, M.Sc.</h5>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Pakar Gizi dan Kesehatan Anak
                  </p>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Apakah balita Anda mengalami masalah pertumbuhan? Ayo berkonsultasi dengan ahli gizi untuk mendapatkan solusi terbaik.
                  </p>
                  <a tabindex="0" href="#" class="btn btn-custom align-self-center align-content-center" target="_blank"><i class="bi bi-whatsapp"></i> Hubungi Dokter</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 d-flex flex-row">
                <img tabindex="0" src="../images/doc2-large.jpg" class="card-img-left" style="object-fit: cover; width: 250px; height: 250px;" alt="Prof. Dr. Budi Susanto, Sp.GK.">
                <div class="card-body d-flex flex-column justify-content-center">
                  <h5 tabindex="0" class="card-title fw-bold text-center">Prof. Dr. Budi Susanto, Sp.GK.</h5>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Ahli Gizi Klinis
                  </p>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Perhatikan pola makan balita Anda. Dapatkan saran langsung dari pakar gizi untuk meningkatkan asupan nutrisi yang dibutuhkan.
                  </p>
                  <a tabindex="0" href="#" class="btn btn-custom align-self-center align-content-center" target="_blank"><i class="bi bi-whatsapp"></i> Hubungi Dokter</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 d-flex flex-row">
                <img tabindex="0" src="../images/doc3-large.jpg" class="card-img-left" style="object-fit: cover; width: 250px; height: 250px;" alt="Dra. H. Sucipto, MPH.">
                <div class="card-body d-flex flex-column justify-content-center">
                  <h5 tabindex="0" class="card-title fw-bold text-center">Dra. H. Sucipto, MPH.</h5>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Peneliti Bidang Gizi dan Kesehatan Masyarakat
                  </p>
                  <p tabindex="0" class="card-text text-center" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                    Jika Anda sedang hamil, pastikan asupan gizi Anda terpenuhi untuk mencegah stunting pada janin. Temui peneliti gizi untuk informasi lebih lanjut.
                  </p>
                  <a tabindex="0" href="#" class="btn btn-custom align-self-center align-content-center" target="_blank"><i class="bi bi-whatsapp"></i> Hubungi Dokter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {},
};

export default konsultasi;
