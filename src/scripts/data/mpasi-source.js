import API_ENDPOINT from "../globals/api-endpoint";

class MpasiSource {
  static async getAllMpasi() {
    try {
      const response = await fetch(API_ENDPOINT.MPASI);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error("Failed to fetch MPASI data:", error);
      alert("Gagal memuat data MPASI. Silakan coba lagi nanti.");
    }
  }

  static async detailMpasi(id) {
    const response = await fetch(API_ENDPOINT.DETAILMPASI(id));
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async searchMpasi(query) {
    const response = await fetch(API_ENDPOINT.SEARCHMPASI(query));
    const responseJson = await response.json();
    return responseJson;
  }

  static async kategoriMpasi(query) {
    const response = await fetch(API_ENDPOINT.KATEGORIMPASI(query));
    const responseJson = await response.json();
    return responseJson;
  }

  static async getMpasiByPage(page) {
    try {
      const response = await fetch(API_ENDPOINT.MPASIPAGE(page));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error("Failed to fetch MPASI data:", error);
      alert("Gagal memuat data MPASI. Silakan coba lagi nanti.");
    }
  }
}

export default MpasiSource;
