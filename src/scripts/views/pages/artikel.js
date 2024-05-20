import { createRestaurantTemplate } from "../templates/template-creator";
import RestaurantSource from "../../data/restaurant-source";

const Artikel = {
  async render() {
    return `
      <h1 style="text-align: center;">Artikel Terkait Stunting</h1>
      <div class="cards-container" id="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getListOfRestaurants();
    const restaurantsContainer = document.querySelector("#restaurants");
    if (restaurantsContainer) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
      });
    } else {
      console.error("Element #restaurants not found");
    }
  },
};

export default Artikel;
