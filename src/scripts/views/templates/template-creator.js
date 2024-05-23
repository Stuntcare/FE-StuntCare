import CONFIG from "../../globals/config";
import RestaurantSource from "../../data/restaurant-source";

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
                .map((drink) => `<li class="list-group-item">${drink.name}</li>`)
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


// const createLikeButtonTemplate = () => `;
//   <button aria-label="like this restaurants" id="likeButton" class="like">
//     <i class="bi bi-heart" aria-hidden="true"></i>
//   </button>
// `;

// const createLikedButtonTemplate = () => `
//   <button aria-label="unlike this restaurants" id="likeButton" class="like">
//     <i class="bi bi-heart-fill" aria-hidden="true"></i>
//   </button>

export { createRestaurantTemplate, createRestaurantDetailTemplate };
