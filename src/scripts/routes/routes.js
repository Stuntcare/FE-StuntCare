import Home from '../views/pages/home';
import Artikel from '../views/pages/artikel';
import Kalkulator from '../views/pages/kalkulator';
import Mpasi from '../views/pages/mpasi';
import konsultasi from '../views/pages/consultasi';
import AboutUs from '../views/pages/tentangkami';
import DetailArtikel from '../views/pages/detailartikel';
import DetailMpasi from '../views/pages/detailmpasi';

const routes = {
  '/': Home,
  '/artikel': Artikel,
  '/kalkulator': Kalkulator,
  '/mpasi': Mpasi,
  '/konsultasi': konsultasi,
  '/tentangkami': AboutUs,
  '/artikel/:id': DetailArtikel,
  '/mpasi/:id': DetailMpasi,
};

export default routes;
