class FeryProfile extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="col-sm-6 col-md-4 mb-4">
            <div class="card">
                <img src="../images/profile-fery.jpg" class="card-img-top" alt="muhammad fery syahputra" style="width: 150px; height: 150px;">
                <div class="card-body text-center">
                    <h5 class="card-title text-uppercase">Muhammad Fery Syahputra</h5>
                    <p class="card-text text-capitalize">front-end developer</p>
                    <div class="d-flex justify-content-center">
                        <a href="https://github.com/MuhammadFerySyahputra" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/muhammadferysyahputra/" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-linkedin"></i></a>
                        <a href="https://www.instagram.com/ferysyahputra456" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-instagram"></i></a>
                        <a href="https://t.me/Ferys2343" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-telegram"></i></a>
                    </div>
                </div>
            </div>
        </div>
      `;
  }
}

customElements.define("fery-profile", FeryProfile);
