class navbarnih extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="">
          <img src="../images/Logo.png" height="30" alt="image" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav11"
          aria-controls="navbarNav11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav11">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/artikel">Artikel</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/kalkulator">Kalkulator Gizi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/mpasi">MPASI</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/tentangkami">Tentang Kami</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
  }
}

customElements.define('navbar-nih', navbarnih);
