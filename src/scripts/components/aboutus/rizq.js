class RizqProfile extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="col-sm-6 col-md-4 mb-4">
            <div class="card">
                <img src="../images/rizq.jpg" class="card-img-top" alt="Muhammad Rizq Saputra">
                <div class="card-body text-center">
                    <h5 class="card-title text-uppercase">Muhammad Rizq Saputra</h5>
                    <p class="card-text text-capitalize">back-end developer</p>
                    <div class="d-flex justify-content-center">
                        <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-github"></i></a>
                        <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-linkedin"></i></a>
                        <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-instagram"></i></a>
                        <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-telegram"></i></a>
                    </div>
                </div>
            </div>
        </div>
      `;
  }
}

customElements.define("rizq-profile", RizqProfile);
