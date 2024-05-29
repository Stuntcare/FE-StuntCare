const BASE_URL = "http://localhost:3000";
// const API_ENDPOINT = {
//   LIST_RESTAURANT: `${BASE_URL}list`,
//   DETAIL_RESTAURANT: (id) => `${BASE_URL}detail/${id}`,
//   SEARCH_RESTAURANT: (query) => `${BASE_URL}search?q=${query}`,
//   ADD_REVIEW: `${BASE_URL}review`,
//   RESTAURANT_IMAGE_SMALL: (pictureId) => `${BASE_URL}images/small/${pictureId}`,
//   RESTAURANT_IMAGE_MEDIUM: (pictureId) => `${BASE_URL}images/medium/${pictureId}`,
//   RESTAURANT_IMAGE_LARGE: (pictureId) => `${BASE_URL}images/large/${pictureId}`,
//   DEFAULT_LANGUAGE: 'en-us',
// };

const API_ENDPOINT = {
  MPASI: `${BASE_URL}/api/mpasi`,
  DETAILMPASI: (id) => `${BASE_URL}/api/mpasi/${id}`,
  SEARCHMPASI: (query) => `${BASE_URL}/api/mpasi?q=${query}`,
  KATEGORIMPASI: (query) => `${BASE_URL}/api/mpasi?kategori=${query}`,
  ARTIKEL: `${BASE_URL}/api/artikel`,
  DETAILARTIKEL: (id) => `${BASE_URL}/api/artikel/${id}`,
  SEARCHARTIKEL: (query) => `${BASE_URL}/api/artikel?q=${query}`,
  KATEGORIARTIKEL: (query) => `${BASE_URL}/api/artikel?kategori=${query}`,
};

export default API_ENDPOINT;
