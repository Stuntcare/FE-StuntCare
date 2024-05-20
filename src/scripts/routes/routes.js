import UrlParser from "../routes/url-parser";

import Artikel from "../views/pages/artikel";
import Kalkulator from "../views/pages/kalkulator";
import Mpasi from "../views/pages/mpasi";
import AboutUs from "../views/pages/tentangkami";

import Home from "../views/pages/home";

const routes = {
  "/": Home,
  "/artikel": Artikel,
  "/kalkulator": Kalkulator,
  "/mpasi": Mpasi,
  "/tentangkami": AboutUs,
};

export default routes;
