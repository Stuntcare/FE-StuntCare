// Fungsi untuk memformat tanggal
const formatTanggal = (tanggal) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const tanggalObj = new Date(tanggal);
  return tanggalObj.toLocaleDateString('id-ID', options);
};

const renderNotFound = () => `
    <div style="text-align: center;">
      <img src="/images/empty.webp" alt="Page not found image" style="display: block; max-width: 100%; margin-inline: auto;">
    </div>
  `;

const createSkeletonMpasiItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4 mpasi-pages">
      <a>
        <div class="card">
          <img class="header__img skeleton">
          <div class="card-body">
            <h5 class="card-title">
              <div class="skeleton skeleton-text" style="width:50%; display: block; margin-inline: auto;"></div>
            </h5>
          </div>
        </div>  
      </a>
    </div>
    `;
  }

  return template;
};

const createSkeletonArtikelItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="col-md-4 col-sm-6 mb-4 arikel-pages">
      <a>
        <div class="card">
          <img class="header__img skeleton">
          <div class="card-body">
            <h5 class="card-title">
              <div class="skeleton skeleton-text" style="width:50%; display: block; margin-inline: auto;"></div>
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
            </h5>
          </div>
        </div>  
      </a>
    </div>
    `;
  }

  return template;
};

const createSkeletonMpasiDetail = () => `;
  <div class="container mt-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <img class="header__img skeleton">
      </div>
      <div class="col-md-6">
        <div class="mt-4">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>

    <div class="container mt-4 p-4 rounded shadow-sm">
      <div class="row">
        <div class="col-md-4">
          <ul>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>

          </ul>
        </div>
        <div class="col-md-8">

          <ol class="pl-3">
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
          </ol>
        </div>
      </div>
    </div>
  </div>
`;

const createSkeletonArtikelDetail = () => `;
  <style>
    .text-artikel{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 20px;
      font-weight: 700;
      text-shadow: -1px -1px 0 #000,  
                1px -1px 0 #000,  
                -1px 1px 0 #000,  
                1px 1px 0 #000;
    }

    .img-artikel-detail{
      width: 100%;
      height: 700px;
      object-fit: cover;
      object-position: center;
    }

    .detail-artikel{
      padding-inline: 4rem;
    }

    .desc-detail-artikel {
      text-align: justify;
      padding: 4rem;
    }
  </style>

  <section class="container-fluid">
    <div class="row">
      <div class="detail-artikel">
        <img class="header__img img-artikel-detail skeleton">
      </div>
    </div>
      <div class="desc-detail-artikel px-20">
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text skeleton-text__body"></div>
        <br/>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text skeleton-text__body"></div>
      </div>
    </div>
      

`;

const createMpasiTemplate = (mpasi) => `
<div class="col-lg-3 col-md-4 col-sm-6 mb-4 mpasi-pages">
  <a href="#/mpasi/${mpasi.id}">
  <style>
  .card {
    transition: transform 0.5s;
  }

  .card:hover {
    transform: scale(1.05)
  }
  </style>
    <div class="card">
      <img src="${mpasi.gambar}" class="card-img-top mpasi-img" alt="${mpasi.makanan}">
      <div class="card-body">
        <h5 class="card-title">
          <h2 class="list_item_title arikel-pages-name" style="color: black; text-transform: capitalize;" tabindex="0">${mpasi.makanan}</h2>
        </h5>
        <p class="card-text arikel-pages-desc">${mpasi.kategori}</p>
      </div>
    </div>  
  </a>
</div>
`;

const createArtikelTemplate = (artikel) => `
<div class="col-lg- col-md-4 col-sm-6 mb-4 arikel-pages">
<style>
  .card {
    transition: transform 0.5s; /* Efek transisi saat card dihover */
  }

  .card:hover {
    transform: scale(1.05); /* Mengubah ukuran saat dihover */
  }
</style>
  <a href="#/artikel/${artikel.id}">
    <div class="card">
      <img src="${artikel.gambar}" class="card-img-top artikel-img" alt="${artikel.judul}">
      <div class="card-body">
        <a class="card-title">
          <h4 class="list_item_title artikel-pages-name text-dark text-capitalize text-center fw-bold" tabindex="0">${artikel.judul}</h4>
          <p class="artikel-deskripsi" 
          style="overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;">${artikel.deskripsi}</p>
        </a>
        <p class="card-text arikel-pages-desc">${formatTanggal(artikel.tanggal)}</p>
      </div>
    </div>  
  </a>
</div>
`;

