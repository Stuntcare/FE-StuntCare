/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import API_ENDPOINT from '../globals/api-endpoint';

class ArtikelSource {
  static async getAllArtikel() {
    try {
      const response = await fetch(API_ENDPOINT.ARTIKEL);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Failed to fetch Artikel data:', error);
      alert('Gagal memuat data Artikel. Silakan coba lagi nanti.');
    }
  }

  static async detailArtikel(id) {
    const response = await fetch(API_ENDPOINT.DETAILARTIKEL(id));
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async searchArtikel(query) {
    const response = await fetch(API_ENDPOINT.SEARCHARTIKEL(query));
    const responseJson = await response.json();
    return responseJson;
  }

  static async kategoriArtikel(query) {
    const response = await fetch(API_ENDPOINT.KATEGORIARTIKEL(query));
    const responseJson = await response.json();
    return responseJson;
  }

  static async getArtikelByPage(page) {
    try {
      const response = await fetch(API_ENDPOINT.ARTIKELPAGE(page));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Failed to fetch Artikel data:', error);
      alert('Gagal memuat data Artikel. Silakan coba lagi nanti.');
    }
  }
}

export default ArtikelSource;
