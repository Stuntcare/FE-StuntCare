class navbarnih extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <header class="app-bar">
      <div class="app-bar__brand">
        <a href="#/"><img src="../images/Logo.png" height="30" alt="image" /></a>
      </div>
      <div class="app-bar__menu">
        <button id="hamburgerButton">☰</button>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li><a href="#/">Beranda</a></li>
          <li class="nav-item dropdown">
            <a>Layanan</a>
            <ul class="dropdown-content">
              <li><a href="#/artikel">Artikel</a></li>
              <li><a href="#/kalkulator">Kalkulator Gizi</a></li>
              <li><a href="#/mpasi">MPASI</a></li>
            </ul>
          </li>
          <li>
            <a href="#/tentangkami">tentang</a>
          </li>
        </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define("navbar-nih", navbarnih);