const createMPASIDetailTemplate = (mpasi) => `
  <div class="container mt-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <img src="${mpasi.gambar}" alt="${
  mpasi.makanan
}" class="img-fluid mb-4 rounded" style="width: 100%; height: auto;">
      </div>
      <div class="col-md-6">
        <div class="text-center">
          <h2 class="mb-3 fw-bold">${mpasi.makanan}</h2>
          <p class="text-muted">${mpasi.porsi} porsi &bullet; Kategori: ${
  mpasi.kategori
}</p>
        </div>
        <div class="mt-4">
          <h4 class="mb-3 fw-bold text-center">Kandungan Gizi</h4>
          <table class="table table-striped text-center">
            <tbody>
              <tr>
                <td>Kalori</td>
                <td>${mpasi.kalori} kkal</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>${mpasi.protein} gram</td>
              </tr>
              <tr>
                <td>Lemak</td>
                <td>${mpasi.lemak} gram</td>
              </tr>
              <tr>
                <td>Karbohidrat</td>
                <td>${mpasi.karbohidrat} gram</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="container mt-4 p-4 rounded shadow-sm">
      <div class="row">
        <div class="col-md-4">
          <h4 class="mb-3 pb-2 border-bottom fw-bold">Bahan-bahan</h4>
          <ul>
            ${Object.keys(mpasi.bahan)
    .map(
      (key) => `
              <li class="mb-2"><strong>${key}</strong>: ${mpasi.bahan[key]}</li>
              `,
    )
    .join('')}
          </ul>
        </div>
        <div class="col-md-8">
          <h4 class="mb-3 pb-2 border-bottom fw-bold">Cara Membuat</h4>
          <ol class="pl-3">
            ${mpasi.cara_masak
    .map(
      (step) => `
              <li class="mb-2">${step}</li>
              `,
    )
    .join('')}
          </ol>
        </div>
      </div>
    </div>
  </div>
`;

const createArtikelDetailTemplate = (artikel) => {
  const deskripsiFormatted = artikel.deskripsi.replace(/\n/g, '<br>');

  return `
  <style>
    .text-artikel{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 20px;
      font-weight: 700;
      text-shadow: -1px -1px 0 #000,  
                1px -1px 0 #000,  
                -1px 1px 0 #000,  
                1px 1px 0 #000;
    }

    .img-artikel-detail{
      width: 100%;
      height: 700px;
      object-fit: cover;
      object-position: center;
    }

    .detail-artikel{
      position: relative;
      padding: 4rem;
    }

    .desc-detail-artikel {
      text-align: justify;
      margin-top: 20px;
      padding: 4rem;
    }
  </style>
  <section class="container-fluid">
    <div class="row">
      <div class="detail-artikel">
        <img src="${artikel.gambar}" alt="${artikel.judul}" class="img-artikel-detail" />
        <div class="text-artikel text-center">
          <span>${formatTanggal(artikel.tanggal)}</span>
          <h2>${artikel.judul}</h2>
        </div>

      </div>

      <div class="container-fluid px-3 container-lg">
        <div class="row news-info justify-content-center">
          <div class="col-md-auto col-author text-center text-md-end">
            <a href="${artikel.sumber}"   >Sumber Artikel</a>
          </div>

          <div class="col-md-auto col-date text-center text-md-center">
            Date: ${formatTanggal(artikel.tanggal)}.
          </div>
        </div>
      </div>
      
      <p class="desc-detail-artikel">
        ${deskripsiFormatted}
      </p>
    </div>
  </section>
  `;
};

// * TOMBOL LIKE
const createLikeButtonTemplate = () => `;
  <button aria-label="like this mpasi" id="likeButton" class="like">
    <i class="bi bi-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this mpasi" id="likeButton" class="like">
    <i class="bi bi-heart-fill" aria-hidden="true"></i>
  </button>
`;

export {
  renderNotFound,
  createMpasiTemplate,
  createMPASIDetailTemplate,
  createArtikelTemplate,
  createArtikelDetailTemplate,
  createSkeletonMpasiItemTemplate,
  createSkeletonArtikelItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonMpasiDetail,
  createSkeletonArtikelDetail,
};
