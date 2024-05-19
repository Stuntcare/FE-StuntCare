import RestaurantSource from '../../data/restaurant-source';

const Kalkulator = {
    async render() {
      return `
        <h2>Kalkulator</h2>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
      const restaurants = await RestaurantSource.getListOfRestaurants();
      console.log(restaurants);
    },
  };
   
  export default Kalkulator;