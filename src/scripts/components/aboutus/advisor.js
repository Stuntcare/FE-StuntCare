class Advisor extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
        <div class="card" style="width: 18rem; margin: 30px auto;">
          <img src="../images/profile-fery.jpg" class="card-img-top" alt="muhammad fery syahputra" style="width: 150px height: 150px">
          <div class="card-body text-center">
              <h5 class="card-title text-uppercase">Agrey Tosira</h5>
              <p class="card-text text-capitalize">Front-End Advisor</p>
              <div class="d-flex justify-content-center ">
                  <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-github"></i></a>
                  <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-linkedin"></i></a>
                  <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-instagram"></i></a>
                  <a href="#" target="_blank" class="fs-3 mr-3 ijonih"><i class="bi bi-telegram"></i></a>
              </div>
          </div>
        </div>
      `;
  }
}

customElements.define("team-advisor", Advisor);
