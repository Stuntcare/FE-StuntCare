/* eslint-disable no-undef */
import { handleKeydown, handleClick, addLayananTabListener } from '../utils/dropdown';

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
            <a href="#" aria-haspopup="true" aria-expanded="false">Layanan</a>
            <ul class="dropdown-content" aria-label="submenu">
              <li><a href="#/artikel">Artikel</a></li>
              <li><a href="#/kalkulator">Kalkulator Gizi</a></li>
              <li><a href="#/mpasi">MPASI</a></li>
            </ul>
          </li>
          <li>
            <a href="#/tentangkami">Tentang</a>
          </li>
        </ul>
      </nav>
    </header>
    `;

    this.addEventListener('keydown', handleKeydown);
    this.addEventListener('click', handleClick);

    const layananButton = this.querySelector('.nav-item.dropdown > a');
    addLayananTabListener(layananButton);
  }
}

customElements.define('navbar-nih', navbarnih);
