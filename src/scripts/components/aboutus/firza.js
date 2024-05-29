class FirzaProfile extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="col-sm-6 col-md-4 mb-4">
            <div class="card">
                <img src="../images/firza.jpg" class="card-img-top" alt="Muhammad Firza Fernanda">
                <div class="card-body text-center">
                    <h5 class="card-title text-uppercase">Muhammad Firza Fernanda</h5>
                    <p class="card-text text-capitalize">project manager</p>
                    <div class="d-flex justify-content-center">
                        <a href="https://github.com/MuhammadFirzaFernanda17" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/muhammad-firza-fernanda-84abb3221/" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-linkedin"></i></a>
                        <a href="https://www.instagram.com/benarinipiers17/" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-instagram"></i></a>
                        <a href="https://t.me/ngekngek17" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-telegram"></i></a>
                    </div>
                </div>
            </div>
        </div>
      `;
  }
}

customElements.define("firza-profile", FirzaProfile);
