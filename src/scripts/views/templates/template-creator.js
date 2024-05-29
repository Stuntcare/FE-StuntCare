const createMpasiTemplate = (mpasi) => `
<div class="col-lg-3 col-md-4 col-sm-6 mb-4 mpasi-pages">
  <div class="card">
    <img src="${mpasi.gambar}" class="card-img-top mpasi-img" alt="${mpasi.makanan}">
    <div class="card-body">
      <h5 class="card-title">
        <a href="#/detailmpasi/${mpasi.id}">
          <h2 class="list_item_title arikel-pages-name" tabindex="0">${mpasi.makanan}</h2>
        </a>
      </h5>
      <p class="card-text arikel-pages-desc">${mpasi.kategori}</p>
      <a href="#/detailmpasi/${mpasi.id}" class="no-link-style">
        <button class="btn btn-warning">Baca Selengkapnya</button>
      </a>
    </div>
  </div>  
</div>
`;

const createArtikelTemplate = (artikel) => `
<div class="col-lg-3 col-md-4 col-sm-6 mb-4 arikel-pages">
  <div class="card">
    <img src="${artikel.gambar}" class="card-img-top artikel-img" alt="${artikel.judul}">
    <div class="card-body">
      <h5 class="card-title">
        <a href="#/detailartikel/${artikel.id}">
          <h2 class="list_item_title arikel-pages-name" tabindex="0">${artikel.judul}</h2>
        </a>
      </h5>
      <p class="card-text arikel-pages-desc">${artikel.kategori}</p>
      <a href="#/detailartikel/${artikel.id}" class="no-link-style">
        <button class="btn btn-warning">Baca Selengkapnya</button>
      </a>
    </div>
  </div>  
</div>
`;

const createMPASIDetailTemplate = (mpasi) => `
<img src="${mpasi.gambar}" alt="${mpasi.makanan}" class="img-fluid mb-4" style="max-width: 600px;">
<div class="container mt-5">
  <div class="text-center">
    <h2 class="mb-3">${mpasi.makanan}</h2>
    <p class="text-muted">${mpasi.porsi} porsi &bullet; Kategori: ${mpasi.kategori}</p>
  </div>

  <div class="row mt-4">
    <div class="col-md-6">
      <h4 class="mb-3">Bahan-bahan</h4>
    </div>
  </div>

  <div class="mt-4">
    <h4 class="mb-3">Kandungan Gizi</h4>
  </div>
</div>
`;
// const createMPASIDetailTemplate = (mpasi) => `
// <img src="${mpasi.gambar}" alt="${
//   mpasi.makanan
// }" class="img-fluid mb-4" style="max-width: 600px;">
// <div class="container mt-5">
//   <div class="text-center">
//     <h2 class="mb-3">${mpasi.makanan}</h2>
//     <p class="text-muted">${mpasi.porsi} porsi &bullet; Kategori: ${
//   mpasi.kategori
// }</p>
//   </div>

//   <div class="row mt-4">
//     <div class="col-md-6">
//       <h4 class="mb-3">Bahan-bahan</h4>
//       <ul class="list-group">
//         ${Object.entries(mpasi.bahan)
//           .map(
//             ([key, value]) =>
//               `<li class="list-group-item">${key}: ${value}</li>`
//           )
//           .join("")}
//       </ul>
//     </div>
//     <div class="col-md-6">
//       <h4 class="mb-3">Cara Memasak</h4>
//       <ol class="list-group list-group-numbered">
//         ${mpasi.cara_masak
//           .map((step) => `<li class="list-group-item">${step}</li>`)
//           .join("")}
//       </ol>
//     </div>
//   </div>

//   <div class="mt-4">
//     <h4 class="mb-3">Kandungan Gizi</h4>
//     <ul class="list-group">
//       ${Object.entries(mpasi.kandungan)
//         .map(
//           ([key, value]) => `<li class="list-group-item">${key}: ${value}</li>`
//         )
//         .join("")}
//     </ul>
//   </div>
// </div>
// `;


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

const createArtikelDetailTemplate = (artikel) => `
<div class="container artikel-detail mt-4">
  <div class="row justify-content-center">
    <div class="col-12 col-md-4 text-center">
      <img class="artikel-detail__gambar img-fluid rounded mb-4" src="${
        artikel.gambar
      }" alt="${artikel.judul}" />
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
</div>
`;

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
  createMpasiTemplate,
  createMPASIDetailTemplate,
  createArtikelTemplate,
  createArtikelDetailTemplate,
};
