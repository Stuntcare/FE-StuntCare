class FooterElement extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <footer class="footer">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <img src="../images/Logo.png" height="30" alt="image" />
            <div class="social-icons">
              <a href="https://www.github.com/"<i class="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/"<i class="bi bi-linkedin"></i></a>
              <a href="https://www.instagram.com/"<i class="bi bi-instagram"></i></a>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <h5><span class="text-warning fw-bold">Services</span></h5>
            <ul class="list-unstyled">
              <a class="nav-link" href="#">Beranda</a>
              <a class="nav-link" href="#/artikel">Artikel</a>
              <a class="nav-link" href="#/kalkulator">Kalkulator Gizi</a>
              <a class="nav-link" href="#/mpasi">MPASI</a>
              <a class="nav-link" href="#/tentangkami">Tentang Kami</a>
            </ul>
          </div>
          <div class="col-md-4 mb-4">
            <h5>About<span class="text-warning fw-bold"> Us</span></h5>
            <ul class="list-unstyled">
              <li>              
                <a>F4206YA030- Muhammad Firza Fernanda - F01</a>
              </li>
              <li>              
                <a>F0096YB29 - Muhammad Fery Syahputra - F06</a>
              </li>
              <li>              
                <a>F2696YA373 - Muhammad Rizq Saputra - F02</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
      `;
  }
}

customElements.define("footer-gaming", FooterElement);
