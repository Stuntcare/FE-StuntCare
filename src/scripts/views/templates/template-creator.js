import CONFIG from "../../globals/config";
import RestaurantSource from "../../data/restaurant-source";

const createRestaurantTemplate = (restaurant) => `
<div class="container d-flex">
  <div class="row">
  <div class="card col">
    <img src="${RestaurantSource.getRestaurantImageUrl(
      restaurant.pictureId,
      "medium"
    )}" class="card-img-top" alt="${restaurant.name}">
    <div class="card-body">
      <h5 class="card-title">
        <a href="#/detail/${restaurant.id}">
          <h2 class="list_item_title" tabindex="0">${restaurant.name}</h2>
        </a>
      </h5>
      <p class="card-text">${restaurant.description}</p>
      <p>${restaurant.date}</p>
      <a href="#/detail/${
        restaurant.id
      }" class="btn btn-warning">Baca Selengkapnya</a>
    </div>
  </div>
  </div>
</div>

`;

// const createLikeButtonTemplate = () => `;
//   <button aria-label="like this restaurants" id="likeButton" class="like">
//     <i class="bi bi-heart" aria-hidden="true"></i>
//   </button>
// `;

// const createLikedButtonTemplate = () => `
//   <button aria-label="unlike this restaurants" id="likeButton" class="like">
//     <i class="bi bi-heart-fill" aria-hidden="true"></i>
//   </button>

export { createRestaurantTemplate };
