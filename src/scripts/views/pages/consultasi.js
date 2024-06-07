import '../../components/main';
import '../../components/loader';

const konsultasi = {
  async render() {
    return `
    <section class="py-0 mt-3">
      <div class="container-fluid px-0">
        <div class="row justify-content-between align-items-center g-0">
          <div
            class="col-md-6 d-flex justify-content-center order-first order-md-last"
          >
            <img
              src="../../images/profile-fery.jpg"
              style="width: 100%; max-height: 600px; object-fit: cover"
            />
          </div>
          <div class="col-md-6 text-center py-5 px-4 px-md-5">
            <h1>Hello,</h1>
            <p class="lead">
              Kami di sini untuk membantu Anda. Jangan ragu untuk berkonsultasi
              dengan kami dan temukan jawaban yang Anda cari.
            </p>
            <p class="mt-4 mb-5">
              <a
                class="btn btn-secondary"
                href="https://t.me/ferys2343"
                target="_blank"
                ><i class="bi bi-telegram"></i> Contact Me</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <custom-loader></custom-loader>
    `;
  },
  async afterRender() {
    const loader = document.querySelector('custom-loader');

    if (loader) {
      loader.show();
    }

    setTimeout(() => {
      if (loader) {
        loader.hide();
      }
    }, 2000);
  },
};

export default konsultasi;
