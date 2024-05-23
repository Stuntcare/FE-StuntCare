import UrlParser from "../routes/url-parser";

import Home from "../views/pages/home";
import Artikel from "../views/pages/artikel";
import Kalkulator from "../views/pages/kalkulator";
import Mpasi from "../views/pages/mpasi";
import AboutUs from "../views/pages/tentangkami";
import Detail from "../views/pages/detailartikel";

const routes = {
  "/": Home,
  "/artikel": Artikel,
  "/kalkulator": Kalkulator,
  "/mpasi": Mpasi,
  "/tentangkami": AboutUs,
  "/detail/:id": Detail,
};

export default routes;
