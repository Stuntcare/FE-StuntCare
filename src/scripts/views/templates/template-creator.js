const renderNotFound = () => {
  return `
    <div style="text-align: center;">
      <img src="/images/empty.webp" alt="Page not found image" style="display: block; max-width: 100%; margin-inline: auto;">
    </div>
  `;
};

const createSkeletonMpasiItemTemplate = (count) => {
  let template = "";

  for (let i = 0; i < count; i++) {
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
        <h5 class="card-title">
          <h2 class="list_item_title arikel-pages-name text-dark" tabindex="0">${artikel.judul}</h2>
          <p style="    overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;">${artikel.deskripsi}</p>
        </h5>
        <p class="card-text arikel-pages-desc">${artikel.kategori}</p>
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
              `
              )
              .join("")}
          </ul>
        </div>
        <div class="col-md-8">
          <h4 class="mb-3 pb-2 border-bottom fw-bold">Cara Membuat</h4>
          <ol class="pl-3">
            ${mpasi.cara_masak
              .map(
                (step) => `
              <li class="mb-2">${step}</li>
              `
              )
              .join("")}
          </ol>
        </div>
      </div>
    </div>
  </div>
`;

// Fungsi untuk memformat tanggal
const formatTanggal = (tanggal) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const tanggalObj = new Date(tanggal);
  return tanggalObj.toLocaleDateString("id-ID", options);
};

const createArtikelDetailTemplate = (artikel) => {
  const deskripsiFormatted = artikel.deskripsi.replace(/\n/g, '<br>');
  
  return `
  <style>
    .text-artikel{
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 20px;
      font-weight: 700;
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
          <span>${artikel.kategori}</span>
          <h2>${artikel.judul} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veritatis qui architecto ea perspiciatis labore autem ad? Culpa, officia enim.</h2>
        </div>
      </div>

      <div class="container-fluid px-3 container-lg">
        <div class="row news-info justify-content-center">
          <div class="col-md-auto col-author text-center text-md-end">
            Source: <a href="${artikel.sumber}" target="_blank">Sumber</a>
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
}


{/* <div class="container artikel-detail mt-4">
  <div class="row justify-content-center">
    <div class="col-12 col-md-4 text-center">
      <img class="artikel-detail__gambar img-fluid rounded mb-4" src="${artikel.gambar}" alt="${artikel.judul}" />
      <p class="artikel-detail__sumber">Source: <a href="${
        artikel.sumber
      }" target="_blank">${artikel.sumber}</a></p>
    </div>
    <div class="col-12 col-md-8">
      <div class="artikel-detail__info">
        <h2 class="artikel-detail__judul">${artikel.judul}</h2>
        <div class="artikel-detail__meta">
          <p class="artikel-detail__tanggal">Tanggal: ${formatTanggal(
            artikel.tanggal
          )}</p>
          <p class="artikel-detail__kategori">Category: ${artikel.kategori}</p>
        </div>
        <div class="artikel-detail__deskripsi">
          <h4>Description</h4>
          <p>${artikel.deskripsi}</p>
        </div>
      </div>
    </div>
  </div>
</div> */}
// * TOMBOL LIKE
// const createLikeButtonTemplate = () => `;
//   <button aria-label="like this restaurants" id="likeButton" class="like">
//     <i class="bi bi-heart" aria-hidden="true"></i>
//   </button>
// `;

// const createLikedButtonTemplate = () => `
//   <button aria-label="unlike this restaurants" id="likeButton" class="like">
//     <i class="bi bi-heart-fill" aria-hidden="true"></i>
//   </button>

/*
! Template Restaurant PWA
const createRestaurantDetailTemplate = (restaurant) => `
<div class="container restaurant-detail">
  <div class="row justify-content-center">
    <div class="col-12 text-center">
      <h2 class="restaurant-detail__name">${restaurant.name}</h2>
      <img class="restaurant-detail__image img-fluid mb-4" src="${RestaurantSource.getRestaurantImageUrl(
        restaurant.pictureId,
        "medium"
      )}" alt="${restaurant.name}" />
    </div>
    <div class="col-12 col-md-8">
      <div class="restaurant-detail__info">
        <h4>Address</h4>
        <p>${restaurant.address}, ${restaurant.city}</p>
        <h4>Description</h4>
        <p>${restaurant.description}</p>
        <h4>Menu</h4>
        <div class="row restaurant-detail__menu">
          <div class="col-md-6">
            <h5>Foods</h5>
            <ul class="list-group">
              ${restaurant.menus.foods
                .map((food) => `<li class="list-group-item">${food.name}</li>`)
                .join("")}
            </ul>
          </div>
          <div class="col-md-6">
            <h5>Drinks</h5>
            <ul class="list-group">
              ${restaurant.menus.drinks
                .map(
                  (drink) => `<li class="list-group-item">${drink.name}</li>`
                )
                .join("")}
            </ul>
          </div>
        </div>
        <h4>Customer Reviews</h4>
        <div class="restaurant-detail__reviews">
          ${restaurant.customerReviews
            .map(
              (review) => `
            <div class="review card mb-3">
              <div class="card-body">
                <p><strong>${review.name}</strong></p>
                <p>${review.review}</p>
                <p class="text-muted">${review.date}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  </div>
</div>
`;
*/

/*
! Template Restaurant PWA
const createRestaurantTemplate = (restaurant) => `
<div class="col-lg-3 col-md-4 col-sm-6 mb-4 arikel-pages">
  <div class="card">
    <img src="${RestaurantSource.getRestaurantImageUrl(
      restaurant.pictureId,
      "medium"
    )}" class="card-img-top " alt="${restaurant.name}">
    <div class="card-body">
      <h5 class="card-title">
        <a href="#/detail/${restaurant.id}">
          <h2 class="list_item_title arikel-pages-name" tabindex="0">${
            restaurant.name
          }</h2>
        </a>
      </h5>
      <p class="card-text arikel-pages-desc">${restaurant.description}</p>
      <a href="#/detail/${restaurant.id}" class="no-link-style">
        <button class="btn btn-warning">Baca Selengkapnya</button>
      </a>
    </div>
  </div>  
</div>
`;
*/
export {
  renderNotFound,
  createMpasiTemplate,
  createMPASIDetailTemplate,
  createArtikelTemplate,
  createArtikelDetailTemplate,
  createSkeletonMpasiItemTemplate,
};
