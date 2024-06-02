const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://stuntcare.cleverapps.io";

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
